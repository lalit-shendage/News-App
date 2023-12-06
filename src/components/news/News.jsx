import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserAuth } from '../../context/authContext';

const News = () => {
  const { user } = UserAuth();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=485d64f79aff43569ce4c340ebcbb050&page=${page}&pageSize=10`;
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(data.articles);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error("Error fetching news:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=485d64f79aff43569ce4c340ebcbb050&page=${page +
      1}&pageSize=10`;
    setLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles((prevArticles) => prevArticles.concat(data.articles));
      setTotalResults(data.totalResults);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error("Error fetching more news:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>News Headlines</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container-news">
          {articles.map((element) => (
            <div key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                imgsrc={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default News;
