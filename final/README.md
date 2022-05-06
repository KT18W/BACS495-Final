I don't know if it matters, but I have 2 different collections in my database, one for users and one for questions and answers.

The port for the client is 3000
The port for the server is 9000

So I have the project set up just like in class, and I called the database usersdb, so you just have to change all of the instances of that to your database name it should work. There is also a connection inside the app.js file where it says 'const dbURI' with the database string, you will have to change that as well.

I was running into cors errors so I installed cors.

Note: you have to hit the login button inside of the login popup one extra time at the beginning then you can test all you want.

I also have mongoose installed in the backend because I wanted to learn it. It doesn't actually effect anything at the moment because I was trying to do things without it.

If you don't have it and need it is just 'npm i mongoose'