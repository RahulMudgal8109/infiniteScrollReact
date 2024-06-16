import React, { useState, useEffect } from "react";
import Loading from "./Loading";
// import Header from "./Header";
import MovieComponent from "./MovieComponent";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [inputData,setInputdata]=useState("flowers");
  const accessKey = "6bE7og0OO0uzYqnPxxV-LVTFVGRFQWEjC-LvGl7Eslo";

  const getCardData = async (e) => {
   
   
     const res = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
     );
    
     
    
    console.log(res);
    const data = await res.json();
    console.log(data);
     setCard((prev) => [...prev, ...data.results]);
    setLoading(false);
    
    
    //console.log(card);
  };

  useEffect(() => {
    getCardData();
  }, [page,inputData]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setLoading(true);
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
    <div style={{width:"80%",height:"40px",margin:"0px auto"}}>
        <input style={{width:"20%",height:"35px",margin:"0px auto 0px 0px",borderRadius:"40px"}} type="text" onChange={(e)=>{
          setInputdata(e.target.value);
        }}/>
    </div>
   
      <MovieComponent movieInfo={card} />
      {loading && <Loading />}
    </>
  );
};

export default Home;
