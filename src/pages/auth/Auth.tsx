import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form } from "react-router-dom";
import { useState } from "react";

export const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [formData, setFormData] = useState<{ email: string; password: string }>(
    {
      email: "",
      password: "",
    }
  );

  const onSubmit = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className="auth-form">
        <Form action="/auth" method="post">
          {!isLoginMode && <input type="text" placeholder="Name" />}
          <input type="text" placeholder="Email" />
          <div className="auth-password">
            <input
              type={showPassword ? "password" : "text"}
              placeholder="Password"
            />
            {/* Icon to toggle show password */}
          </div>
          <button>{isLoginMode ? "Login" : "Signup"}</button>
        </Form>
      </div>
    </>
  );
};

const authFormAction = ()=> {

}