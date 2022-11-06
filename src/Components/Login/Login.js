import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { loginWithEmailAndPassword, setLoading,signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

    // sign in with google popups
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      signInWithGoogle(provider);
    };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password);

    loginWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res.user);
        form.reset();
        // setError(error.message);
        if (res.user.emailVerified === true) {
          navigate(from, { replace: true });
        } else {
          toast.error("your email is not verified");
        }
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Form onSubmit={handleLogin} className="border p-4 rounded">
        <h4>Login Here</h4>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Text className="text-danger">
          <p>
            <i>{error}</i>
          </p>
        </Form.Text>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <div className="thirdPartyLOgin mt-5 border p-4 rounded d-flex  justify-content-between">
        <button className="btn btn-secondary" onClick={handleGoogleSignIn}>
          SIgn in With Google
        </button>
        <button className="btn btn-secondary">SIgn in With GitHub</button>
        <button className="btn btn-secondary">SIgn in With Facebook</button>
        <button className="btn btn-secondary">SIgn in With Twitter</button>
      </div>
    </div>
  );
};

export default Login;
