import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const analyzeHeader = async (header) => {
  try {
    const response = await axios.post(`${API_URL}/analyze`, { header });
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: "Failed to analyze header" };
  }
};
