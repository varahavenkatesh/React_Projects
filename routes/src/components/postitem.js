import React from 'react';


const PostsItem = (props) => {
  console.log(props)
  return (
    <>
      <div>
      Posts Item :  {props.match.params.id}
       
      </div>
      

    </>
  );
}

export default PostsItem;