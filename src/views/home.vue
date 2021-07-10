<template>
  <br/> <br/> <br/>
  <div class="card text-center mx-auto" style="width: 45rem">
    <div class="card-body">
      <h5 class="card-title"><strong>About me</strong></h5>
      <p class="card-text">Hi! This is my very first VUE3 and JavaScript project.<br/>
        I developed it with Vuex Router and some other Vue3 components. <br/>
        I still have a lot of things to learn, but I hope you will enjoy the result.<br/>
        During development I used several tutorials and documentations, all links bellow.<br/>
        Also visit my Github account to see my other projects!<br/>
      </p>
      <div class="link1">
        <a href="https://www.youtube.com/watch?v=K0_pkOPRu7E" class="btn btn-primary1" target="_blank">Visit Youtube</a> <br/>
      </div>
      <div class="link2">
        <a href="https://www.youtube.com/watch?v=ZqgiuPt5QZo" class="btn btn-primary1" target="_blank">Visit Youtube</a> <br/>
      </div>
      <div class="link3">
        <a href="https://www.youtube.com/watch?v=mLqCwMza0So" class="btn btn-primary1" target="_blank">Visit Youtube</a> <br/>
      </div>
      <div class="link4">
        <a href="https://v3.vuejs.org/" class="btn btn-primary2" target="_blank">Vue3 documentation</a>
      </div>
      <div class="link5">
        <a href="https://github.com/Jaff666?tab=repositories" class="btn btn-primary3" target="_blank">Visit GitHub</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {

};
</script>
<style>
.link1{
  padding: 5px;
}
.link2{
  padding: 5px;
}
.link3{
  padding: 5px;
}
.link4{
  padding: 5px;
}
.link5{
  padding: 5px;
}
.btn-primary1{
  padding: 5px 20px;
  margin: auto 0;
  border-radius: 25px;
  border: none;
  background-color: red;
  color: white;
  font-weight: bold;
}
.btn-primary2{
  padding: 5px 20px;
  margin: auto 0;
  border-radius: 25px;
  border: none;
  background-color: green;
  color: white;
  font-weight: bold;
}
.btn-primary3{
  padding: 5px 20px;
  margin: auto 0;
  border-radius: 25px;
  border: none;
  background-color: purple;
  color: white;
  font-weight: bold;
}
</style>