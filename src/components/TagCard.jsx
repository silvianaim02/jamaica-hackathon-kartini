import PropTypes from 'prop-types';

const TagCard = ({ uniqueFilterArrOfObj }) => {
  return (
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
      <p className="text-xl font-semibold pb-5">
        Temukan kategori yang ingin kamu cari
      </p>
      <div className="flex flex-wrap">
        {uniqueFilterArrOfObj?.map((category, index) => (
          <button
            key={index}
            type="button"
            className="py-1 px-3 mr-1 mb-1 text-xs font-medium rounded-full w-fit bg-[#E3EEFF]"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

TagCard.propTypes = {
  uniqueFilterArrOfObj: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagCard;
