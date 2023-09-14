import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog =>{
    // console.log('Bookmark adding soon');
    // console.log(blog);

    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);

  }
 

  return (
    <>
      
     <Header></Header>
     <main className='flex justify-center gap-10 mt-10 max-w-6xl mx-auto '>
     <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
     <Bookmarks bookmarks={bookmarks}></Bookmarks>
     </main>
     
    </>
  )
}

export default App
