'use client'

import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

interface Blog {
  _id: string
  title: string
  thumbnailUrl: string
  date: string
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get<{ blogs: Blog[] }>('/api/blogs')

        // Sort blogs by date, newest first
        const sortedBlogs = response.data.blogs.sort((a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
        )
        setBlogs(sortedBlogs)
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    }

    fetchBlogs()
  }, [])

  if (!blogs.length) {
    return (
      <div className='flex items-center justify-center h-screen text-lg text-primary'>
        Loading...
      </div>
    )
  }

  return (
    <div className='h-full'>
      <h1 className="text-primary text-3xl md:text-4xl font-extrabold text-center py-[20%] md:py-[5%]">
        Latest Blog Posts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-10 md:space-y-0 p-4  py-20 h-full">
        {blogs.map((blog) => (
          <Link key={blog._id} href={`/blogs/${blog._id}`} className="relative group">
            <img
              src={blog.thumbnailUrl}
              alt={blog.title}
              className="w-full h-64 object-cover rounded-md"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 p-4 transform translate-y-0 group-hover:translate-y-full group-hover:bg-primary group-hover:text-white group-hover:rounded-b-xl transition-transform duration-300">
              <h2 className="text-white font-bold">{blog.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blogs

