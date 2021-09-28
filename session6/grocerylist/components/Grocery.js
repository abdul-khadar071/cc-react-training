import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Row,Col} from 'reactstrap';
import './Grocery.css';
const Grocery = () => { 
   const items= [
        {
          "item": "Dal",
          "type": "veg"
        },
        {
          "item": "Fish",
          "type": "non-veg"
        },
        {
          "item": "Meat",
          "type": "non-veg"
        },
        {
          "item": "Rice",
          "type": "veg"
        },
        {
          "item": "onion",
          "type": "veg"
        },
        {
          "item": "chicken",
          "type": "non-veg"
        },
        {
          "item": "potato",
          "type": "veg"
        },
        {
          "item": "chicken-sandwitch",
          "type": "non-veg"
        }
      ]
      
    return (
        <div className="container">
        <h1>Welcome to shop!</h1>
            <Row>
              <Col sm="6"><Row  className="rowheader" >VEG </Row>
              {
                items.map(item => item.type==="veg"?<Row className="rowcont">{item.item}</Row>:null)
                
              }
              
              </Col>
              <Col sm="6"> <Row className="rowheader">NON-VEG</Row>
              {
                items.map(item => item.type==="non-veg"?<Row className="rowcont" >{item.item}</Row>:null)
                
              }
              </Col>
            </Row>
            </div>
      
    )
}

export default Grocery;
