import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useParams,
} from "react-router-dom";
import { useState } from "react";

export const AuthForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  const handleToggleShowPassword = (): boolean =>
    setShowPassword((prevState) => !prevState) as unknown as boolean;
  const { mode } = useParams() as { mode: string };
  mode === "login" ? setIsLoginMode(true) : setIsLoginMode(false);

  return (
    <>
      <div className="auth-form">
        <Form method="post">
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
          <p>
            <span>
              Have an account ? <Link to="auth/login">Login</Link>
            </span>
            <span>
              Dont have an account ? <Link to="auth/signup"></Link>
            </span>
          </p>
        </Form>
      </div>
    </>
  );
};

export const authFormAction = async ({ request }: { request: any }) => {
  try {
    const data = await request.formData();
    const submission: { name: string; email: string; password: string } = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    };
    console.log(submission);
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      submission.email,
      submission.password
    );
    const user = userCredential.user;
    return redirect("");
  } catch (error) {
    console.error(error);
  }
};
