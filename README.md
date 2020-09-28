# Friendly
is a Video sharing app similar to zoom and skype. The idea was to push myself and explore technologies we hadnt gone over in class!
[DemoPhoto](./preproduction/Screen Shot 2020-09-28 at 1.30.46 PM 1.png)

## Explanation of Technology
- Node.js and Express were used to create the backend of the system. There are only a couple routes for user authentication and for the communication with the api for video streaming.
- React, CSS, Bootstrap, and Jquery were used to create the client side of the application. This was my first time working with Jquery and Bootstrap but it added alot of similicty and uniqeness to the frontend.
- The app was deployed with heroku and used continuous integration with GitHub.

## Installation instructions
The install for this is pretty simple. After cloning the Github page to your device run yarn add in the top level directory and then client directory. Then Go to Config.Js and create the name for the database that you would like to use. We went with friendly. After that load up psql and CREATE DATABASE "your database name." Lastely you will need some keys. 
- SECRET_KEY="Key"
You will also need to sign up with Twilio and get some keys from them.
- TWILIO_ACCOUNT_SID="Key"
- TWILIO_API_KEY="Key"
- TWILIO_API_SECRET="Key"
All of these should be put in your .env file.

## WireFrames
[Wireframes](./preproduction/Login.png)
[Wireframes](./preproduction/Video.png)

## ERDS
[Entity Relationship Diagram(ERD)](./preproduction/Schema.png)

## Link to deployed app
https://still-tor-23302.herokuapp.com/
