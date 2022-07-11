

<template>

  <div>
    Users
    
    <!-- <form @submit.prevent="add">
        <input type="hidden" v-model="form.created_at">
        <input type="hidden" v-model="form.id">
        <input type="text" v-model="form.name">
        <input type="text" v-model="form.email">
        <input type="hidden" v-model="form.token">
        <input type="text" v-model="form.password">
        <button type="submit" v-show="!updateSubmit">add</button>  
        <button type="button" v-show="updateSubmit" @click="update(form)">Update</button> 
    </form> -->

  <form @submit.prevent="add">
        <input type="hidden" v-model="form.created_at">
        <input type="hidden" v-model="form.id">
        <input type="text" v-model="form.name">
        <input type="text" v-model="form.email">
        <input type="hidden" v-model="form.token">
        <input type="text" v-model="form.password">
        <button type="submit" v-show="!updateSubmit">add</button> <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="updateSubmit" @click="update(form)">Update</button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>

    <ul v-for="user in users" :key="user.idd">
      <li>
      
     Name :<span>{{user.name}}</span> &#160;
      </li>
            <li>
      
      <span> <img>{{user.avatar}}<img/></span> &#160;
      </li>
      <li>
          Email :<span>{{user.email}}</span> &#160;
            </li>
            <li>
              Password :<span>{{user.password}}</span> &#160;
            </li>
            <li>
      <button @click="edit(user)">Edit</button> ||  <button @click="del(user)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */ 
import axios from 'axios'
export default {
  data(){
    return{
        form: {
          // id: '',
          // avatar: '',
          // name: '',
          // token: '',
          // email: '',
          // password: ''
        },
users: '',  

        updateSubmit: false
    }
  },
  // mounted() {
  //   this.load()
  // },
  // // methods: {
  // //   this.load()
  // // },
  // methods: {
  //   load(){
  //       axios.get('https://6182648584c2020017d89e32.mockapi.io/api/v1/users').then(res => {
  //       this.users = res.data
  //               this.form.id = '',
  //       this.form.name = '',
  //               this.form.email = '',
  //                       this.form.password = ''
  //     })
  //     .catch ((load) => {
  //       console.log(load);
        
  //     })
  //     .catch ((err) => {
  //       console.log(err);
        
  //     })
  //   },

  mounted() {
    this.load()
  },
  methods: {
    load(){
        axios.get('https://6182648584c2020017d89e32.mockapi.io/api/v1/users').then(res => {
        this.users = res.data //respon dari rest api dimasukan ke users
      }).catch ((err) => {
        console.log(err);
      })
    },

      add(){
      axios.post('https://6182648584c2020017d89e32.mockapi.io/api/v1/users', this.form).then(res => {
          this.load()
          this.form.name = ''
            
          this.form.email = ''
            
          this.form.password = ''
  
                           
      })
      
              .catch ((add) => {
        console.log(add);
        
      })
      .catch ((err) => {
        console.log(err);
        
      })

    },
    edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.name = user.name
                this.form.email = user.email
                        this.form.password = user.password 
    },
    // update(form){ 
    //    return axios.put('https://6182648584c2020017d89e32.mockapi.io/api/v1/users' + form.id , {name: this.form.name}).then(res => {
    //     this.load()
    //     this.form.id = '',
    //     this.form.name = '',
    //             this.form.email = '',
    //                     this.form.password = '',
    //     this.updateSubmit = false
    //   }).catch((err) => {
    //     console.log(err);
        
    //   })
    //         .catch ((update) => {
    //     console.log(update);
        
    //   })
    //   .catch ((err) => {
    //     console.log(err);
        
    //   })
    // },
    update(form){ 
       return axios.put('https://6182648584c2020017d89e32.mockapi.io/api/v1/users' + form.id , {name: this.form.name}).then(res => {
        this.load()
        this.form.id = ''
        this.form.name = ''
                this.form.email = ''
                        this.form.password = ''
        
        this.updateSubmit = false
      }).catch((err) => {
        console.log(err);
        
      })
    },
    // del(user){
    //   axios.delete('https://6182648584c2020017d89e32.mockapi.io/api/v1/users' + user.name).then(res =>{
    //       this.load()
    //       let index = this.users.indexOf(form.id)
    //       // this.users.splice(index,1)
    //   })
    // }

del(user){
 axios.delete('https://6182648584c2020017d89e32.mockapi.io/api/v1/users' + user.id).then(res =>{
          this.load(id)
          let index = this.users.indexOf(form.name)
          this.users.splice(index,1)

      })
    }


  }
}
</script>