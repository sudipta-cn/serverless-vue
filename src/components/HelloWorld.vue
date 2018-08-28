<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <h2>My First serverless with vue</h2>

    <h4>The dynamic data is : {{ dynamicData }}</h4>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      dynamicData : '',
    }
  },

  mounted(){
    fetch('/.netlify/functions/hello').then( resp => resp.json()).then(finalData => {
      this.dynamicData = finalData.msg;
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
