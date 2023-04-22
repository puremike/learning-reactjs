import { useEffect } from "react";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const res = await signInWithGooglePopup();
    console.log(res);
    createUserDocumentFromAuth(res.user);
  };

  return (
    <div>
      <div>I am signed in</div>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
