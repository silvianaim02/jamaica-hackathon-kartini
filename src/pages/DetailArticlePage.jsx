import { useEffect, useState } from 'react';
import BottomPart from '../components/DetailArticles/BottomLayout/BottomPart';
import LeftLayoutMain from '../components/DetailArticles/LeftLayoutItems/LeftLayoutMain';
import RightPart from '../components/DetailArticles/RightLayoutItem/RightPart';
import Navbar from '../components/NavbarMain';
import api from '../utils/api';
import { useParams } from 'react-router-dom';
import TulisButton from '../components/TulisButton';
import LoadingSpinner from '../components/DetailArticles/Loading/Loading';

const DetailArticlePage = () => {
  const [loading, setLoading] = useState(true);
  const [article, setArticle] = useState();
  const [articles, setArticles] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchArticle = async () => {
      const res = await api.getArticleById(id);
      setArticle(res.data.article);
      setTimeout(() => {
        setLoading(false);
      }, 150);
    };
    fetchArticle();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.getAllArticles();
      if (res.status === 'success') {
        setArticles(res.data.articles);
        setTimeout(() => {
          setLoading(false);
        }, 350);
      }

      console.log(res.data.articles);
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="container grid grid-cols-1 xl:grid-cols-5 w-full col-span-10 mx-auto">
            <LeftLayoutMain articles={articles} {...article} />
            <RightPart loading={loading} setLoading={setLoading} {...article} />
          </div>
          <div className="py-10 items-center justify-center text-center">
            <BottomPart loading={loading} {...article} />
          </div>
          <TulisButton />
        </>
      )}
    </>
  );
};

export default DetailArticlePage;
