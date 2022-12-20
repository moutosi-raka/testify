import React from "react";
import Col from "react-bootstrap/Col";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Assessment = () => {
  return (
    <div>
      <Row className="g-3 mt-5">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Assessment Name">
            <Form.Control type="text" placeholder="assessment name" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Class">
            <Form.Control type="text" placeholder="class" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Group">
            <Form.Control type="text" placeholder="group" />
          </FloatingLabel>
        </Col>
      </Row>

      <Row className="g-3 my-3">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Subject">
            <Form.Control type="text" placeholder="subject" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Total Marks">
            <Form.Control type="text" placeholder="total marks" />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Time Duration">
            <Form.Control type="text" placeholder="time duration" />
          </FloatingLabel>
        </Col>
      </Row>
    </div>
  );
};

export default Assessment;
