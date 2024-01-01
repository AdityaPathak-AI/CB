/*

1.  Props also refer as properties.
2.  They are the inputs which you pass into components.
3.  The props enable the component to access customized data, values and pieces of information that the input holds.
4.  Props are arguments passed into React components.
5.  Props are passed to components via HTML attributes.
6.  React Props are like function arguments in JavaScript and attributes in HTML.

*/

// Parent Component

import React from "react";
import Template from "./components/Template";

const App = () => {
  return (
    <div>
      <Template username="Maria Sharapova" btnText="Visit Me" />
      <Template username="Antonella Di Maria" btnText="" />
    </div>
  );
};
export default App; 

// Child Component

import React from "react";
const Template = ({username , btnText }) => {
    console.log(username);
  return (  
    <>
      <div className="relative h-[400px] w-[300px] rounded-md">
        <img
          src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
           {btnText || "Visit Me"}
          </button>
        </div>
      </div>
    </>
  );
};

//export default Template;




