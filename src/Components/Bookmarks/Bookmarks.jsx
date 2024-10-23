import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div className='mb-6 bg-[#6047ec1a] text-center py-5 rounded-lg border border-[#6047EC]'>
                <h3 className='text-sm md:text-lg lg:text-xl font-bold text-[#6047EC]'>Reading Time: {readingTime} min</h3>
            </div>
            <div className='bg-slate-100 rounded-xl p-6'>
                <h2 className="text-sm md:text-lg lg:text-xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;