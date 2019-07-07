import Vue from 'vue';
import axios from 'axios';
import Form from './core/Form';
import Example from './components/Example';

window.axios = axios;
window.Form = Form;

const app = new Vue({
    el: '#app',

    components:{
        Example
    },

    data:{
        form: new Form({
            name:'',
            description:''
        })
    },
    methods: {
        onSubmit(){
             this.form.submit('post','/projects')
                 .then(response=>alert('Wahoo!'));
        }
    },
});
