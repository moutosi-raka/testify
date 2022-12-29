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
        {/* <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="Group">
            <Form.Control type="text" placeholder="group" />
          </FloatingLabel>
        </Col> */}
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
      <Row>
        <Col md>
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              <div style={{height: '60px', width: '60px', marginLeft: '25px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-2 h-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
              </div>
            <p style={{marginBottom: '0px'}}>Add Question</p>

          </button>

        </Col>
      </Row>
    </div>
  );
};

export default Assessment;
