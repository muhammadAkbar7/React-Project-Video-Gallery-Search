import React, { useState, useEffect}from 'react';
import ImageCard from './components/imageCard';
import ImageSearch from './components/imageSearch';

function App() {
  const [images, setImages] = useState([]); // this will get filled when we do our request
  const [isLoading, setIsLoading] = useState(true); // set this to true, so when this done loading we can set it to false 
  const [term, setTerm] = useState(''); // (a) this is for our search term, we can utilize this so we can change it to the terms in the link below to a specific/general term

  useEffect(() => { // create a function & utilize fetch to get the pixabay photos
    fetch(`https://pixabay.com/api/?key=31143910-dc355e3171fa22d4ff2f70726&q=${term}&image_type=photo&pretty=true`)
    // if you add something to .env (our key), we have to restart the server
    .then(res => res.json())
    .then(data => {
      setImages(data.hits); // fetched the data, then put it into our state
      setIsLoading(false); // we already got the data (already loaded) in this instance
    })
    .catch(err => console.log(err));
  }, [term]); // term = dependecy; this means whenever term changes the use effect funciton will run again 


// <script>
// var links = document.getElementsByTagName("a");
//   {/* for(var i=0;i<links.length;i++) {
//     if(links[i].href) {
//             links[i].style.color = hex;  
//         } */}
// links.addEventListener('click', myFunction);

// function myFunction() {
//   links.style.color = 'red';
// }

// </script>

  /* document.getElementsByTagName("a").addEventListener("click", clickFunction);
  
  function clickFunction() {
    document.getElementsByTagName("a").color = "red";
  } */
colorLinks("blue");

function colorLinks(hex)
{
    var links = document.getElementsByTagName("a");
    // links.addEventListener('click', function onClick() {
    //   links.style.backgroundColor = 'salmon';
    //   links.style.color = 'green';
    // });
    for(var i=0;i<links.length;i++)
    {
        if(links[i].href)
        {
            links[i].style.color = hex;  
        }
    }  
}

// var links = document.getElementsByTagName("a");
// links.addEventListener('click', function onClick() {
//   links.style.backgroundColor = 'salmon';
//   links.style.color = 'green';
// });




  return (
    <div className="container mx-auto"> 
    {/*Need prop (searchtext) so we can utilze the search term in app state*/}
    {/*Once we call that, it will catch it here, and set the term in our const state above (a)*/}
      <ImageSearch searchText={(text) => setTerm(text)}/>

      {/*This is a condition that states if the picture is not loading and the image array in our length is equal to 0 */}
      {/*Then it will display the text, no images found... */}
      {!isLoading && images.length === 0 && <h1 className="text-6xl text-center mex-auto mt-32"> No Images Found </h1> }

      {isLoading ? <h1 className="text-6xl text-center mex-auto mt-32"> Loading... </h1>:  <div className="grid grid-cols-3 gap-4"> 
      {/*This makes a grid w/3 columns and a gap of 4*/}
      {/*This will loop through our images, for each image, we are going to output*/}
      {/*Need to make a list for specific id*/}
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
  );
}

export default App;
