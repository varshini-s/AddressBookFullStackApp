const axios=require('axios').default;

class AxiosService{

    postService(url,contact)
    {
      
        return axios.post(url,contact)
    }


}
