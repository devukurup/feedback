import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Row , Col , Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';


class App extends Component{
  render(){
    return(
      <div className="box">


      <Form style={{backgroundColor:'green'}}>
        <h1 style={{display:'flex',alignContent:'center',justifyContent:'center'}}>FEEDBACK FORM</h1>
         <Form.Group style={{paddingLeft:'5px'}}controlId="formBasicEmail">
           <Row >
           <Col ><Form.Label >E-mail <span style={{color:'red'}}>*</span></Form.Label></Col>
             <Col><Form.Control type="email" placeholder="ex: myname@example.com" /></Col>
           </Row>

        
       
       </Form.Group>
       <Form.Group>
         <Row>
           <Form.Label>
             Did the Programme give you enough time to understand the concepts of HTML,CSS and JS??
           </Form.Label>
         </Row>
         <Row>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group>
         <Row>
           <Form.Label>
             Did the Programme give you enough time to understand the concepts of HTML,CSS and JS??
           </Form.Label>
         </Row>
         <Row>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group>
         <Row>
           <Form.Label>
             Did the Programme give you enough time to understand the concepts of HTML,CSS and JS??
           </Form.Label>
         </Row>
         <Row>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group>
         <Row>
           <Form.Label>
             Did the Programme give you enough time to understand the concepts of HTML,CSS and JS??
           </Form.Label>
         </Row>
         <Row>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group>
         <Row>
           <Form.Label>
             Did the Programme give you enough time to understand the concepts of HTML,CSS and JS??
           </Form.Label>
         </Row>
         <Row>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="first radio"
          name="formHorizontalRadios"
          id="formHorizontalRadios1"
        />
           </Col>
         </Row>
       </Form.Group>

       <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>

    );
  }
}

export default App;
