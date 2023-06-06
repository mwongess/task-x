import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Form, Link, redirect, useActionData } from "react-router-dom";
import { useState } from "react";

export const AuthForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);

  //Returned values from action
  const dataFromAction = useActionData() as { message: string };
  let message = "";
  if (dataFromAction) {
    message = dataFromAction.message;
  }

  // Show/Hide password
  const handleToggleShowPassword = (): boolean =>
    setShowPassword((prevState) => !prevState) as unknown as boolean;

  // Set the Auth mode
  const switchAuthMode = () => {
    setIsLoginMode((prevState) => !prevState);
  };

  return (
    <>
      <div className="auth-form">
        <Form method="post">
          <div>
            <p>{message}</p>
          </div>
          {!isLoginMode && <input type="text" name="name" placeholder="Name" />}
          <input type="text" name="email" placeholder="Email" />
          <div className="auth-password">
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Password"
            />
            {/* Icon to toggle show password */}
          </div>
          <div className="auth-password">
            <input
              type={showPassword ? "password" : "text"}
              name="password"
              placeholder="Confirm Password"
            />
            {/* Icon to toggle show password */}
          </div>
          <button>{isLoginMode ? "Login" : "Signup"}</button>
          <p>
            {!isLoginMode && (
              <span>
                Have an account ?{" "}
                <Link to="/auth" onClick={switchAuthMode}>
                  Login
                </Link>
              </span>
            )}
            {isLoginMode && (
              <span>
                Dont have an account ?{" "}
                <Link to="/auth" onClick={switchAuthMode}>
                  Sign up
                </Link>
              </span>
            )}
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
    // const auth = getAuth();
    // const userCredential = await createUserWithEmailAndPassword(
    //   auth,
    //   submission.email,
    //   submission.password
    // );
    // const user = userCredential.user;

    if (!submission.email || !submission.password) {
      return { message: "Inputs cannot be empty!!" };
    }

    return redirect("/dashboard");
  } catch (error) {
    console.error(error);
  }
};
