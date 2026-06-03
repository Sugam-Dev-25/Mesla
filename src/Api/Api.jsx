import axios from "axios";

// ✅ BASE CONFIG
const API = axios.create({
  baseURL: "https://soumi.ahaanmedia.com/wp-json/wp/v2",
});

// Contact entry API

export const submitContactEntry = async (data) => {
  const res = await fetch("https://soumi.ahaanmedia.com/wp-json/contact-entry/v1/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();   // ✅ REQUIRED
  return result;
};