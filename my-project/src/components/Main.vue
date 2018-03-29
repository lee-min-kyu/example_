<template>
  <div>
  <div class="body1">
    <div class="main">
      <!-- header -->
        <div class="wrapper">
          <nav>
            <ul id="icons">
              <li><a href="https://docs.google.com/forms/d/13aiW7y0vYi2t6JjLrNsGZhmMrPSIR2R0mSQwYya-hfs/viewform" target="_blank"><img src="static/images/survey.png" alt=""></a></li>
            </ul>
            <ul class="nav" id="menu">
              <li class="nav-item"><a class="nav-link active" id="pills-home-tab" data-toggle="pill" role="tab" aria-controls="pills-home" aria-selected="true" href="#about-tab" width="58" height="18" style="width: 58px; top: -1px; left: 0px;">About</a></li>
              <li class="nav-item"><a class="nav-link" id="company-tab1" data-toggle="pill" role="tab" aria-controls="company-tab" aria-selected="false" href="#company-tab" width="83" height="18" style="width: 83px;  top: -1px; left: 0px;">Company</a></li>
              <li class="nav-item"><a class="nav-link" id="partner-tab1" data-toggle="pill" role="tab" aria-controls="partner-tab" aria-selected="false" href="#partner-tab" width="74" height="18" style="width: 74px; top: -1px; left: 0px;">Partner</a></li>
              <li class="nav-item"><a class="nav-link" id="business-tab1" data-toggle="pill" role="tab" aria-controls="business-tab" aria-selected="false" href="#business-tab" width="77" height="18" style="width: 77px; top: -1px; left: 0px;">Business</a></li>
              <li class="nav-item"><a class="nav-link" id="courses-tab1" data-toggle="pill" role="tab" aria-controls="courses-tab" aria-selected="false" href="#courses-tab" width="75" height="18" style="width: 75px; top: -1px; left: 0px;">Courses</a></li>
              <li  class="nav-item"><a class="nav-link" id="contacts-tab1" data-toggle="pill" role="tab" aria-controls="contacts-tab" aria-selected="false" href="#contacts-tab" width="86" height="18" style="width: 86px;  top: -1px; left: 0px;">Contacts</a></li>
            </ul>
          </nav>
        </div>
        <div class="wrapper">
          <h1>
            <a href="index.html" id="logo">Learn Center</a>
          </h1>
        </div>
      <div id="slogan"><cufon class="cufon cufon-canvas" alt="We " style="width: 77px; height: 46px;"><canvas width="113" height="55" style="width: 113px; height: 55px; top: -4px; left: -1px;"></canvas>We </cufon><cufon class="cufon cufon-canvas" alt="Will " style="width: 83px; height: 46px;"><canvas width="119" height="55" style="width: 119px; height: 55px; top: -4px; left: -1px;"></canvas>Will </cufon><cufon class="cufon cufon-canvas" alt="Open " style="width: 120px; height: 46px;"><canvas width="156" height="55" style="width: 156px; height: 55px; top: -4px; left: -1px;"></canvas>Open </cufon><cufon class="cufon cufon-canvas" alt="The " style="width: 82px; height: 46px;"><canvas width="118" height="55" style="width: 118px; height: 55px; top: -4px; left: -1px;"></canvas>The </cufon><cufon class="cufon cufon-canvas" alt="World" style="width: 120px; height: 46px;"><canvas width="140" height="55" style="width: 140px; height: 55px; top: -4px; left: -1px;"></canvas>World</cufon><span><cufon class="cufon cufon-canvas" alt="of " style="width: 38px; height: 36px;"><canvas width="67" height="43" style="width: 67px; height: 43px; top: -3px; left: -1px;"></canvas>of </cufon><cufon class="cufon cufon-canvas" alt="knowledge " style="width: 174px; height: 36px;"><canvas width="203" height="43" style="width: 203px; height: 43px; top: -3px; left: -1px;"></canvas>knowledge </cufon><cufon class="cufon cufon-canvas" alt="for " style="width: 50px; height: 36px;"><canvas width="79" height="43" style="width: 79px; height: 43px; top: -3px; left: -1px;"></canvas>for </cufon><cufon class="cufon cufon-canvas" alt="you!" style="width: 66px; height: 36px;"><canvas width="92" height="43" style="width: 92px; height: 43px; top: -3px; left: -1px;"></canvas>you!</cufon></span></div>
      <!-- / header -->
    </div>
  </div>
    <div class="tab-content" id="pills-tabContent">
      <div class="tab-pane fade show active" id="about-tab" role="tabpanel" aria-labelledby="pills-about-tab">
        <about-tab-tag />
      </div>
      <div class="tab-pane fade" id="company-tab" role="tabpanel" aria-labelledby="pills-company-tab">
        <company-tab-tag />
      </div>
      <div class="tab-pane fade" id="partner-tab" role="tabpanel" aria-labelledby="pills-partner-tab">
        <partner-tab-tag />
      </div>
      <div class="tab-pane fade" id="business-tab" role="tabpanel" aria-labelledby="pills-business-tab">
        <business-tab-tag />
      </div>
      <div class="tab-pane fade" id="courses-tab" role="tabpanel" aria-labelledby="pills-courses-tab">
        <courses-tab-tag />
      </div>
      <div class="tab-pane fade" id="contacts-tab" role="tabpanel" aria-labelledby="pills-contacts-tab">
        <contacts-tab-tag />
      </div>
    </div>
  <div align="center">137-822 Korea, Seoul, Seocho-Gu,
    Bangbae-Dong,Leadaersvill 104 @jaen</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created: function () {
    Cufon.now();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body1{
    font: 12px Tahoma, Geneva, sans-serif;
    height: 376px;
  }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  font: 14px Tahoma, Geneva, sans-serif
}
a {
  color: #42b983;
}
  #icons {
    float:right;
    /* 	padding:20px 39px 0 0 */
    padding:10px 0px 0 0
  }
</style>
