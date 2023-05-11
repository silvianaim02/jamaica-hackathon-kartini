import { useEffect, useState } from 'react';
import Hero from '../components/Hero';
import TagCard from '../components/TagCard';
import api from '../utils/api';
import ArticleCardList from '../components/ArticleCardList';
import JoinCommunityCard from '../components/JoinCommunityCard';
import { useSearchParams } from 'react-router-dom';
import { AiFillTags } from 'react-icons/ai';
import Navbar from '../components/NavbarMain';
import TulisButton from '../components/TulisButton';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState();
  const [onTyping, setOnTyping] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword');
  const [searchField, setSearchField] = useState(keyword ? keyword : '');
  const [categoryPick, setCategoryPick] = useState('');

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

  const uniqueFilterArrOfObj = articles?.reduce((categories, obj) => {
    obj.category.forEach((category) => {
      if (categories.indexOf(category) === -1) {
        categories.push(category);
      }
    });
    return categories;
  }, []);

  const resetSearchField = () => {
    setOnTyping('');
    setSearchParams('');
    setSearchField('');
  };

  return (
    <>
      <Navbar />
      <Hero
        setArticles={setArticles}
        searchField={searchField}
        setSearchField={setSearchField}
        onSearch={updateKeywordUrlSearchParams}
        setOnTyping={setOnTyping}
        onTyping={onTyping}
        setLoading={setLoading}
        setCategoryPick={setCategoryPick}
      />
      {/* bagian feed */}
      <div className="container mx-auto flex flex-wrap py-6">
        <aside className="w-full md:w-1/3 md:flex flex-col items-center px-3 hidden">
          <TagCard
            uniqueFilterArrOfObj={uniqueFilterArrOfObj}
            loading={loading}
            // resetSearchField={resetSearchField}
            setLoading={setLoading}
            articles={articles}
            setArticles={setArticles}
            setCategoryPick={setCategoryPick}
            setOnTyping={setOnTyping}
            resetSearchField={resetSearchField}
          />
          <JoinCommunityCard loading={loading} />
        </aside>
        <section className="w-full md:w-2/3 flex flex-col px-3">
          <div className="flex gap-4 justify-between items-center">
            {categoryPick !== '' ? (
              <span className="flex gap-2 items-center pb-5 text-base font-medium text-[#30C8D6]">
                <AiFillTags />
                <p>{categoryPick}</p>
              </span>
            ) : (
              <p className="text-3xl font-bold pb-5 text-[#2B546A]">Terbaru</p>
            )}
          </div>
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
      <TulisButton />
    </>
  );
};

export default HomePage;
