import { useEffect } from "react";
import { useState } from "react";


const Blogs = () => {
    const [blogs, setBlogs]= useState([])

    useEffect(()=>{
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div>
            <h3>Data: {blogs.length}</h3>
            
        </div>
    );
};

export default Blogs;