import PropTypes from 'prop-types'; // ES6
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
  
    return (
         
        <div className='md:w-1/3'>
             <div className="bg-gray-100 rounded-lg py-6 px-3 mb-10">
                <h3 className='text-blue-600 text-xl px-3 font-bold '>Spent time on read : {readingTime} min</h3>
             </div>

            <div className="bg-gray-100 rounded-lg px-3 py-5">
                <h3 className='text-2xl font-bold px-3 pt-2'>Bookmarks Blogs: {bookmarks.length}</h3>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired,
}

export default Bookmarks;