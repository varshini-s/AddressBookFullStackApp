import config from "../config/config";
import AxiosService from './axios-service'

class AddressBookService{

    baseUrl=config.baseUrl;
    addContact(data)
    {
        return AxiosService.postService(`${this.baseUrl}contact`,data);
    }

    getAllContact()
    {
        return AxiosService.getService(`${this.baseUrl}contact`);

    }
     getContactById(id)
    {
        return   AxiosService.getService(`${this.baseUrl}contact/${id}`);

    }
    getContactByState(state)
    {
        return   AxiosService.getService(`${this.baseUrl}contact/state/${state}`);

    }
    getContactByCity(city)
    {
        return   AxiosService.getService(`${this.baseUrl}contact/city/${city}`);

    }
    
    updateContact(id,data)
    {
        console.log(data)
        return AxiosService.putService(`${this.baseUrl}contact/${id}`,data);
    }
    deleteContact(id)
    {
        return AxiosService.deleteService(`${this.baseUrl}contact/${id}`);
    }

    
}

export default AddressBookService;



