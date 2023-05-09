import CardItem, { articleItemPropTypes } from './ArticleCardItem';
import PropTypes from 'prop-types';
import SkeletonArticle from './SkeletonArticle';

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
        <p>tidak ada artikel</p>
      ) : (
        articles.map((article) => <CardItem key={article.id} {...article} />)
      )}
    </>
  );
};

ArticleCardList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(articleItemPropTypes)).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default ArticleCardList;
