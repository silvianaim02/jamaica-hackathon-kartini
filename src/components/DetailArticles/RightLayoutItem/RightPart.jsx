import TopSection from './TopSection';

const RightPart = () => {
  return (
    <div className='col-span-3 items-start justify-start flex flex-col w-full pt-10'>
      <div className="w-full items-start flex flex-col lg:pl-10">
        <div className='w-full space-y-5'>
          <div className="flex items-center justify-center">
            {/** top section */}
            <TopSection /> 
          </div>
        </div>
      </div>

      {/** bottom section */}
      <div className="w-full items-start justify-start pl-10 pt-3">
        <p className='font-light text-gray-500 text-xs'>published <span className='font-medium'>3 mins ago</span></p>
        <h1 className='text-accent-2 font-bold text-3xl pt-6 leading-10 text-justify'>How to mint NFTs programmatically (Zero Solidity knowledge needed)</h1>
        <p className='text-accent-2 text-base pt-4 leading-7 text-justify'>
          But it’s true that I’m captivated by the free-flowing lines of the chair’s bentwood, indicative of the endless shapes that wood can accommodate when cut, folded, glued or screwed. Living in a part of Washington State where the forests and beaches of the Puget Sound offer a never-ending supply of “found” wood, I began having visions of what a piece of driftwood or hunk of fallen timber could eventually become. Not so much chairs or dining tables; it’s way easier to grab a KLIMPFJALL dining table from aisle 7, bin 21 if what you need is a place to sit and eat.<br /><br />
          My interest lies instead in sculptural pieces and utilitarian creations that these treasures already resemble: spoons, trays, birds and whales, for example. I began collecting wood by the armfuls and it piled up in my garage. I also discovered that you can buy boxes of wonderful wood scraps from nice people on Etsy who deal in lumber and woodworking as a profession. My girlfriend complained about not being able to park the cars in the garage. This was true.<br /><br />
          Because I had few tools and little knowledge with which to achieve my vision for these pieces, I turned to the web for education and inspiration. Videos like “Top 5 Deadly and Dangerous Power Tools,” and, “12 Power Tools That Can Kill You,” were worth the sobering watch. But far more important was observing incredibly dedicated and generous “makers” who tirelessly document their work and share their wisdom in order to make a living while also educating, inspiring and entertaining. Leah Houghtaling is one such gifted woodworker. Leah narrates the genesis of a clever creation of hers, and she appreciates letting things be as they are and allowing them to become what they “want” to be. Imperfections and all. Often it’s the imperfections or mistakes that ultimately make the piece.
        </p>
      </div>
    </div>
  );
}

export default RightPart;
