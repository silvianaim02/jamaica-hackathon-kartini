import { Link } from 'react-router-dom';
import { BsPencilSquare } from "react-icons/bs";

const TulisButton = () => {
  return (
    <Link to="/editor" className="fixed right-4 bottom-4 bg-accent-8 hover:bg-accent-8/80 text-white rounded-full p-4 shadow-lg">
      <BsPencilSquare className="w-5 h-5" />
    </Link>
  );
}

export default TulisButton;
