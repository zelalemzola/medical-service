'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation';

const BlogDetails = () => {
    
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState(null); // To handle errors
  const params = useParams(); // Get the parameters from the URL
  const { id } = params; // Extract the blog ID from params

  useEffect(() => {
    const fetchBlog = async () => {
      if (id) {
        try {
          const response = await axios.get(`/api/blogs/${id}`);
          setBlog(response.data.blog); // Update state with fetched blog
        } catch (error) {
          setError('Error fetching blog'); // Handle error
          console.error("Error fetching blog:", error);
        }
      }
    };

    fetchBlog();
  }, [id]);

  if (error) return <div>{error}</div>; // Show error if any
  if (!blog) return <div className='flex items-center justify-center h-screen text-lg text-primary'>Loading...</div>; // Loading state

  return (
    <div className='pb-10'>
      
            <div className='py-[20%] md:py-[5%]'>
      <img src={blog.thumbnailUrl} alt={blog.title} className="w-full h-[40vh] object-cover" />
      <h1 className=" mt-4 capitalize text-center text-primary font-bold text-3xl md:text-4xl">{blog.title}</h1>
      <div className='px-5 flex flex-col gap-4'>
      <p className="mt-2 text-gray-400"><span className='text-primary text-lg font-semibold'>Date: </span> {new Date(blog.date).toLocaleDateString()}</p>
      <div className="mt-4 ">{blog.content}</div>
      </div>
      </div>
    </div>
  );
};

export default BlogDetails;



