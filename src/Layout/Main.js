import React from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/SideBar/Sidebar";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Row className="container mx-auto pt-5">
        <Col className="pe-3" lg="4">
          <Sidebar></Sidebar>
        </Col>
        <Col className="ps-3" lg="8">
          <Outlet></Outlet>
        </Col>
      </Row>

      <Footer></Footer>
    </div>
  );
};

export default Main;
<Header></Header>;
