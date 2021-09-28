import './Contact.css';
const Contact = () => {
   
    function userName(user)
{
var uname=user.target.value;
console.log(uname);
}
function email(email)
{
    var  Id=email.target.value;
    console.log(Id)

}
function phone(phone)
{
    var Phno=phone.target.value;
    console.log(Phno)

}
   


    return (
        <center>
        
        <form className="frm" >
                <label > Name  : 
                
                <input onChange={userName}  minLength="4" size="max" maxLength="8" pattern="[A-Z][A-Za-z0-9]*"
                title="First letter should be upper case maximum 8 letters only letters and numbers are allowed punctuations are not allowed" required type="text"
                placeholder="username"></input>
        
                </label> 
               
                <br/>
                <label> Email  :      
                <input onChange={email} type="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                placeholder="email" title="enter the valid email"></input>

                </label>
                <br/>
                <label>Phone  :      
                      <input onChange={phone}  type="phone" required pattern="[0-9]{10}" 
                      title="enter valid phone number" placeholder="phone number"></input>

                </label>
                <br/>
                <label>
                <button type="submit" className="sbt" >submit</button>
                </label>
                <br/>
            </form>
            </center>
    )
}

export default Contact
