import React from 'react';

const ImageCard = ({ image }) => {
    const tags = image.tags.split(',') // split takes a string and splits it into an array 
                    //tags is formatted as a comma seperated value
                    // therefore if we turn it into array, loop through that array, and then output into span for below arrays

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img src={image.webformatURL} alt="Random Image"
        className="w-full"/>
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo by {image.user}
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
          </ul> 
        </div>
        <div className='px-6 py-4'>
            {tags.map((tag, index) => ( // needs a key since it is a list 
                               // cannot use image.id in span key; use index since it is a second parameter to a map 
                          <span key={index} className='inline-block bg-gray-200 rounded-full
                          px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
                            #{tag}
                          </span>
            ))}

        </div>
        
      </div>
    )
}

export default ImageCard;