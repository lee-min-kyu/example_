<template>
  <div>
    <ul class="nav nav-pills " id="pills-tab" role="tablist">
      <li class="nav-item">
        <a class="nav-link active" id="pills-about-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">ABOUT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-company-tab" data-toggle="pill" href="#pills-company" role="tab" aria-controls="pills-profile" aria-selected="false">COMPANY</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-partner-tab" data-toggle="pill" href="#pills-partner" role="tab" aria-controls="pills-contact" aria-selected="false">PARTNER</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-business-tab" data-toggle="pill" href="#pills-business" role="tab" aria-controls="pills-contact" aria-selected="false">BUSINESS</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-courses-tab" data-toggle="pill" href="#pills-courses" role="tab" aria-controls="pills-contact" aria-selected="false">COURSES</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="pills-contacts-tab" data-toggle="pill" href="#pills-contacts" role="tab" aria-controls="pills-contact" aria-selected="false">CONTACTS</a>
      </li>
    </ul>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="pills-about" role="tabpanel" aria-labelledby="pills-about-tab">about</div>
      <div class="tab-pane fade" id="pills-company" role="tabpanel" aria-labelledby="pills-company-tab">company</div>
      <div class="tab-pane fade" id="pills-partner" role="tabpanel" aria-labelledby="pills-partner-tab">partner</div>
      <div class="tab-pane fade" id="pills-business" role="tabpanel" aria-labelledby="pills-business-tab">business</div>
      <div class="tab-pane fade" id="pills-courses" role="tabpanel" aria-labelledby="pills-courses-tab">courses</div>
      <div class="tab-pane fade" id="pills-contacts" role="tabpanel" aria-labelledby="pills-contacts-tab">contacts</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.nav-pills{
  horiz-align: center;
}
</style>
