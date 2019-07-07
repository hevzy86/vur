import Errors from './Errors';
import axios from 'axios';

class Form{
    constructor(data){
        this.originalData = data;
        for(let field in data){
            this[field] = data[field];
        }
   this.errors = new Errors();
    }

   //Fetch all relevant data from the form
   data(){
       let data = Object.assign({}, this);
       delete data.originalData;
       delete data.errors;
       
       return data;
   }
   //reset data from fields
   reset(){
       for(let field in this.originalData){
           this[field]='';
       }
   }

   //submit  the form
   submit(requestType, url){
       axios[requestType](url, this.data())
           .then(this.onSuccess.bind(this))
           .catch(this.onFail.bind(this))
   }

   //handle successful form submission
   onSuccess(responce){
       alert(responce.data.message);//temporary
       this.errors.clear();
       this.reset();
   }
   //handle failed form sunmission
   onFail(error){
       this.errors.record(error.responce.data);
   }
}

export default Form;