import React,{Component} from 'react';
import Form from 'react-bootstrap/Form';
import {Row , Col , Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  render(){
    return(
      <div className="box">


      <Form style={{boxShadow:'5px 10px 18px #888888'}}>
        <h1 style={{display:'flex',alignContent:'center',justifyContent:'center',paddingBottom:'50px',padding:'20px'}}>FEEDBACK FORM</h1>

         <Form.Group controlId="formBasicEmail" style={{paddingTop:'20px'}}>
           <Row   style={{padding:'10px'}}>
           <Col xs={3}><Form.Label >E-mail <span style={{color:'red'}}>*</span></Form.Label></Col>
           <Col xs={7} ><Form.Control type="email" placeholder="ex: myname@example.com" /></Col>
           </Row>

        
       
       </Form.Group>

       <Row style={{color:' grey',fontSize:'10px',padding:'5%'}} >
          <Col>1 - Bad</Col>
          <Col>2 - not satisfied</Col>
          <Col>3 - okay</Col>
          <Col>4 - good</Col>
          <Col>5 - superb</Col>
        </Row>


       <Form.Group style={{padding:'10px'}}>
           <Form.Label >
             Did the Programme give you enough time to understand the concepts of HTML,CSS and JS?
           </Form.Label>
         <Row >
           <Col style={{paddingLeft:'40px'}}>
           <Form.Check
          type="radio"
          label="1"
          name="formHorizontalRadios"
          id="formHorizontalRadios11"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="2"
          name="formHorizontalRadios"
          id="formHorizontalRadios12"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="3"
          name="formHorizontalRadios"
          id="formHorizontalRadios13"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="4"
          name="formHorizontalRadios"
          id="formHorizontalRadios14"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="5"
          name="formHorizontalRadios"
          id="formHorizontalRadios15"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group style={{padding:'10px'}}>
           <Form.Label>
             Were the documentations properly understandable?
           </Form.Label>
         <Row>
           <Col style={{paddingLeft:'40px'}}>
           <Form.Check
          type="radio"
          label="1"
          name="formHorizontalRadios"
          id="formHorizontalRadios21"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="2"
          name="formHorizontalRadios"
          id="formHorizontalRadios22"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="3"
          name="formHorizontalRadios"
          id="formHorizontalRadios23"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="4"
          name="formHorizontalRadios"
          id="formHorizontalRadios24"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="5"
          name="formHorizontalRadios"
          id="formHorizontalRadios25"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group style={{padding:'10px'}}>
           <Form.Label>
             Did the documentations create interest for learning for the learner?
           </Form.Label>
         <Row>
           <Col style={{paddingLeft:'40px'}}>
           <Form.Check
          type="radio"
          label="1"
          name="formHorizontalRadios"
          id="formHorizontalRadios31"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="2"
          name="formHorizontalRadios"
          id="formHorizontalRadios32"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="3"
          name="formHorizontalRadios"
          id="formHorizontalRadios33"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="4"
          name="formHorizontalRadios"
          id="formHorizontalRadios34"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="5"
          name="formHorizontalRadios"
          id="formHorizontalRadios35"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group style={{padding:'10px'}}>
           <Form.Label>
             Was the time adequate to complete the daily tasks?
           </Form.Label>
         <Row>
           <Col style={{paddingLeft:'40px'}}>
           <Form.Check
          type="radio"
          label="1"
          name="formHorizontalRadios"
          id="formHorizontalRadios41"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="2"
          name="formHorizontalRadios"
          id="formHorizontalRadios42"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="3"
          name="formHorizontalRadios"
          id="formHorizontalRadios43"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="4"
          name="formHorizontalRadios"
          id="formHorizontalRadios44"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="5"
          name="formHorizontalRadios"
          id="formHorizontalRadios45"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group style={{padding:'10px'}}>
           <Form.Label>
             How would you rate 'Week Of Coding'
           </Form.Label>
         <Row>
           <Col style={{paddingLeft:'40px'}}>
           <Form.Check
          type="radio"
          label="1"
          name="formHorizontalRadios"
          id="formHorizontalRadios51"
        />
           </Col>
           <Col >
           <Form.Check
          type="radio"
          label="2"
          name="formHorizontalRadios"
          id="formHorizontalRadios52"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="3"
          name="formHorizontalRadios"
          id="formHorizontalRadios53"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="4"
          name="formHorizontalRadios"
          id="formHorizontalRadios54"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="5"
          name="formHorizontalRadios"
          id="formHorizontalRadios55"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group controlId="formBasicComment" style={{paddingTop:'40px'}}>
           <Row   style={{padding:'10px'}} >
           <Col xs={3}><Form.Label >Comments:</Form.Label></Col>
           <Col xs={8} ><Form.Control type="" style={{height:'170px'}}  /></Col>
           </Row>

        
       
       </Form.Group>

       <Form.Group style={{padding:'10px'}}>
           <Form.Label>
             Would you like us to conduct more programmes like this?
           </Form.Label>
         <Row>
           <Col style={{paddingLeft:'40px'}}>
           <Form.Check
          type="radio"
          label="1"
          name="formHorizontalRadios"
          id="formHorizontalRadios41"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="2"
          name="formHorizontalRadios"
          id="formHorizontalRadios42"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="3"
          name="formHorizontalRadios"
          id="formHorizontalRadios43"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="4"
          name="formHorizontalRadios"
          id="formHorizontalRadios44"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="5"
          name="formHorizontalRadios"
          id="formHorizontalRadios45"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group style={{padding:'10px'}}>
           <Form.Label>
             How would you rate 'Week Of Coding'
           </Form.Label>
         <Row>
           <Col style={{paddingLeft:'40px'}}>
           <Form.Check
          type="radio"
          label="1"
          name="formHorizontalRadios"
          id="formHorizontalRadios51"
        />
           </Col>
           <Col >
           <Form.Check
          type="radio"
          label="2"
          name="formHorizontalRadios"
          id="formHorizontalRadios52"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="3"
          name="formHorizontalRadios"
          id="formHorizontalRadios53"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="4"
          name="formHorizontalRadios"
          id="formHorizontalRadios54"
        />
           </Col>
           <Col>
           <Form.Check
          type="radio"
          label="5"
          name="formHorizontalRadios"
          id="formHorizontalRadios55"
        />
           </Col>
         </Row>
       </Form.Group>
       <Form.Group controlId="formBasicComment" style={{paddingTop:'40px'}}>
           <Row   style={{padding:'10px'}} >
           <Col xs={3}><Form.Label >Comments:</Form.Label></Col>
           <Col xs={8} ><Form.Control type="" style={{height:'170px'}}  /></Col>
           </Row>

        
       
       </Form.Group>


       <Row className='justify-content-center' style={{paddingBottom:'40px',paddingTop:'20px'}}>
       <Button  variant="primary" type="submit" >
    Submit
  </Button>
       </Row>

</Form>
</div>

    );
  }
}

export default App;
