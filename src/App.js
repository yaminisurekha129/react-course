
import React,{useState} from "react";

const Index = () => {
      
       const[firstName,setFirstName] = useState("");
       const[email,setEmail] = useState("");
       const[password,setPassword] = useState("");

    /*   const changeFirstName = (e) =>{
        console.log(e.target.value);
        setFirstName(e.target.value);
       };

       const changeEmail = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);
       };

       const changePassword = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);
       };*/

       /*const handleInputChange=(e,name)=>{
        console.log(e.target.value,name);

       }*/
  
       const handleSubmit = (e) => {
        e.preventDefault();
        let userObj={                  //api call
          fisrtName: firstName,
          email:email,
          password:password,
        };

        console.log(userObj);
       };

       



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
        <input 
          type="text"
          name="firstname"
          id="firstname"
          value={firstName}                 //for connection
          placeholder="enter your name"
          onChange={(e)=>setFirstName(e.target.value)}
          //onChange={(e)=>handleInputChange(e,"firstName")}
          
        />

        </div>
        <div className="form-content"> 
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e)=>setPassword(e.target.value)}
            //onChange={(e)=>handleInputChange(e,"password")}
          />
        </div>
        <div className="form-content"> 
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e)=>setEmail(e.target.value)}
            //onChange={(e)=>handleInputChange(e,email)}
          
          />

        </div>
        <div className="form-button">

              <button>Submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default Index;
