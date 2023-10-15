import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='bg-gray-200 md:ml-4 mt-2 pt-4'>
            <div>
                <h3 className='text-2xl text-center bg-yellow-100 rounded-xl'>Spent time on read : {readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center'>Bookmarked Blogs : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx )=> <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default Bookmarks;