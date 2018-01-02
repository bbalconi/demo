import {
  extendObservable
} from 'mobx';
var axios = require('axios');

export default class UserStore {
 constructor(){
   extendObservable(this, {
     data: []
   });
   axios.get('/api/employees').then((res) => {
     console.log('userStore rendered')
     this.data = res.data._embedded.employees
   })
 }
}