import axios from 'axios';
function GetNews(category){
    const API_Key='2141e5cb37d54ff0bf1df69860ceb6eb';
    const API_ENDPOINT=`https://newsapi.org/v2/top-headlines?country=in&category=${category}`

       return axios.get(`${API_ENDPOINT}&apiKey=${API_Key}`).catch((err)=>{
      console.log("Error");
    })

}
export default GetNews;
