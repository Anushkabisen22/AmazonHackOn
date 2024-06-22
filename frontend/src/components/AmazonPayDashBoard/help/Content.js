import React, { useEffect, useState } from "react";
import axios from "axios";
import chatbot from "../../../assets/assets/chatbot.png";
import complain from "../../../assets/assets/complain.png";

const Content = () => {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/complaint/viewC");
        setComplaints(response.data);
      } catch (error) {
        console.error("Error fetching complaints:", error);
      }
    };

    fetchComplaints();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-3/4 justify-between flex bg-white mr-10 h-96">
      <div className="w-2/5 ml-4 mt-4">
        {complaints.map((complaint) => (
          <div
            key={complaint._id}
            className={`mb-2 flex justify-start gap-2 
              ${complaint.status === 'Resolved' ? 'bg-gradient-to-r from-green-100 to-green-300' : 'bg-gradient-to-r from-yellow-100 to-amazon_yellow'}
              font-bodyFont border border-gray-500 p-3 ml-1 mr-1 mt-3 rounded-md`}
          >
            <img src={complain} className="w-12" alt="complain" />
            <div className="flex flex-col">
              <span className="text-sm font-bold mt-2">{complaint.description}</span>
              <span className="mt-.5 text-xs text-gray-400 font-light">
                #{complaint._id.substring(0, 7)}
              </span>
            </div>
            <div className="ml-5 text-sm font-semibold mt-2">{formatDate(complaint.date)}</div>
          </div>
        ))}
      </div>
      <div className="w-1/3 h-52 mt-20 border border-double cursor-pointer rounded-sm flex gap-2 bg-quantity_box mr-14 mb-14">
        <img src={chatbot} className="w-10 h-9 mt-10 ml-8" alt="chatbot" />
        <div className="w-3/5 text-start mt-11">
          <p className="font-semibold font-bodyFont text-lg">Chat right now</p>
          <span className="font-light font-bodyFont text-sm">
            Our messaging assistant can quickly solve many issues or direct you to the right person or place.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Content;
