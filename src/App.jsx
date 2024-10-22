import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog => {
    const newbookmarks = [...bookmarks, blog];
    setBookmarks(newbookmarks);
    
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto gap-6 mt-8'>
        <Blogs handleAddBookmark={handleAddBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </>
  )
}

export default App
