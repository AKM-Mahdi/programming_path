import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Profile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  console.log(user);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    handleUpdateUserProfile(name, photoURL);
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
  return (
    <div>
      <h2 className="mb-3 border rounded p-3">Profile</h2>
      <Form onSubmit={handleSubmit} className="border p-4 rounded">
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            defaultValue={user.displayName}
            type="name"
            name="name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Photo</Form.Label>
          <Form.Control
            defaultValue={user.photoURL}
            type="text"
            name="photoURL"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            defaultValue={user.email}
            readOnly
            type="email"
            name="email"
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
    </div>
  );
};

export default Profile;
