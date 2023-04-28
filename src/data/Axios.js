import axios from "axios";
import { useState } from "react";

const baseURL = "https://www.melivecode.com/api/attractions";
const [item, setItem] = useState("");
const [error, setError] = useState(null);

const Getdata = async () => {
  try {
    const response = await axios.get(`${baseURL}`);
    if (response.status === 200) {
      setItem(response?.data);
    }
  } catch (error) {
    console.error("err", error);
  }
};

const Postdata = async () => {
    try {
        
    } catch (error) {
        
    }
}