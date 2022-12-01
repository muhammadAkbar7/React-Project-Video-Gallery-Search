import React from 'react';
import ReactDOM from 'react-dom';
import './assets/main.css';
import App from './App';
//import * as vimeo from "./vimeo-api-example.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// window.onload = () => {
//   let playerInformation = new vimeo.PlayerInformation(
//     'player',
//     {
//       playButtonId: 'play-button',
//       pauseButtonId: 'pause-button',
//       playPauseButtonId: 'play-pause-button'
//     }
//   );
//   vimeo.settingPlayer(playerInformation);
// }

// {
//   "total":1,
//   "totalHits":1,
//   "hits":[
//       {
//           "id":41036,
//           "pageURL":"https://pixabay.com/videos/id-41036/",
//           "type":"animation",
//           "tags":"titanic ship, ship, moon",
//           "duration":20,
//           "picture_id":"907019549-392d512d0ffacdafc194c69930b8ba27b795eb20cbbd7741deb6dd2b2b5ddab2-d",
//           "videos":{
//               "large":{
//                   "url":"https://cdn.pixabay.com/vimeo/427876120/Titanic%20Ship%20-%2041036.mp4?width=1920&hash=bd3f1b69439ff087450e2a1a6f94c5060cb56883",
//                   "width":1920,
//                   "height":1080,
//                   "size":6243324
//               },
//               "medium":{
//                   "url":"https://cdn.pixabay.com/vimeo/427876120/Titanic%20Ship%20-%2041036.mp4?width=1280&hash=f6e75d298c6801b8acc4e29b4d418387384c9001",
//                   "width":1280,
//                   "height":720,
//                   "size":3262786
//               },
//               "small":{
//                   "url":"https://cdn.pixabay.com/vimeo/427876120/Titanic%20Ship%20-%2041036.mp4?width=960&hash=9f85a63a5764e76d5ed41f607ded86b5f8a65d41",
//                   "width":960,
//                   "height":540,
//                   "size":2266313
//               },
//               "tiny":{
//                   "url":"https://cdn.pixabay.com/vimeo/427876120/Titanic%20Ship%20-%2041036.mp4?width=640&hash=476e4152203abfe0b814a818153685abf4ef71ce",
//                   "width":640,
//                   "height":360,
//                   "size":1202077
//               }
//           },
//           "views":8100,
//           "downloads":4328,
//           "likes":38,
//           "comments":11,
//           "user_id":11433596,
//           "user":"Photoman61",
//           "userImageURL":"https://cdn.pixabay.com/user/2021/02/24/06-30-20-_250x250.jpg"
//       }
//   ]
// }

