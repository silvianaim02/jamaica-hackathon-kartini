import PropTypes from 'prop-types';

const TagCard = ({
  resetSearchField,
  uniqueFilterArrOfObj,
  loading,
  setLoading,
  setCategoryPick,
}) => {
  const buttonSkeletonList = [];
  for (let i = 0; i < 5; i++) {
    buttonSkeletonList.push(
      <button
        key={i}
        type="button"
        className="py-1 px-3 mr-1 mb-1 text-xs font-medium rounded-full w-16 h-6 bg-[#E3EEFF]"
      />
    );
  }

  const handleClickCategory = (e) => {
    e.preventDefault();
    resetSearchField();
    setLoading(true);
    setCategoryPick(e.target.value);
    setTimeout(() => {
      setLoading(false);
    }, 350);
  };

  return (
    <div className="w-full bg-white shadow flex flex-col mb-4 p-6">
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
  uniqueFilterArrOfObj: PropTypes.arrayOf(PropTypes.string),
  loading: PropTypes.bool.isRequired,
  setLoading: PropTypes.func.isRequired,
  resetSearchField: PropTypes.func.isRequired,
  setArticles: PropTypes.func.isRequired,
  setCategoryPick: PropTypes.func.isRequired,
};

export default TagCard;
