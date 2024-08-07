import React from "react";
function qn1(){
  alert("Message from Javascript Alert!");
  console.log("Message to developer");
}
function qn2(){
  let myobject={name:"Madras"};
  let newObject=myobject;
  myobject.name="Chennai";
  console.log(newObject);

  let myarray=["a","e","i","o","u"];
  let vowelArray=myarray;
  myarray.push("u");
  console.log(vowelArray);
  alert("Check the console output!");
}
function qn3(){
  let age = 18; 
  let name = "kiran"; 
  let setStatus = false; 
  let userDefault = undefined;
  let responseValue = null;
  console.log(age);
  console.log(age);
  console.log(name);  
  console.log(setStatus);
  console.log(userDefault);
  console.log(responseValue);
  
  let oldage=age;
  age =25;
  let status =setStatus;
  setStatus=true;
  console.log(oldage);
  console.log(age);
  console.log(status);
  console.log(setStatus);

  alert("Check the console output");
}
function qn4(){
  const name1="Kabil"
  const name2="Kabil"
  const object1={name:"Kabil"};
  const object2={name:"Kabil"};
  console.log(name1===name2);
  console.log(object1===object2);
}
const Greeting = () => {
    return(
        <div>
            <h1>Let we see the output of JAVASCRIPT</h1>
            <button onClick={qn1}>Click1</button>
            <button onClick={qn2}>Click2</button>
            <button onClick={qn3}>Click3</button>
            <button onClick={qn4}>Click</button>
        </div>
    )
}
export default Greeting;
