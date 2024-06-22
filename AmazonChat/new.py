from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings
from langchain.prompts import PromptTemplate
from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import CharacterTextSplitter
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain.chains import create_retrieval_chain
from langchain_community.vectorstores import InMemoryVectorStore as Chroma
from dotenv import load_dotenv
import os

def retrieve_answer_from_pdf(pdf_path, question):
    """
    This function loads a PDF, creates embeddings for its content, and retrieves an answer to a given question.
    
    Args:
    pdf_path (str): The path to the PDF file.
    question (str): The question to retrieve an answer for.
    
    Returns:
    str: The retrieved answer.
    """
    # Load environment variables
    load_dotenv()
    GOOGLE_API_KEY = os.getenv('GOOGLE_API_KEY')

    # Load the models
    llm = ChatGoogleGenerativeAI(model="gemini-pro",google_api_key="AIzaSyBBY7zqAs94UgrnCQYyenm2CZet11SH0lg")   
    embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001",google_api_key="AIzaSyBBY7zqAs94UgrnCQYyenm2CZet11SH0lg")
    
    # Load the PDF and create chunks
    loader = PyPDFLoader(pdf_path)
    text_splitter = CharacterTextSplitter(
        separator=".",
        chunk_size=1500,
        chunk_overlap=50,
        length_function=len,
        is_separator_regex=False,
    )
    pages = loader.load_and_split(text_splitter)

    # Turn the chunks into embeddings and store them in Chroma
    vectordb = Chroma.from_documents(pages, embeddings)

    # Configure Chroma as a retriever with top_k=5
    retriever = vectordb.as_retriever(search_kwargs={"k": 5})

    # Create the retrieval chain
    template = """
You are the Amazon help assistant.
Answer based on the context provided. 
context: {context}
input: {input}
answer:
"""
    prompt = PromptTemplate.from_template(template)
    combine_docs_chain = create_stuff_documents_chain(llm, prompt)
    retrieval_chain = create_retrieval_chain(retriever, combine_docs_chain)

    # Invoke the retrieval chain with the provided question
    response = retrieval_chain.invoke({"input": question})

    # Return the answer to the question
    answer = response["answer"]
    if not answer.strip() or "I don't know" in answer or "I'm not sure" in answer or "sorry" in answer or "apologize" in answer or "context provided" in answer or "provided context" in answer:
        return "I am sorry, I am unable to assist you with that request."
    return answer

# Example usage:
response = retrieve_answer_from_pdf(r"E:\AI bot\AmazonChat\data1.pdf", "how can i track my order")
print(response)
