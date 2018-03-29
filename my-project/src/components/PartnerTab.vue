<template>
  <div class="body2">
    <div class="main">
      <!-- content -->
      <section id="content">
        <div class="box1">
          <div class="wrapper">
            <article class="col1">
              <div class="pad_left1">
                <h2 class="pad_bot1"><cufon class="cufon cufon-canvas" alt="Partners" style="width: 138px; height: 32px;"><canvas width="156" height="39" style="width: 156px; height: 39px; top: -6px; left: -1px;"></canvas><cufontext>Partners</cufontext></cufon></h2>
              </div>
              <div class="wrapper pad_bot2">
                <figure class="left marg_right1">
                  <img src="http://www.androidjava.com/media/lge_small.jpg" alt="" class="partner">
                </figure>
                <p class="pad_bot1 pad_top2">
                  <strong>LG전자</strong><br>HTML5,	Hybrid Web, Android(기본/고급/네트워크), Javascript
                </p>
              </div>

              <div class="wrapper pad_bot2">
                <figure class="left marg_right1">
                  <img src="http://www.androidjava.com/media/sec_small.png" alt="" class="partner">
                </figure>
                <p class="pad_bot1 pad_top2">
                  <strong>삼성전자</strong><br> Java,Hybrid Mobile Web,Android(기본/고급/네트워크), SQLite,Design Pattern,분석및설계</p>
                <!-- 								<a href="#" class="button marg_left1"><span><span>Read More</span></span></a> -->
              </div>

              <div class="wrapper pad_bot2">
                <figure class="left marg_right1">
                  <img src="http://www.androidjava.com/media/LGCNS.png" alt="" class="partner">
                </figure>
                <p class="pad_bot1 pad_top2">
                  <strong>LG CNS</strong><br> Java(intermediate, advanced), Android(basic, intermediate, advanced)</p>
                <!-- 								<a href="#" class="button marg_left1"><span><span>Read More</span></span></a> -->
              </div>

              <div class="wrapper pad_bot2">
                <span class="logo rapa left marg_right1"></span>
                <p class="pad_bot1 pad_top2">
                  <strong>RAPA</strong><br>HTML5, Hybrid Web,Android, SmartTV
                </p>
              </div>
              <div class="wrapper pad_bot2">
                <span class="logo sds left marg_right1"></span>
                <p class="pad_bot1 pad_top2">
                  <strong>삼성 SDS</strong><br>HTML5,
                  Hybrid Web, Android(기본/고급/네트워크), Javascript
                </p>
              </div>
              <div class="wrapper pad_bot2">
                <span class="logo mds left marg_right1"></span>
                <p class="pad_bot1 pad_top2">
                  <strong>MDS</strong><br>MDS Academy, HTML5,
                  Hybrid Web, Android(기본/고급/네트워크), Javascript
                </p>
              </div>

            </article>
            <article class="col2 pad_left2">
              <div class="pad_left1">
                <h2><cufon class="cufon cufon-canvas" alt="References" style="width: 166px; height: 32px;"><canvas width="184" height="39" style="width: 184px; height: 39px; top: -6px; left: -1px;"></canvas><cufontext>References</cufontext></cufon></h2>
              </div>
              <ul class="list1">
                <li><a href="http://docs.oracle.com/javase/tutorial/index.html">Java</a></li>
                <li><a href="http://developer.android.com">Android</a></li>
                <li><a href="http://www.w3.org/TR/2012/CR-html5-20121217/">HTML5</a></li>
                <li><a href="http://developer.tizen.org/">Tizen</a></li>
                <li><a href="http://www.uml.org">UML</a></li>
              </ul>
              <!-- 							<div class="pad_left1"> -->
              <!-- 								<h2>Testimonials</h2> -->
              <!-- 								<p class="quot"> -->
              <!-- 									<span><strong><a href="#">William Horner</a></strong></span> <span -->
              <!-- 										class="color1">Managing Director</span> <span -->
              <!-- 										class="color2 pad_bot1">Company Name</span> Nam libero -->
              <!-- 									tempore, cum soluta nobis esteligendi optio cumque nihil -->
              <!-- 									impedit quo minusid quod maxime placeat facere possimus, omnis -->
              <!-- 									voluptas assumenda estmnis dolor repellendus. -->
              <!-- 								</p> -->
              <!-- 							</div> -->
              <!-- 							<a href="#" class="button marg_top1"><span><span>&nbsp;&nbsp; -->
              <!-- 										View All &nbsp;&nbsp;</span></span></a> -->
            </article>
          </div>
        </div>


      </section>
      <!-- content -->
      <!-- footer -->
      <footer-tag />
      <!-- / footer -->
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
  },
  created: function () {
    Cufon.now();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .body2 {
    font: 14px Tahoma, Geneva, sans-serif
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
    margin: 0 10px;
  }
  a {
    color: #ffffff;
  }
</style>
