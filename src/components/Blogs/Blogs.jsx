import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'; // ES6


const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs]= useState([])

    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
          

            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleAddToBookmark={handleAddToBookmark}>

                    </Blog>)
            }
            
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookmark: PropTypes.func.isRequired,
}

export default Blogs;