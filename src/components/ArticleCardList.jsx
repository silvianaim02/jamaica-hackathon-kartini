import CardItem, { articleItemPropTypes } from './ArticleCardItem';
import PropTypes from 'prop-types';
import SkeletonArticle from './SkeletonArticle';
import { ImFileEmpty } from 'react-icons/im';

const ArticleCardList = ({ articles, loading }) => {
  if (loading) {
    return (
      <div className="mb-4">
        <SkeletonArticle />
        <SkeletonArticle />
      </div>
    );
  }
  return (
    <>
      {articles.length === 0 ? (
        <div className="h-24 flex flex-col items-center justify-center">
          <ImFileEmpty />
          <p className="mt-4 font-light text-base">
            Maaf, artikel tidak ditemukan
          </p>
        </div>
      ) : (
        articles?.map((article, index) => <CardItem key={index} {...article} />)
      )}
    </>
  );
};

ArticleCardList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(articleItemPropTypes)),
  loading: PropTypes.bool.isRequired,
};

export default ArticleCardList;
