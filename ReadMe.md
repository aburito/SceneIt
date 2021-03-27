## Team Members and Roles

- Tom Chenevey: Front-end
- Francisco Paliouras: Back-end
- Dustin Rochette: Database
- Tariq Afoke: General Help

## Background	

We decided to follow the route of a movie reviewing system. Thus Scene It! ® was born.

## **Project Description**	

Scene It! ® is a movie review website with a database backend. We will use React for the front and an API for the backend. For our database we will be using MySQL version 8. Our goal is to make a user friendly interface that remains simple yet informative. 

## **Project Requirements**

- App must be able to post movie reviews and score them in an efficient manner.
- App must be able to display upcoming and public movies along with respective reviews and ratings
- App must allow users to create accounts

## **Business Rules**

- Account is not needed to view a review
- Must have an account in order to post and like a review
- Must have an admin account to delete reviews
- Must have a producer account to allow selected accounts review non-released movies
- Must have an admin account to delete accountsMust have an admin account to view account details
- Reviews can only have a score between 1-5
- Users except admin accounts can only view their own account details

## **Technologies Used**

<u>Front end:</u> 

***React.js*** with ***Tailwind.css***

For front-end we have opted to use React.js for its reusability purposes, react will allow us to create components for the user interface that I will be reusing throughout the whole application, another good aspect of react is the life-cycle hooks that it incorporates allowing for better handling of events. Furthermore, we have decided to use tailwind for styling purposes. This will allow us to write very little to zero css and have a decent user interface creating a better user experience.

**API(Backend): *Node.js* with *Express.js***

For the backend we have opted to use a Node server running Express.js, the reason for this decision is that express will allow us to create end-points that will allow us to perform actions with the data in the database. Creating endpoints for all the CRUD (Create, Read, Update, Delete) actions as well as other operations that are required for any actions in the application that involve any use of the database.

**Database: *MySQL Version 8*** 

The decision to use mysql comes from the fact that my team is familiar with it, which will allow for smoother development and it will reduce the time we need to train other team members. Another benefit is that through the use of Mysql we will ensure that our database is normalized and has no data that could potentially break the rest of the software. 

## **Design Patterns**
​	**MVC -** MVC is one of the more generic design patterns that exist, but considering how our application is CRUD based, it would be able to satisfy our needs. MVC contains three kinds of objects, the model, the view, and the controller. Our application involves the user posting reviews to be seen by other users, so the MVC model seems more than satisfactory to our needs. The user would use the controller to post a review which would manipulate our model, which then would update the view that all the other users see. It's a very simple method but it satisfies the requirements of our application. Since MVC uses an observer pattern as well, this would allow the defendants to be updated automatically, allowing new posts on movies to be constantly updated and uploaded to the application.

## Application Layering

### 	Presentation Layer

The presentation layer must be able to present users a graphical user interface to interact with the web application. In order to do so, the application must receive data such as movie information, user information and reviews from the data layer. This will integrate the retrieved data into React Components to present it properly. When the user wants to login, they’ll be directed to the login component and in the event they don’t have an account, they’ll be sent to the account creation component. Once authenticated, users can view the “list” of movies on the home component and along with retrieve more information about a selected movie with its rating and reviews on the movieDetails component. 

Regarding exceptions, there should be almost no exception handling occurring in the presentation layer. Any and all exceptions that might occur through the presentation should be handled in the business layer of the application as it is the layer handling most of the logic and transactions that will be occurring in the application.

```javascript
//Log in PAGE - EXAMPLE CODE

import React from "react";
import "./App.css";

const App = (props) => {
  return (
    <div className="max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg shadow-xl">
      <div className="ml-6 pt-1">
        <h1 className="text-4xl font-bold text-green-900 justify-start">
          Scene It!
        </h1>
        <p className="text-base text-gray-500 leading-normal">
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
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
          </svg>
          <h2 className="inline">Password:</h2>
        </span>
        <input className="block h-7 rounded-md shadow-md" type="text" />
        <button className="box-content h-8 w-16  px-4 py-.5 bg-green-600 hover:bg-green-300 active:bg-green-900 rounded-md shadow-md mx-2 my-2">Log In</button>
        <button className="box-content h-8 w-16  px-4 py-.5 bg-grey-600 hover:bg-grey-300 active:bg-grey-900 rounded-md shadow-md mx-2 my-2"Sign Up</button>
      </div>
    </div>
  );
};

export default App;

```

### Error Handling @ Front-end

```javascript
//api handling library
import axios from "axios";
//crypto library
import { sha256 } from "crypto-js/sha256";
//.....
//.....
//.....
const login = (user, pass) => {
  //hashing the password before sending it off the server
  const hashedPassword = sha256(pass);
  //this will be url to the express server
  const url = "/login";

  axios.post(url, {
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
```



### 	Data Layer

The data layer must be able to handle connections to the database so that we are able to effectively store our data. To deal with this one of the classes we will create in this layer will be a “loadDriver” class, which will return the class object and then actually connect to the database. We also plan on having a number of classes that will be interacting with the database that we create. We have been working on creating some tables for the database that our data layer will be interacting with as seen below.

```sql
-- EXAMPLE CODE:
CREATE TABLE `rit`.`movies` (
  `movie_ID` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `release_date` DATE NULL,
  `director` VARCHAR(60) NULL,
  PRIMARY KEY (`movie_ID`));

CREATE TABLE `movie_db`.`movie_id_description` (
  `movie_ID` INT NOT NULL,
  `movie_Description` VARCHAR(500) NULL,
  PRIMARY KEY (`movie_ID`),
  CONSTRAINT `movie_ID`
    FOREIGN KEY (`movie_ID`)
    REFERENCES `movie_db`.`movies` (`movie_ID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);
	
```

### Error Handling @ Data Layer

The data layer will need to contain a bunch of exceptions as well. For whatever data we pull from the database we will need to make sure that we handle any exceptions that may occur if it is unable to pull the data from the database which can happen if any sort of faulty transaction has occurred that might leave some form of dirty data in the database. We will also need to handle exceptions for the data layer being unable to connect to the database as we need to make sure that we are in fact connected to the database before our application makes any changes to it.

```javascript
//IN THE API WHEN CALLING DATA FROM THE DATABASE - Getting all movies from DB
//....
router.get("/", (req, res) => {
  //returns all movies with this data [title, date, avgScore, img, genre]
    // connect to your database
    sql.connect(config, function (err) {
      if (err) console.log(err);
      // create Request object
      var request = new sql.Request();
      // query to the database and get the records
      const query = 'select * from movies';// example query
      request.query(query, function (err, recordset) {
          if (err) {
            //handle the error appriopriately send reload or other 
            //message back to front-end.
            console.log(err);
          }
          // send records as a response
          res.send(res.json(recordset)); 
      });
  });
  
});
//.....
```

### 	Business Layer

Our business layer will be handling more of the logic parts of our application. It will make sure that users are signed/confirming they have an account on the app if they plan on leaving reviews. If they don’t have an account, they should only be able to view the reviews and be unable to make any sort of changes. This layer will contain a type of class that will focus on authenticating users. It will also be making sure that all types of transactions that may occur are properly authenticated, such as if a user leaves a 5-star rating on a movie, it will ensure that all users connected to the app are seeing the same thing.

This layer will also be handling most of the exceptions, such as in cases that someone tries to log in but has an incorrect username or password(or both). Also if they try to log in with empty username or password fields as well. We will also need to make sure we handle exceptions that may occur if the person decides to leave an empty written review or not.

```javascript

// index.js
const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

//DB variables
const sql = require("mssql");
// config for your database
var config = {
  user: "localhost",
  password: "mypassword",
  server: "localhost",
  database: "SceneIt-db",
};

app.get("/", (req, res) => {
  res.send("Services IS up and running for Scene it.....");
});

// Login api routes
app.use("/api/login", require("./routes/api/movies.js"));
// users api routes
app.use("/api/members", require("./routes/api/movies.js"));
// movies api routes
app.use("/api/members", require("./routes/api/user.js"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

```

```javascript
//EXAMPLE CODE:
// Movies.js - movies route
const express = require("express");
const uuid = require("uuid");
const router = express.Router();

// Gets all movies
router.get("/", (req, res) => {
  //returns all movies with this data [title, date, avgScore, img, genre]
  res.json(movies);
});

router.get("/:id", (req, res) => {
  //requesting all data from database about movie with said ID
});

module.exports = router;

```

```javascript
//EXAMPLE CODE:
// User.js - user route
const express = require("express");
const uuid = require("uuid");
const router = express.Router();

// check user
router.get("/", (req, res) => {
  //returns all movies with this data [title, date, avgScore, img, genre]
  res.json(users);
});

router.get("/:id", (req, res) => {
  //requesting all data from database about a user with said ID
});

// registering a user member
router.put("/:id", (req, res) => {
  //validate new user and register to db
});

// registering a user member
router.put("/:movieID/:userId", (req, res) => {
  // post review from user
});

module.exports = router;

```

### Error Handling @ Back-end

```javascript
//@ login rout - Login.js
const express = require("express");
const uuid = require("uuid");
const router = express.Router();


router.get("/", (req, res) => {
    const user = req.user;
    const password = req.password;
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        const query = 'select * from user where ';// example query
        request.query(query, function (err, recordset) {
            if (recordset.length  = 1) {
              if(user.localeCompare(recordset.username) === 0 && password.localeCompare(recordset.password) === 0){
                  //login successfull return user object
                  res.send(/*..USER OBJ....*/);
              }
              
            }
            res.send(/*..USER OBJ EMPTY OR ERROR OBJ....*/); 
        });
});



module.exports = router;
```





## **Timeline**

- March 12th - Milestone 3 Layering
- March 26th - Milestone 4 Exception Handling
- April 9th - Milestone 5 Refactoring
- April 23rd - Milestone 6 Testing
- April 30th - Milestone 7 Packaging
- May 5th - Finalized project code due