import { useEffect, useState } from "react"
import GetNews from "../Service/GetNews"
import moment from 'moment';
import alanBtn from '@alan-ai/alan-sdk-web';
import banner from '../Images/banner.png'
function NewsData(){
    const [newsData,setNewsData]=useState([])
    const [selected,setSelected]=useState('general')
    const alanKey=`a290835c25a98a9f5cc52c22af3d07d22e956eca572e1d8b807a3e2338fdd0dc/stage`
    const getAllNews=async()=>{
        let Data=await GetNews(selected);
        setNewsData(Data.data.articles)
    }
    useEffect(() => {
        alanBtn({
            key: alanKey,
            onCommand: (commandData) => {
              setSelected(commandData.data)
            }
        });
      }, []);
    
    useEffect(()=>{
        getAllNews()
    },[selected])
    function selectChange(e){
        let data=(e.target.value);
        setSelected(data);
    }
    return(
        <div className="app">
            <img className="banner" src={banner}/>
        <div className="main">
           <div className="select">
            
            <label for="category">Category: </label>
            
             <select value={selected} onChange={selectChange} className="select-box">
                <option >Select</option>
                <option value="general">General</option>
                <option value="technology">Technology</option>
                <option value="sports">Sports</option>
                <option value="entertainment">Entertainment</option>
                <option value="health">Health</option>
                <option value="business">Business</option>
                <option value="science">Science</option>
             </select>
            </div>  
            <div className="heading">
                <h1>Showing {selected} news</h1>
                <hr/>
            </div>
            <div className="grid-main">
            {newsData.map((news)=>{
                return(
                  <div className="grid-title">
                    <img className="news-image" src={news.urlToImage}/>
                    <p className="news-title">{news.title}</p>
                    <p className="news-content">{news.content}</p>
                    <div className="space-between">
                    <p>Author: {news.author}</p>
                    <p className="news-date">{moment(news.publishedAt).format('LL')}</p>
                    </div>
                    <a style={{textDecoration:"none"}}href={news.url} target="_blank">Read More.</a>
                   </div>
                )
            })}
            </div>
        </div>
        </div>
    )
}
export default NewsData