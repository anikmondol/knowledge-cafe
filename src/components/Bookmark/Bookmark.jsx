import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-blue-200 p-4 m-4 rounded-xl'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark:PropTypes.object.isRequired
}

export default Bookmark;