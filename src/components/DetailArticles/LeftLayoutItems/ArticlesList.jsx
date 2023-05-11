import { BsDot } from 'react-icons/bs';
import { SlDiamond } from 'react-icons/sl';
import Anne from '../../../assets/anne.jpg';
import PropTypes from 'prop-types';
import { articleItemPropTypes } from '../../ArticleCardItem';

const ArticlesList = ({ article }) => {
  console.log(article);
  return (
    <div className="flex flex-col w-full justify-items-stretch pb-8">
      <div className="grid lg:grid-cols-3 flex-col">
        <div className="col-span-1">
          <div className="py-2">
            <img
              src="https://source.unsplash.com/collection/1346951/1000x500?sig=1"
              className="w-40 rounded-2xl"
            />
          </div>
        </div>
        <div className="lg:col-span-2 lg:pl-6 pl-0">
          <div className="w-full flex items-center">
            <div className="flex justify-center items-center">
              <span className="h-6 w-6 rounded-full bg-accent-9 flex justify-center items-center">
                <SlDiamond className="text-white w-3 h-3" />
              </span>
              {/* <h1 className="px-2 text-accent-9 text-sm">{article.level}</h1> */}
            </div>
            <BsDot className="text-gray-500" />
            <div className="flex justify-center items-center">
              {/* <h1 className="text-gray-500 text-sm">{article.member}</h1> */}
            </div>

            <div className="w-full items-center justify-end text-sm flex">
              <h1 className="font-medium text-accent-2 pr-3">
                {article.user.name}
              </h1>
              <img src={Anne} alt="" className="rounded-full h-6 w-6" />
            </div>
          </div>
          <p className="text-lg text-accent-2 font-bold">{article.title}</p>
          <p className="text-sm text-gray-500 line-clamp-2">{article.body}</p>
        </div>
      </div>
    </div>
  );
};

ArticlesList.propTypes = {
  article: PropTypes.objectOf(PropTypes.shape(articleItemPropTypes)),
};

export default ArticlesList;

// const ArticlesList = ({ article }) => {
//   return (
//     <div className="grid grid-cols-2 justify-items-stretch">
//       <div className="col-span-1">
//         <div className="rounded-md py-2">
//           <img src={Image} className="w-36" />
//         </div>
//       </div>
//       <div className="col-span-1">
//         <div className="w-full flex items-center">
//           <div className='flex justify-center items-center'>
//             <span className='h-6 w-6 rounded-full bg-accent-9 flex justify-center items-center'>
//               <SlDiamond className='text-white w-3 h-3' />
//             </span>
//             <h1 className='pl-2 pr-4 text-accent-9'>{article.level}</h1>
//           </div>
//           <BsDot className='text-gray-500'/>
//           <div className='flex justify-center items-center'>
//             <h1 className='text-gray-500'>{article.member}</h1>
//           </div>
//           <div className="w-full items-center justify-end text-sm flex">
//             <h1 className='font-medium text-accent-2 pr-3'>{article.name}</h1>
//             <img
//               src={Anne}
//               alt=''
//               className="rounded-full h-6 w-6"
//             />
//           </div>
//         </div>

//         <p className="text-lg text-accent-2 font-bold">{article.title}</p>
//         <p className="text-sm text-gray-500">{article.desc}</p>
//       </div>
//     </div>
//   );
// }

// export default ArticlesList;
