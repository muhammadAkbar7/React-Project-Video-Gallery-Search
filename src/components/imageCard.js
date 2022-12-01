import React from 'react';
// import React, {useEffect}from 'react';
//import App from './src/App';
//import { sourced } from './App.js'
var sourced = "https://player.vimeo.com/external/135736646.sd.mp4?s=db2924c48ef91f17fc05da74603d5f89&profile_id=164";

const ImageCard = ({ image }) => {
  // useEffect(() => {
  //   image.forEach
  //   // fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
  //   //   .then(res => res.json())
  //   //   .then(data => {
  //   //     // setImages(data.hits);
  //   //     // setIsLoading(false);
  //   //   })
  //     //.catch(err => console.log(err));
  // });

    const tags = image.tags.split(',') // split takes a string and splits it into an array 
                    //tags is formatted as a comma seperated value
                    // therefore if we turn it into array, loop through that array, and then output into span for below arrays

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <body>
      
    <iframe
      id="sample-player"
      //var name = image.name;

      src={image.videos.small.url}
      // https://player.vimeo.com/external/135736646.sd.mp4?s=db2924c48ef91f17fc05da74603d5f89&profile_id=164
      width="250"
      height="150"
      //frameborder="10"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      // allow="autoplay"
    ></iframe>
    {/* <div>
      <button id="play-button">play</button>
      <button id="pause-button">pause</button>
      <button id="play-pause-button">play and pause</button>
    </div> */}
  </body>
        <img src={`https://i.vimeocdn.com/video/${image.picture_id}_1920x1080.jpg`} alt="Random Image"
        className="w-full"/>
        <div className="px-6 py-4">
          <div className="font-bold text-sky-500 text-xl mb-2">
            Video by {image.user}
          </div>
          <ul>
            <li>
              <strong> Views: </strong>
              {image.views}
            </li>
            <li>
              <strong> Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong> Likes: </strong>
              {image.downloads}
            </li>
            <li>
              <a href = {image.pageURL}>
                Source Link
              </a>      
            </li>
            <li>
              <a href={`https://pixabay.com/videos/download/video-${image.id}_medium.mp4?attachment`}>
                Download Link
                </a>
            </li>
            
          </ul> 
        </div>
        <div className='px-6 py-4'>
            {tags.map((tag, index) => ( // needs a key since it is a list this is a test
                               // cannot use image.id in span key; use index since it is a second parameter to a map 
                          <span key={index} className='inline-block bg-amber-100 rounded-full
                          px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                            # {tag}
                          </span>
            ))}

        </div>
        
      </div>
    )
}

export default ImageCard;