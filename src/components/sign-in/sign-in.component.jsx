import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../sign-up-form/sign-up-form.component.jsx";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>SIgn IN page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      <SignUpForm />
    </div>
  );
};

export default Signin;
