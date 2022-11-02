import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

const Lesson = () => {
  const data = useLoaderData();
  console.log(data);
  const { details, id, image_url, title, total_view } = data;
  return (
    <div>
      <Card>
        <Card.Header>Post Id: {id}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <h4>{title}</h4>
            <Image
              className="mt-2"
              style={{ width: "100%" }}
              src={image_url}
            ></Image>
            <footer className="blockquote-footer  mt-3">
              <p>{details}</p>
            </footer>
          </blockquote>
          <span>{total_view}</span>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Lesson;
<h1>lessons shows here</h1>;
