import PropTypes from 'prop-types';
// import { articleItemPropTypes } from './ArticleCardItem';

const TagCard = ({
  // articles,
  // resetSearchField,
  uniqueFilterArrOfObj,
  loading,
  // setArticles,
  setCategoryPick,
}) => {
  const buttonSkeleton = (
    <button
      type="button"
      className="py-1 px-3 mr-1 mb-1 text-xs font-medium rounded-full w-16 h-6 bg-[#E3EEFF]"
    />
  );
  const buttonSkeletonList = [];
  for (let i = 0; i < 5; i++) {
    buttonSkeletonList.push(buttonSkeleton);
  }

  const handleClickCategory = (e) => {
    e.preventDefault();
    // resetSearchField();
    setCategoryPick(e.target.value);
  };

  return (
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
      <p className="text-xl font-semibold pb-5 text-[#2B546A]">
        Temukan kategori yang ingin kamu cari
      </p>
      <div className="flex flex-wrap">
        {loading ? (
          <div>{buttonSkeletonList}</div>
        ) : (
          <div>
            <button
              onClick={handleClickCategory}
              type="button"
              value=""
              className="py-1 px-3 mr-1 mb-1 text-xs font-medium rounded-full w-fit bg-[#E3EEFF]"
            >
              all
            </button>
            {uniqueFilterArrOfObj?.map((category, index) => (
              <button
                onClick={handleClickCategory}
                key={index}
                type="button"
                value={category}
                className="py-1 px-3 mr-1 mb-1 text-xs font-medium rounded-full w-fit bg-[#E3EEFF]"
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

TagCard.propTypes = {
  uniqueFilterArrOfObj: PropTypes.arrayOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired,
  // articles: PropTypes.arrayOf(PropTypes.shape(articleItemPropTypes)).isRequired,
  // resetSearchField: PropTypes.func.isRequired,
  setArticles: PropTypes.func.isRequired,
  setCategoryPick: PropTypes.func.isRequired,
};

export default TagCard;
