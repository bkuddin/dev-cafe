import PropTypes from 'prop-types'; // ES6

const Bookmark = ({bookmark}) => {
    const {title}= bookmark
    return (
        <div className='bg-white rounded-lg p-5 m-4'>
            <h3>{title}</h3>
            
        </div>
    );
};

Bookmark.propTypes={
    bookmark: PropTypes.object.isRequired,
}

export default Bookmark;