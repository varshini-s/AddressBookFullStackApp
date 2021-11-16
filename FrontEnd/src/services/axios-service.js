const axios=require('axios').default;

class AxiosService{

    postService(url,contact)
    {
      
        return axios.post(url,contact)
    }

    getService(url='')
    {
        return   axios.get(url)
    }

    putService(url='',data)
    {
        return  axios.put(url,data)
    }
