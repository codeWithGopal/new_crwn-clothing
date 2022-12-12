import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";

const Signin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  return (
    <div>
      <h1>SIgn IN page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default Signin;
