import { useEffect, useState } from "react";
import BottomPart from "../components/DetailArticles/BottomLayout/BottomPart";
import LeftLayoutMain from "../components/DetailArticles/LeftLayoutItems/LeftLayoutMain";
import RightPart from "../components/DetailArticles/RightLayoutItem/RightPart";
import Navbar from "../components/NavbarMain";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import TulisButton from "../components/TulisButton";

const DetailArticlePage = () => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState({});
  const {id} = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await api.getArticleById(id);
      setArticle(res);
      setTimeout(() => {
        setLoading(false);
      }, 200);
    }
    fetchArticle();
  }, []);

  console.log(article)

  return (
    <>
      <Navbar />
      <div className='container grid grid-cols-1 xl:grid-cols-5 w-full col-span-10 mx-auto'>
        <LeftLayoutMain {...article} />
        <RightPart loading={loading} setLoading={setLoading} {...article} />
      </div>
      <div className="py-10 items-center justify-center text-center">
        <BottomPart {...article} />
      </div>
      <TulisButton />
    </>
  )
};

export default DetailArticlePage;
