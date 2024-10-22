import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog, handleAddBookmark}) => {
    console.log(blog);
    const {title, cover, author_img, reading_time, author_name, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-5 mb-4'> 
                    <img className='w-14 h-14 rounded-full object-cover' src={author_img}/>
                    <div>
                        <p className='font-bold text-black text-2xl'>{author_name}</p>
                        <p><small className='text-xs text-gray-400 font-semibold'>{posted_date}</small></p>
                    </div>
                </div>
                <div className='flex items-center'> 
                    <span className='text-sm font-medium text-gray-400'>{reading_time} min read</span>
                    <button onClick={() => handleAddBookmark(blog)} className='ml-2 text-sm text-gray-400'><IoBookmarkOutline></IoBookmarkOutline></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className='space-x-4 text-sm font-medium text-gray-400'>
                {
                    hashtags.map((hash, idx)  => <small key = {idx}><a href="">{hash}</a></small>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmark: PropTypes.func
}
export default Blog;