import React, { useEffect, useState } from "react";
import getNewsFromApi from "../services/api.js";
import "./articles.css";
import Article from "./Article.js";
import InfiniteScroll from 'react-infinite-scroll-component'
const Articles = () => {
  const [news, setNews] = useState([]);
  const [page,setPage]=useState(0)
  useEffect(() => {
    getNews();
  }, [page])  ;
  const getNews = async () => {
    let data = await getNewsFromApi(page);
    setNews([...news,...data]);
  };
 
  return (
    <InfiniteScroll 
    dataLength={news.length} 
    next={()=>setPage(page=>page+1)}
    hasMore={true}
    >
    <div className="articles_container">
      <div className="articles">
        <Article data={news} />
      </div>
    </div>
    </InfiniteScroll>
  );
};
export default Articles;
