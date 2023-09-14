import PropTypes from 'prop-types'; // ES6
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  
    return (
        <div className="md:w-1/3 bg-gray-100 rounded-lg px-3 pt-5">
            <h3 className='text-2xl font-bold px-3 pt-2'>Bookmarks Blogs: {bookmarks.length}</h3>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default Bookmarks;