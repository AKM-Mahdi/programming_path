import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Register = () => {
  const { signInWithGoogle, createUser, updateUserProfile, emailVerification } =
    useContext(AuthContext);

  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);

  // sign in with google popups
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithGoogle(provider);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    createUser(email, password)
      .then((res) => {
        setError("");
        form.reset();
        console.log(res.user);
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success(
          "Registration successfully done please verify you email to login"
        );
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleAccepted = (e) => {
    setAccepted(e.target.checked);
    console.log(accepted);
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleEmailVerification = () => {
    emailVerification()
      .then((res) => {
        console.log("email send for verification");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form onSubmit={handleRegister} className="border p-4 rounded">
        <h4>Register Here</h4>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="name" name="name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Photo</Form.Label>
          <Form.Control type="text" name="photoURL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label={
              <>
                Please accept our
                <Link to="/terms"> terms and conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Form.Text className="text-danger">
          <p>
            <i>{error}</i>
          </p>
        </Form.Text>
        <Button variant="primary" type="submit" disabled={!accepted}>
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

export default Register;
