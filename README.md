# My Own Streaming Site

I created my own live streaming service with React Redux, OBS, Real Time Messaging Protocol Service and API Server.

## App Outline

![Login Page](https://github.com/VoBinh32/streaming-app-with-react-redux/blob/main/static/img/streaming.png)

## App Usage

#### 1. See other people's streams when the user is not authenticated

##### Homepage

![Login Page](https://github.com/VoBinh32/streaming-app-with-react-redux/blob/main/static/img/unauthenticatedUserHome.JPG)

##### If you click into one of the streams, you can watch now!

![Login Page](https://github.com/VoBinh32/streaming-app-with-react-redux/blob/main/static/img/showLiveStream.JPG)

#### 2. See other people's streams and can edit or delete user's own streams when the user is authenticated

![Login Page](https://github.com/VoBinh32/streaming-app-with-react-redux/blob/main/static/img/authenticatedUserHome.JPG)

#### 3. Be able to create a stream when autheticated

![Login Page](https://github.com/VoBinh32/streaming-app-with-react-redux/blob/main/static/img/addStreamForm.JPG)

#### 4. Be able to edit your own stream.

![Login Page](https://github.com/VoBinh32/streaming-app-with-react-redux/blob/main/static/img/editStreamForm.JPG)

#### 5. Be able to delete your own stream.

![Login Page](https://github.com/VoBinh32/streaming-app-with-react-redux/blob/main/static/img/deleteModal.JPG)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

- "git clone https://github.com/VoBinh32/streaming-app-with-react-redux" to clone the repo
- "npm start" on client folder to run the client side on localhost port 3000.
- "npm start" on rtmp server to run the real time messaging protocol service on port 8000
- "npm start" on api folder to run the json server on port 3001.

### Prerequisites

- Install
- OBS
- React Redux
- FLV
- JSON server

### Installing

- "npm install" to install all the dependencies that help the app running.

### Read More About RTMP/HTTP-FLV/fly.js

https://github.com/bilibili/flv.js
https://github.com/illuspas/Node-Media-Server
