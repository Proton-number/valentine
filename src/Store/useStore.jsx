import { create } from "zustand";
import emailjs from "@emailjs/browser";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../Config/Firebase";

const useStore = create((set, get) => ({
  user: null,
  gif: true,
  happy: false,
  sad: false,
  // Function to send the email with the selected response
  sendEmail: (response) => {
    const { user } = get(); //to get the logged-in user from the state
    const userName = user?.displayName;
    const userEmail = user?.email;

    console.log("Sending email to:", userEmail);
    const message = `Your lover clicked: ${response}`;

    emailjs
      .send(
        "service_ack0iqk",
        "template_7l59kvk",
        {
          to_name: userName,
          from_name: "The Love Of Your Life",
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
  signUpHandler: async (navigate) => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      set({ user });
      navigate(`/initial/user=${user.uid}`);
      console.log("Google user data:", res.user.email);
    } catch (error) {
      console.error("Error signing up:", error);
    }
  },

  //logic for copy
  copy: false,
  copyHandler: () => {
    set({ copy: true });
    setTimeout(() => {
      set({ copy: false });
    }, 1500);
  },
}));

export default useStore;
