import PropTypes from 'prop-types';
import SearchBar from './SearchBar';

function Hero({
  setArticles,
  setSearchField,
  onSearch,
  onTyping,
  setOnTyping,
  setLoading,
  setCategoryPick,
}) {
  return (
    <>
      <div
        className="w-full bg-center bg-cover h-full md:h-[24rem]"
        style={{
          backgroundImage: `url(
            'https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg'
          )`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full bg-gray-900/40 py-8 md:py-2">
          <div className="text-center">
            <div className="mx-auto max-w-xs md:max-w-4xl">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">
                Temukan Artikel Programming yang Kamu Butuhkan
              </h1>

              <p className="mt-6 text-gray-500 dark:text-gray-300 text-sm md:text-base">
                Selamat datang di situs kami, tempat terbaik untuk mencari
                artikel programming terbaru dan terpercaya. Dari pemula hingga
                profesional, kami menyediakan sumber daya lengkap untuk
                membantumu mencapai tujuanmu. Segera temukan artikel yang kamu
                butuhkan dan tingkatkan keterampilan programmingmu bersama kami.
              </p>

              <div className="w-full max-w-sm mx-auto mt-6 rounded-md focus-within:ring-opacity-40">
                <SearchBar
                  setArticles={setArticles}
                  setSearchField={setSearchField}
                  onSearch={onSearch}
                  onTyping={onTyping}
                  setOnTyping={setOnTyping}
                  setLoading={setLoading}
                  setCategoryPick={setCategoryPick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Hero.propTypes = {
  setSearchField: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  setArticles: PropTypes.func.isRequired,
  onTyping: PropTypes.string,
  setOnTyping: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setCategoryPick: PropTypes.func.isRequired,
};

export default Hero;
