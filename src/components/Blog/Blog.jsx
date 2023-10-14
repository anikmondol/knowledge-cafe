import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookmark }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <div className='mb-16'>
            <img className='w-full mb-8 rounded-xl' src={cover} alt='{`Cover picture of the title ${title}`}'></img>
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className='text-2xl'>{author}</h2>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex justify-between mb-7'>
                    <span>{reading_time} min read</span>
                    <button onClick={ () =>handleAddToBookmark(blog)} className='ml-2 text-red-600 text-2xl'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                   hashtags.map((hash,idx) => <span key={idx}><a className='ml-2'>#{hash}</a></span>) 
                }
            </p>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;