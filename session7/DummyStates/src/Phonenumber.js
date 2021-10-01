import React from 'react'
import {useState} from 'react';




const Phonenumber = () => {

    const initialState = {
        phone: '',
        radiobtn: ''
    }  

    const [input, setInput] = useState(initialState);

    const handleChange = (event) => {
        const {id, value} = event.target
        const updateInput = {...input, [id]: value}
        setInput(updateInput)
        
    }

    const validating = (inputtxt) => {
        const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        console.log(inputtxt.match(regex))
        if(inputtxt.match(regex)) {
            return true;
        } else {
            return false;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(input);
        const {phone} = input;
        const validPhone = validating(phone);
        if (!validPhone) {
            alert('Enter valid phone number')
        }
        else{
        alert("Do you agree terms and conditions :"+input.radiobtn +"     phone number is  :"+ input.phone)
    }
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div>
              <label><strong>Phone number is : </strong>
                  <input style={{backgroundColor:'lightblue', color:"darkred"}}   type="tel" id="phone" onChange={handleChange} maxLength={10}/>
                  </label>
            </div>
            <div>
            <label> <strong>Do you agree term and condition  :</strong>
                <input type = "radio" id = "radiobtn" value = "yes" onChange={handleChange} />Yes
            <input type = "radio" id = "radiobtn" value = "no" onChange={handleChange} />No
            </label>
            </div>
            
            <div>
            <button style={{backgroundColor:"red"}} type="submit">Submit</button>
            </div>
            </form>

            <div>
                <p>Phone number is:{input.phone}</p>
                <p>Do you agree terms and condition: {input.radiobtn}</p>
            </div>
        </div>
    )
}

export default Phonenumber
