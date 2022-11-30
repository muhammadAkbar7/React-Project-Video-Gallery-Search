import React, { useState } from 'react'; // needs a local state since we have text input

const ImageSearch = ({ searchText }) => {
    const [text, setText] = useState('');
  
    // e = event parameter
    const onSubmit = (e) => {
      e.preventDefault();
      searchText(text);
    }
    return (
        <div className='max-w-sm rounded-lg overflow-hidden my-10 mx-auto'>
        <form onSubmit={onSubmit} className="w-full max-w-sm">
          <div className="flex items-center border-b border-b-4 border-slate-100 py-2">
          <input onChange={e => setText(e.target.value)} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Search Image Term..." />
          {/*We have this onChange event because when we type, we need to update the local state*/}
          {/*e.target.value will give us whatever is being typed into the form*/}
          <button className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-white-500 hover:border-blue-700 text-sm border-2 text-white py-1 px-2 rounded" type="submit">
        Search
        </button>
        </div>
        </form>
        </div>
    )
}

export default ImageSearch;