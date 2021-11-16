class Utility
{

    validateName(name)
    {
        let error;
        let nameRegex=RegExp('^([A-Z]{1}[a-z]{2,})( [A-Z]{1}[a-z]{2,})*$');

        if(name.length<1)
        {
            
            error='Name is required field'
        }
        else if(!nameRegex.test(name))
        {
            error='Name is Invalid'
        }
        else
        {
            error=''

        }
        return error;
    }

    validatePhoneNumber(phoneNumber)
    {
        let error;
        let phoneNumberRegex=RegExp("^[+]?[91]{2}[ ]?[6-9][0-9]{9}$");

        if(phoneNumber.length<1)
        {
            
            error='Phone Number is required field'
        }
        else if(!phoneNumberRegex.test(phoneNumber))
        {
            error='Phone Nmber is Invalid'
        }
        else
        {
            error=''

        }
        return error;
    }

    validateAddress(address)
    {
        let error;
        let addressregex=RegExp("(?!^\\d+$)^[A-Z,a-z,0-9, ()#-]{3,}$");

        if(address.length<1)
        {
            
            error='Address is required field'
        }
        else if(!addressregex.test(address))
        {
            error='Address is Invalid'
        }
        else
        {
            error=''

        }
        return error;
    }

    validateZip(zip)
    {
        let error;
        let zipRegex=RegExp("^[0-9]{3}[ ]?[0-9]{3}$");

        if(zip.length<1)
        {
            
            error='Zip is required field'
        }
        else if(!zipRegex.test(zip))
        {
            error='Zip is Invalid'
        }
        else
        {
            error=''

        }
        return error;
    }

}

export default new Utility();
