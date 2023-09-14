import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const [readingTime, setReadingTime] = useState(0);



  const handleAddToBookmark = blog =>{
    // console.log('Bookmark adding soon');
    // console.log(blog);

    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);

  }

  const handleReadingTime = (id, time) => {
    // console.log('marking as read', time);
    // const newReadingTime = readingTime + time;
    // setReadingTime(newReadingTime);
    setReadingTime(readingTime + time);


    // Remove the Read Blogs from Bookmark
    // console.log('Remove bookmark', id);

    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks)


  }
 

  return (
    <>
      
     <Header></Header>
     <main className='flex justify-center gap-10 mt-10 max-w-6xl mx-auto '>
     <Blogs handleAddToBookmark={handleAddToBookmark} handleReadingTime={handleReadingTime}></Blogs>
     <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
     </main>
     
    </>
  )
}

export default App
