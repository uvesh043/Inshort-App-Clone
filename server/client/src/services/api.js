// const URL ="http://localhost:8000/news";
const getNews = async (page,size=5) => {
  try {
    const response = await fetch(`/news?page=${page}&size=${size}`, {
      mode: "no-cors",
      method: "GET",
    })
    const data= await response.json();
    return data
   } catch (error) {
    console.log("Errro while fectching api", error);
  }
};
export default getNews;
