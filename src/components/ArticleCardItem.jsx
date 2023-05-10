import { BiCommentDots, BiUpvote } from 'react-icons/bi';
import { FaShare } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { postedAt } from '../utils';

const ArticleCardItem = ({ id, title, body, user, createdAt }) => {
  return (
    <article className="w-full mb-4 flex flex-col lg:flex-row lg:items-center gap-4 p-6  rounded-lg bg-white shadow ">
      {/* image */}
      <img
        className="block w-full lg:w-36 h-36 flex-none bg-cover"
        src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
        alt="hehe"
      />
      <div className="w-full">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center gap-4 px-2.5 py-0.5 rounded">
            <div className="flex items-center space-x-4">
              <img
                className="w-7 h-7 rounded-full"
                src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
                alt="Jese Leos avatar"
              />
              <span className="font-medium ">{user}</span>
            </div>
            {/* Badges */}
            {/* <div className="flex items-center">
              <svg
                className="mr-1 w-3 h-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Tutorial
            </div> */}
          </span>
          <span className="text-sm">{postedAt(createdAt)}</span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-[#2B546A] ">
          <Link to={`/detail/${id}`}>{title}</Link>
        </h2>
        <p className="mb-5 font-light text-gray-500 line-clamp-2 md:line-clamp-3">
          {body}
        </p>
        <div className="flex justify-between items-center text-[#6c7a9c]">
          <div className="flex gap-4">
            <div className="flex gap-1 items-center">
              <BiUpvote />
              <p>100</p>
            </div>
            <div className="flex gap-1 items-center">
              <BiCommentDots />
              <p>10</p>
            </div>
            <div className="flex gap-1 items-center text-[#90C3F0]">
              <FaShare />
            </div>
          </div>
          <Link
            to={`/detail/${id}`}
            className="inline-flex items-center font-medium text-primary-600 hover:underline"
          >
            Read more
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export const articleItemPropTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.arrayOf(PropTypes.string).isRequired,
  createdAt: PropTypes.string.isRequired,
  totalComments: PropTypes.number.isRequired,
  upVotes: PropTypes.arrayOf(PropTypes.string).isRequired,
  user: PropTypes.string.isRequired,
};

ArticleCardItem.propTypes = articleItemPropTypes;

export default ArticleCardItem;
