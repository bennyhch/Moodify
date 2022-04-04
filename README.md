# Moodify
<p align="center">
<img src="https://user-images.githubusercontent.com/70516815/161502724-9f47fd2c-bdad-48ad-94d8-ce914279e8d2.jpeg" width="200" align="center">
</p>
<br>

Moodify is a mood-tracking and journaling app for users to keep track of how their mood swings throughout the days. It also helps them to identify negative behaviors and thoughts, as well as the triggering events to a particular negative or positive emotion.

# Getting started



## Prerequisites
In order to get the app running, you'll need to install MongoDB. For more info on installation, please refer to [here](https://www.mongodb.com/docs/manual/installation/). 




## Installation
1. Clone the current repo and enter the _server_ directory, next, intall dependencies 
```
git clone https://github.com/bennyhch/Moodify.git 
cd server

npm install
npm i nodemon 
```

2. Start the development server
```
npx nodemon 
```

3. Move to the _client_ and next, install dependencies
```
cd ../client
npm install moment react-d3-cloud recharts 
```



## Screenshot 

<p align="center">
<img src="https://github.com/bennyhch/Moodify/blob/main/entries.png" width="800" >
</p>

<p align="center">
<img src="https://github.com/bennyhch/Moodify/blob/main/graph.png" width="800" >
</p>

## Built with
- Express.js
- React with React-Router
- MongoDB with Mongoose 
- Figma 

## Author
Ben Ho - [Linkedin](https://www.linkedin.com/in/ho-ben/)
