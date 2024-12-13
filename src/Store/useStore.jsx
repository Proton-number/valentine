import { create } from "zustand";
import emailjs from "@emailjs/browser";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider, db } from "../Config/Firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const useStore = create((set, get) => ({
  user: null,
  gif: true,
  happy: false,
  sad: false,
  // Function to send the email with the selected response
  sendEmail: async (response, userId) => {
    try {
      // Fetch the original user's details from Firebase Auth or Firestore
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const userEmail = userDoc.data().email; // Assuming you store email in Firestore

        const message = `Your lover clicked: ${response}`;

        await emailjs.send(
          "service_ack0iqk",
          "template_7l59kvk",
          {
            to_name: userEmail,
            from_name: "The Love Of Your Life",
            to_email: userEmail,
            message,
          },
          "ztBK844ely_XQ_9hh"
        );

        console.log("Email sent successfully");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
    }
  },
  // Function to handle button clicks for "Yes" or "No"
  handleButtonClick: async (response, userId) => {
    set({ happy: response === "Yes", sad: response === "No", gif: false });
    await get().sendEmail(response, userId);
  },

  signUpHandler: async (navigate) => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      // Store user information in Firestore
      await setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email,
          displayName: user.displayName,
          createdAt: new Date(),
        },
        { merge: true }
      ); // merge: true prevents overwriting existing data
      set({ user });
      navigate(`/unique/${user.uid}`);
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
