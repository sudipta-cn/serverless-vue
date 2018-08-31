<template>
  <div class="hello">
    <header>
      <h1>My First serverless with vue</h1>
    </header>
    <div class="form">
      <input type="text" class="input" v-model="name" autocomplete="off" name="name" value="">
      <input type="button" name="" class="submit" value="Submit" @click.prevent="submitData">
    </div>

    <h2>{{ msg }}</h2>

    <h4>The dynamic data is : {{ dynamicData }}</h4>

    <ul class="lists">
      <li v-for="list in this.lists" :key="list.id">{{list.name}}</li>
      <!-- <li>tumi tumi</li>
      <li>ami na ami dd</li>
      <li>amids fsd ami sdf </li> -->
    </ul>

  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      dynamicData : '',
      name : '',
      lists : [
        {name: 'ami ami'},
        {name: 'ami ami'},
        {name: 'ami ami'},
        {name: 'ami ami'},
        {name: 'ami ami'}
      ]
    }
  },

  methods : {
    submitData() {
      this.dynamicData = this.name;

    }
  },

  mounted(){
    fetch('/.netlify/functions/hello').then( resp => resp.json()).then(finalData => {
      this.dynamicData = finalData.msg;
    })
    // const data = {name:'ore baba', age:90}
    // fetch('/.netlify/functions/create_new', {
    //   body: JSON.stringify(data),
    //   method: 'POST',
    // }).then( resp => {console.log("eta resp ", resp);})
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  padding: 50px; box-sizing: border-box; background: #6161f3; color: white;
}
.form{
  margin: 30px 0;
}
.input{
  width: 400px;
  padding: 5px 10px;
  border: 1px solid #333;
  outline: none;
}
.submit{
  padding: 5px 30px;
  border: 1px solid #333;
  border-left: none;
  outline: none;
}
.submit:hover{
  background: #6161f3; color: white;
}
h3 {
  margin: 40px 0 0;
}
.lists {
  list-style-type: none;
  padding: 0;
  width: 500px;
}
.lists li {
  background: #f0f0f0;
  margin: 10px;
  padding: 10px;
}
a {
  color: #42b983;
}
</style>
