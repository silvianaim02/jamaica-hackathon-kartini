import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import TagCard from '../components/TagCard';
import api from '../utils/api';
import ArticleCardList from '../components/ArticleCardList';
import JoinCommunityCard from '../components/JoinCommunityCard';
import { useSearchParams } from 'react-router-dom';
import Navbar from '../components/navbar';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [searchField, setSearchField] = useState(keyword ? keyword : '');
  const [categoryPick, setCategoryPick] = useState('');

  // Update Keyword
  function updateKeywordUrlSearchParams(newValue) {
    setSearchParams({ keyword: newValue });
  }

  const resultSearch = articles?.filter((article) => {
    return article.title.toLowerCase().includes(searchField.toLowerCase());
  });

  const resultCategory = articles?.filter((item) => {
    if (categoryPick === '') return articles;
    return item.category.includes(categoryPick);
  });

  console.log(resultCategory);

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

  // const resetSearchField = () => {
  //   updateKeywordUrlSearchParams('');
  //   setSearchField('');
  // };

  return (
    <>
      <Navbar />
      <Hero
        setArticles={setArticles}
        searchField={searchField}
        setSearchField={setSearchField}
        onSearch={updateKeywordUrlSearchParams}
      />
      {/* bagian feed */}
      <div className="container mx-auto flex flex-wrap py-6">
        <aside className="w-full md:w-1/3 md:flex flex-col items-center px-3 hidden">
          <TagCard
            uniqueFilterArrOfObj={uniqueFilterArrOfObj}
            loading={loading}
            // resetSearchField={resetSearchField}
            articles={articles}
            setArticles={setArticles}
            setCategoryPick={setCategoryPick}
          />
          <JoinCommunityCard loading={loading} />
        </aside>
        <section className="w-full md:w-2/3 flex flex-col items-center px-3">
          {
            <ArticleCardList
              articles={
                searchField !== '' ? resultSearch : resultCategory || articles
              }
              loading={loading}
              setLoading={setLoading}
              onSearch={updateKeywordUrlSearchParams}
            />
          }
        </section>
      </div>
    </>
  );
};

export default HomePage;
