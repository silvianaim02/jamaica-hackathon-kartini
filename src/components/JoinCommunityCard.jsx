import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const JoinCommunityCard = ({ loading }) => {
  const communities = [
    { id: 1, communityName: 'React Community ' },
    { id: 2, communityName: 'Javascript Group' },
    { id: 3, communityName: 'Docker Developer' },
    { id: 4, communityName: 'PHP' },
    { id: 5, communityName: 'MySQL' },
    { id: 6, communityName: 'MongoDB Community' },
    { id: 7, communityName: 'Python (Not Animal)' },
    { id: 8, communityName: 'Fullstack Developer' },
    { id: 9, communityName: 'Kotlin' },
    { id: 10, communityName: 'Flutter' },
  ];

  return (
    <div className="w-full bg-white shadow flex flex-col my-4 p-6">
      <p className="text-xl font-semibold pb-5 text-[#2B546A]">
        Mari bergabung bersama komunitas sesuai minatmu!
      </p>

      {loading ? (
        <div className="w-full">
          <div className="h-2.5 bg-[#E3EEFF] rounded-full  w-48 mb-4"></div>
          <div className="h-2 bg-[#E3EEFF] rounded-full max-w-[480px] mb-2.5"></div>
          <div className="h-2 bg-[#E3EEFF] rounded-full mb-2.5"></div>
          <div className="h-2 bg-[#E3EEFF] rounded-full max-w-[440px] mb-2.5"></div>
          <div className="h-2 bg-[#E3EEFF] rounded-full max-w-[460px] mb-2.5"></div>
          <div className="h-2 bg-[#E3EEFF] rounded-full max-w-[360px]"></div>
        </div>
      ) : (
        communities.map((community) => (
          <div key={community.id} className="flex w-3/4 gap-4">
            <p className="font-medium text-sm py-2">
              {community.communityName}
            </p>
            <Link
              to='/communities'
              type="button"
              className="px-2 text-accent-2 items-center justify-center my-1.5 text-xs font-medium rounded-xl w-fit border border-accent-4"
            >
              Gabung
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

JoinCommunityCard.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default JoinCommunityCard;
