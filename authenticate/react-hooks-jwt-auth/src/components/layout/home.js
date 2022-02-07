import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
const Home = () => {
  const [content, setContent] = useState("");
  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
        setContent(_content);
      }
    );
  }, []);
  return (

    <div className="container">
    <div className="jumbotron  text-center ">
       
             <h1 className="display-4">Welcome Space</h1>
             <p className="lead">This space left for updating latest contents.</p>
             <h3>{content}</h3>
        </div>
   
    </div> 
  );
};
export default Home;
