import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { UserAuth } from '../../context/authContext';

const News = () => {
  const { user} = UserAuth();
  console.log(user)
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  

  const updateNews = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=485d64f79aff43569ce4c340ebcbb050&page=${page}&pageSize=10`;
    setloading(true);
    const data = await fetch(url);
    console.log(data, "fetch")
    let parsedData= await data.json()
    console.log(parsedData,"parsed data")
    await setarticles(parsedData.articles)
    console.log(articles, "set articles ")
    await settotalResults(parsedData.totalResults)
    setloading(false)
  };
  useEffect(() => {
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=485d64f79aff43569ce4c340ebcbb050&page=${page +
      1}&pageSize=10`;
    setloading(true);
    setpage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    await setarticles((prevArticles) =>
      prevArticles.concat(parsedData.articles)
    );
    await settotalResults(parsedData.totalResults);
    setloading(false);
  };

  return (
    console.log(articles),
    (
      <div>
        
        <InfiniteScroll
          dataLength={articles.length || 0} 
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container-news">
            {articles &&
              articles.map((element) => {
                return (
                  <div key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgsrc={element.urlToImage}
                      newsUrl={element.url}
                    />
                  </div>
                );
              })}
          </div>
        </InfiniteScroll>
      </div>
    )
  );
};

export default News;
