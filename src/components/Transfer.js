import React, { useState } from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";

const Transfer = () => {
  const [transferData, setTransferData] = useState({
    recipientAccountNumber: "",
    amount: "",
  });
  const history = createRoot();

  const handleInputChange = (event) => {
    setTransferData({
      ...transferData,
      [event.target.name]: event.target.value,
    });
  };

  const handleTransfer = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://web-assessment.apps.ocp.tmrnd.com.my/api/v1/transactions",
        transferData
      );

      if (response.status === 200) {
        alert("Transfer successful!");
        history.push("/");
      }
    } catch (error) {
      console.error(error);
      alert("Error transferring money");
    }
  };

  return (
    <form onSubmit={handleTransfer}>
      <div>
        <label htmlFor="recipientAccountNumber">
          Recipient Account Number:
        </label>
        <input
          type="text"
          id="recipientAccountNumber"
          name="recipientAccountNumber"
          value={transferData.recipientAccountNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={transferData.amount}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Transfer</button>
    </form>
  );
};

export default Transfer;
