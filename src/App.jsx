import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog => {
    const newbookmarks = [...bookmarks, blog];
    setBookmarks(newbookmarks);
  }

  const handleMarkAsRead = time => {
    setReadingTime(readingTime + time);
  }

  return (
    <>
      <Header></Header>
      <main className='md:flex max-w-7xl mx-auto gap-6 mt-8'>
        <Blogs handleAddBookmark={handleAddBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  )
}

export default App
