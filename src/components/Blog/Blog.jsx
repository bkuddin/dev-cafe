import PropTypes from 'prop-types'; // ES6
import { BsBookmark } from 'react-icons/bs';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author, author_img, reading_time, posted_date, hashtags  } = blog
    return (
        <div className='mb-20'>
            <img className='w-full rounded-lg' src={cover} alt={`The way of writing img Alt tag in react ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                   <img className='w-16' src={author_img} alt="" />
                   <div className='ml-2'>
                      <h3 className='text-xl font-bold'>{author}</h3>
                      <p className='text-[16px] text-gray-500'>{posted_date}</p>
                   </div>
                </div>
                <div className='space-x-2'>
                    <span>{reading_time} min read</span> 
                    <button className='text-2xl' onClick={()=>handleAddToBookmark(blog)}><BsBookmark></BsBookmark></button>

                </div>
            </div>
            <h2 className="text-4xl my-5 ">{title}</h2>
            <p>
                {
                   hashtags.map((hash, idx) => <span key={idx}><a href=" ">  #{hashtags}</a></span>)
                }
            </p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
}

export default Blog;