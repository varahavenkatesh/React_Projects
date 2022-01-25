import axios from 'axios';


const URL_SERV="http://localhost:3003";
//http://localhost:3003/posts?_page=1&_limit=6&_order=desc&_sort=id

export const getPosts = async(prevState,page=1,order="asc",limit="6") =>{
try {
    //const response = await axios.get(`${URL_SERV}/posts`);
    const response = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);
    
return {
    posts:prevState.posts?[...prevState.posts,...response.data] :response.data,
    page:page,
    end:response.data.length===0?true:false
}

}catch(error){
    throw error;}


};


export const addNewsLetter = async(data)  => {

    try {

        const findUser = await axios.get(`${URL_SERV}/newsletter?email=${data.email}`) 

            if (!Array.isArray(findUser.data) || !findUser.data.length) {
                const response = await axios({
                    method:'POST',
                    url:`${URL_SERV}/newsletter`,
                    data:{
                        email:data.email
                    }
                });

                return {
                    newsletter:'added',
                    email:response.data
                }
            }
            else {
                return {
                    newsletter:'failed'
                }
            }


    }catch(error) {
        throw error;
    }
}


export const getPostById = async(id)=> {
    try {

            const response =await axios.get(`${URL_SERV}/posts/${id}`);
        return response.data;
    }catch(error){
        throw '404';
    }    }


    export const sendMessage = async(data) => {
        try{
            const response = await axios({
                method:'POST',
                url: `${URL_SERV}/contact`,
                data: data
            });
            return true
        } catch(error){
            return false
        }
    }