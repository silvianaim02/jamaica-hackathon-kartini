import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import TagCard from '../components/TagCard';
import api from '../utils/api';
import ArticleCardList from '../components/ArticleCardList';
import JoinCommunityCard from '../components/JoinCommunityCard';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await api.getAllArticles();
      setArticles(res);
      setTimeout(() => {
        setLoading(false);
      }, 350);
    };

    fetchData();
  }, []);

  const uniqueFilterArrOfObj = articles?.reduce((categories, obj) => {
    obj.category.forEach((category) => {
      if (categories.indexOf(category) === -1) {
        categories.push(category);
      }
    });
    return categories;
  }, []);

  return (
    <>
      <Hero />
      {/* bagian feed */}
      <div className="container mx-auto flex flex-wrap py-6">
        <aside className="w-full md:w-1/3 md:flex flex-col items-center px-3 hidden">
          <TagCard uniqueFilterArrOfObj={uniqueFilterArrOfObj} />
          <JoinCommunityCard />
        </aside>
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {
            <ArticleCardList
              articles={articles}
              loading={loading}
              setLoading={setLoading}
            />
          }
        </section>
      </div>
    </>
  );
};

export default HomePage;
