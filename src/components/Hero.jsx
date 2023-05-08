function Hero() {
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
                <form>
                  <label
                    // for="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        ></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 pl-10 text-sm text-gray-900 rounded-full bg-[#E3EEFF]"
                      placeholder="Search Article..."
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
