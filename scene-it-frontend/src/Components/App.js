import React from "react";
import Button from "./Button";
import axios from "axios";
//crypto library
import { sha256 } from "crypto-js/sha256";
//some comments to update git account

const login = (user, pass) => {
  //hashing the password before sending it off the server
  const hashedPassword = sha256(pass);
  //this will be url to the express server
  const url = "/login";

  axios
    .post(url, {
      userName: user,
      password: hashedPassword,
    })
    .then(
      (response) => {
        //handle login
        //send the user to the next page
        if (response === 540) {
          // 540 example of positive login
          //login the user into the application
          // ....
        } else if (response === 303) {
          //303 example of negative login
          //send user back to login page and render error output message\
          //...
        }
      },
      (error) => {
        //handle incorrect login
        //output error message to user
        console.log(error);
      }
    );
};

const App = (props) => {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-4xl font-bold text-green-900 justify-start">
          Scene It!
        </h1>
        <p className="text-base text-gray-400 leading-normal">
          Lets log in ...
        </p>
        <span className="inline">
          <svg
            className="box-content h-4 w-5 inline"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          <h2 className="inline">User:</h2>
        </span>

        <input className="block h-7 rounded-md shadow-md" type="text" />

        <span className="inline">
          <svg
            className="box-content h-4 w-5 inline"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
          <h2 className="inline">Password:</h2>
        </span>
        <input className="block h-7 rounded-md shadow-md" type="text" />
        <Button primary>Log in</Button>
        <Button>Sign Up</Button>
      </div>
    </div>
  );
};

export default App;
