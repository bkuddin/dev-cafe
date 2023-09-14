import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
 

  return (
    <>
      
     <Header></Header>
     <main className='flex justify-center mt-10 mx-40 '>
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </main>
     
    </>
  )
}

export default App
