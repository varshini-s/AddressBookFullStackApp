import React, {useState, useEffect} from 'react'
import './address-form.scss';
import {Link, useHistory, useParams } from 'react-router-dom';
import AddressBookService from "../../services/addressbook- service"
import PageHeader from '../page-header/page-header';
import cancelIcon from '../../assets/icons/cancel.png'
import 'typeface-roboto';
import applcationConstants from '../../config/application-constants';
import utility from '../../utility/utility';

var addressBookService = new AddressBookService();
const stateData=applcationConstants.stateData;
let isError=false;
let error={
    name:'',
    phoneNumber:'',
    address:'',
    zip:''

};
const AddressForm=()=>{

    let initialValue={

        name:'',
        phoneNumber:'',
        address:'',
        city:'',
        state:'',
        zip:'',
        isUpdate:false,
        error:{

            name:'',
            phoneNumber:'',
            address:'',
            zip:''
        }

    }



   
    const [formValue,setForm]=useState(initialValue);
    const [displayMessage,setDisplayeMessage]=useState("");
    const history = useHistory();
    const {id} = useParams();


    useEffect(() => {


        addressBookService.getContactById(id).then((response) =>
        {
            console.log(response.data.data.department)
            

            setForm({...formValue,
                    name:response.data.data.name,
                    phoneNumber:response.data.data.phoneNumber,
                    address:response.data.data.address,
                    city:response.data.data.city,
                    state:response.data.data.state,
                    zip:response.data.data.zip});

        }).catch(error => {
            console.log(error)
        })
    }, [])



    const states = stateData.map((state) => (
        <option key={state.name} value={state.name}>
          {state.name}
        </option>
      ));
    
      const cities = stateData.find(item => item.name === formValue.state)?.cities.map((city) => (
        <option key={city} value={city}>
          {city}
        </option>
      ));



    const changeValue=(event)=>{
        setForm({...formValue,[event.target.name]:event.target.value,error:error},)
    }



    const updateErrorStatus=(errorValue)=>{

        if(errorValue.length<1)
        {
            isError=false;

        }
        else
        {
            isError=true;
        }

    }

    const handleChangeEvent=(event)=>{

        let inputField=event.target.name       
        let inputData=event.target.value; 
        let errorString='';

        switch (inputField) 
        {
            case "name":
                errorString=utility.validateName(inputData);
                updateErrorStatus(errorString);
                error.name=errorString;

                break;
            case "phoneNumber":
                errorString=utility.validatePhoneNumber(inputData);
                updateErrorStatus(errorString);
                error.phoneNumber=errorString;
                break;
            case "address":
                errorString=utility.validateAddress(inputData);
                updateErrorStatus(errorString);
                error.address=errorString;
                break;
            case "zip":
                errorString=utility.validateZip(inputData);
                updateErrorStatus(errorString);
                error.zip=errorString;
                break;
        
            default:
                break;
        }

        changeValue(event);




    }

    const save = (event)=>{
        event.preventDefault();
        console.log("save");

        if(isError)
        {
            console.log('error',formValue);
            return;
        }
    
        let object ={
    
            name:formValue.name,
            phoneNumber:formValue.phoneNumber,
            address:formValue.address,
            city:formValue.city,
            state:formValue.state,
            zip:formValue.zip
        }
        //if link doesnt contain id, returns as undefined
        if(id)
        {
            addressBookService.updateContact(id, object).then((response) => {
                console.log("update success"+response)
                history.push('/')
            }).catch(error => {
                console.log(error)
            })

        }
        else 
       {
        addressBookService.addContact(object).then(data=>{
            console.log("data added"+object);
            history.push('/');
            setDisplayeMessage("Successfullly added User")
            setTimeout(()=>{
                window.location.reload();},3000);
            
        })
        .catch(err =>{
            console.log("err while add"+err.response);
            setDisplayeMessage("Error while  adding")

        })
           
       }  

    }


    const reset=()=>{
        setForm({...initialValue,isUpdate: formValue.isUpdate})
        window.location.reload(true);

        console.log(formValue)
    }

    return(

        <div className="payroll-main">
            <PageHeader/>
            <div className="form-content">
                <form className="form" action="#" onSubmit={save}>
                    <div className="form-head">
                        <div class="form-text">PERSON ADDRESS FORM</div>
                        <div class="cancel-img">
                            <Link to="/" >
                                <img  class="cancel" src={cancelIcon}></img>
                            </Link>
                        </div>

                    </div>

                    
                    <div className="row">
                        <label className="label text" htmlFor="name">Full Name</label>
                        <input className="input" autoComplete="off" type="text" id="name" name="name" value={formValue.name} onChange={handleChangeEvent} placeholder="Your name.."/>

                    </div>
                    <div className="error">{formValue.error.name}</div>

                    <div className="row">
                        <label className="label text" htmlFor="phoneNumber">Phone Number</label>
                        <input className="input" autoComplete="off" type="text" id="phoneNumber" name="phoneNumber" value={formValue.phoneNumber} onChange={handleChangeEvent} placeholder="Your Phone Number.."/>

                    </div>
                    <div className="error">{formValue.error.phoneNumber}</div>

                    <div className="row">
                        <label className="label text" htmlFor="address">Address</label>
                        <textarea className="input address" type="text" id="address" name="address" value={formValue.address} onChange={handleChangeEvent} placeholder="Your Address.."/>

                    </div>
                    <div className="error">{formValue.error.address}</div>


                    <div className="row">
                        <div className="place">
                            <div className="place-content">
                                <div className="label-div">
                                    <label className="label text" htmlFor="city">City</label>
                                </div>
                                <div className="select">

                                    <select onChange={changeValue} value={formValue.city} id="city" name="city">
                                        <option value="" disabled selected>Select City</option>
                                        {cities}
                                    </select>


                                </div>
                                
                            </div>

                            <div className="place-content">
                                <div className="label-div">
                                    <label className="label text" htmlFor="state">State</label>
                                </div>

                                <select onChange={changeValue} value={formValue.state} id="state" name="state">
                                <option value="" disabled selected>Select State</option>

                                    {states}
                                </select>
                            </div>

                            <div className="place-content zip-content">
                                <div className="label-div">
                                    <label className="label text" htmlFor="zip">Zip</label>
                                </div>
                                <input className="input zip" type="text" id="zip" name="zip" value={formValue.zip} onChange={handleChangeEvent} placeholder=" Zip.."/>
                                <div className=" zip-error">{formValue.error.zip}</div>

                            </div>

                        </div>
                    </div>
                    <div className="row button-row">
                        <div className="button-parent">
                            <button type="submit" className="button addButton" id="addButton" 
                            disabled={(!formValue.name)||(!formValue.phoneNumber)||(!formValue.address)||(!formValue.zip)||(!formValue.state)||(!formValue.city)}>
                            {id?'Update':'Add'}</button>
                            <button type="button" onClick={reset} className="resetButton button"
                            disabled={(!formValue.name)&&(!formValue.phoneNumber)&&(!formValue.address)&&(!formValue.zip)&&(!formValue.state)&&(!formValue.city)}>
                            Reset</button>
                        </div>
                    </div>

                    

                    <div className="displayMessage">{displayMessage}</div>

                </form>
            </div>
        </div>

        
    )
}

export default AddressForm
