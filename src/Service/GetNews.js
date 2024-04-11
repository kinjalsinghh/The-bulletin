import axios from 'axios';
function GetNews(category){
    const API_Key='2141e5cb37d54ff0bf1df69860ceb6eb';
    const API_ENDPOINT=`https://newsapi.org/v2/top-headlines?country=in&category=${category}`
     const URL=`${API_ENDPOINT}&apiKey=${API_Key}`
    return axios.get(URL)
          .catch((error)=>{
            if(error.message==="Request failed with status code 426"){
                return <div>Disclaimer:The api only works on localhost in case of developer plan for deployment we needed a paid version</div>
            }
        })

}
export default GetNews;
