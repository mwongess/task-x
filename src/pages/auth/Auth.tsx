import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Auth = () => {
  const onSubmit = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth)
      const user = userCredential.user
    } catch (error) {
        console.error(error)
    }
  };
  
   
};

export default Auth;
