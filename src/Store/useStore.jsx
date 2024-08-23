import { create } from "zustand";
import emailjs from "@emailjs/browser";

const useStore = create((set, get) => ({
  gif: true,
  happy: false,
  sad: false,
  // Function to send the email with the selected response
  sendEmail: (response) => {
    const message = `Your lover clicked:`;
    emailjs
      .send(
        "service_ack0iqk",
        "template_7l59kvk",
        {
          to_name: userName,
          from_name: "the Love Of Your Life",
          to_email: userEmail,
          message,
        },
        "ztBK844ely_XQ_9hh"
      )
      .then((response) => {
        console.log("Email sent successfully:", response);
      })
      .catch((error) => {
        console.error("Email sending failed:", error);
      });
  },
  // Function to handle button clicks for "Yes" or "No"
  handleButtonClick: (response) => {
    set({ happy: response === "Yes", sad: response === "No", gif: false });
    get().sendEmail(response);
  },
}));

export default useStore;
