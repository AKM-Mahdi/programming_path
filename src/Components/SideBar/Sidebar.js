import React, { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/lessons")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  // console.log(questions);
  return (
    <div>
      <ListGroup as="ol" numbered>
        {questions.map((question) => (
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-start align-items-start"
            key={question.id}
          >
            <div className="fw-normal text-decoration-none ps-2">
              <Link
                className="text-decoration-none"
                to={`/lesson/${question.id}`}
              >
                {" "}
                {question.title}
              </Link>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default Sidebar;
