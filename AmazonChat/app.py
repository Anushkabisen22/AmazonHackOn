import random
import time
from flask import Flask, render_template, request, jsonify
import warnings
import spacy
import requests
# Import the function from the module where it is defined
from new import retrieve_answer_from_pdf

nlp = spacy.load("en_core_web_sm")

warnings.filterwarnings("ignore")
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('chat.html')

@app.route("/create_knowledgebase", methods=["POST"])
def create_knowledgebase():
    # Assuming create_vector_db() is a function that initializes your knowledge base
    return jsonify({"status": "Knowledge base created"}), 200

@app.route("/get", methods=["POST"])
# def chat():
#     msg = request.form["msg"]
#     # Call the retrieve_answer_from_pdf function with the path to your PDF and the message from the user
#     response = retrieve_answer_from_pdf("data1.pdf", msg)
#     return jsonify({"result": response})

def chat():
    msg = request.form["msg"]
    return get_Chat_response(msg)

def lemmatize_text(text):
    doc = nlp(text)
    lemmatized_text = " ".join([token.lemma_ for token in doc])
    return lemmatized_text

def complaint(combined_id):
    print("Handling complaint...")
    # Define the URL of the API endpoint
    # url = 'https://api.example.com/update'
    url ='http://localhost:5000/api/complaint/registerC'

    # Define the headers (if any)
    headers = {
        'Content-Type': 'application/json',  # Assuming the API expects JSON data
        # 'Authorization': 'Bearer YOUR_ACCESS_TOKEN'  # If authentication is required
    }


    # random_number = random.randint(10000, 99999)
    # # Example string ID
    # string_id = "ID_"
    # # Concatenate the random number to the string ID
    # combined_id = string_id + str(random_number)
    # Define the data to be sent in the request body
    data = {
        # 'id': 123,  # ID of the record you want to update
        # 'field1': 'new_value1',
        # 'field2': 'new_value2'
        "description":combined_id
    }

    # Make the POST request
    response = requests.post(url, headers=headers, json=data)

    # Check the response
    if response.status_code == 200:
        print('Update successful:', response.json())
    else:
        print('Failed to update:', response.status_code, response.text)

def get_Chat_response(text):
    lemmatized_text = lemmatize_text(text)
    random_number = random.randint(10000, 99999)
    # Example string ID
    string_id = "ID_"
    # Concatenate the random number to the string ID
    combined_id = string_id + str(random_number)
    if "register a complaint" in lemmatized_text or "register my complaint" in lemmatized_text:
        time.sleep(3)
        complaint(combined_id)
        return "Your complaint with "+combined_id+" has been registered. To check the status of your Complaints , check complaints section from the help menu."
    else:
        response = retrieve_answer_from_pdf(r"E:\AI bot\AmazonChat\data1.pdf", lemmatized_text)
        return response

if __name__ == '__main__':
    app.run(debug=True)
