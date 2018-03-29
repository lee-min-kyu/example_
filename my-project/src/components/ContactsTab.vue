<template>
  <div class="body2">
    <div class="main">
      <!-- content -->
      <section id="content">
        <div class="box1">
          <div class="wrapper">
            <article class="col1">
              <div class="pad_left1">
                <!--               <h2>Contact Form</h2> -->
                <!--               <form id="ContactForm" action="#"> -->
                <!--                 <div> -->
                <!--                   <div  class="wrapper"> <strong>Name:</strong> -->
                <!--                     <div class="bg"> -->
                <!--                       <input type="text" class="input" > -->
                <!--                     </div> -->
                <!--                   </div> -->
                <!--                   <div  class="wrapper"> <strong>Email:</strong> -->
                <!--                     <div class="bg"> -->
                <!--                       <input type="text" class="input" > -->
                <!--                     </div> -->
                <!--                   </div> -->
                <!--                   <div  class="textarea_box"> <strong>Message:</strong> -->
                <!--                     <div class="bg"> -->
                <!--                       <textarea name="textarea" cols="1" rows="1"></textarea> -->
                <!--                     </div> -->
                <!--                   </div> -->
                <!--                   <a href="#" class="button"><span><span>Send</span></span></a> <a href="#" class="button"><span><span>Clear</span></span></a> </div> -->
                <!--               </form> -->
                <!--             </div> -->

                <!--  -->
                <h2><cufon class="cufon cufon-canvas" alt="Contact" style="width: 137px; height: 32px;"><canvas width="153" height="39" style="width: 153px; height: 39px; top: -6px; left: -1px;"></canvas><cufontext>Contact</cufontext></cufon></h2>
                <p>
                  <strong> 자앤과 상의하십시오! </strong> <br>시간만 낭비하는 교육으로 실망 하셨습니까?
                  <br>정작 필요한 질문에 답변을 못 받으셨습니까? <br>새로운 솔루션 진입에 맨땅에 해딩하고
                  있기엔 시간이 부족하십니까? <br>자앤과 상의 하십시요. 분명한 해법을 제시해 드립니다.

                </p>
                <h2><cufon class="cufon cufon-canvas" alt="Infomation" style="width: 181px; height: 32px;"><canvas width="194" height="39" style="width: 194px; height: 39px; top: -6px; left: -1px;"></canvas><cufontext>Infomation</cufontext></cufon></h2>
                <ul id="infomation">
                  <li><span class="icon2 ceo">대표</span> 박정님</li>
                  <li><span class="icon2 phone">Tel</span><span>02.588.8929</span></li>
                  <li><span class="icon2 fax">Fax</span><span>02.2252.8920</span></li>
                  <li><span class="icon2 email">E-mail</span><span>diana@androidjava.com</span></li>
                  <li><span class="icon2 address">Address</span><span>서울시
											서초구 방배동 리더스빌 104호</span></li>
                </ul>
                <h2><cufon class="cufon cufon-canvas" alt="오시는 " style="width: 9px; height: 32px;"><canvas width="34" height="39" style="width: 34px; height: 39px; top: -6px; left: -1px;"></canvas><cufontext>오시는 </cufontext></cufon></h2>
                <img src="http://www.androidjava.com/images/map.png">
              </div>
              <!--  -->
            </article>
            <article class="col2 pad_left2">
              <div class="pad_left1">
                <h2><cufon class="cufon cufon-canvas" alt="Miscellaneous " style="width: 237px; height: 32px;"><canvas width="263" height="39" style="width: 263px; height: 39px; top: -6px; left: -1px;"></canvas><cufontext>Miscellaneous </cufontext></cufon><span><cufon class="cufon cufon-canvas" alt="Info" style="width: 66px; height: 32px;"><canvas width="78" height="39" style="width: 78px; height: 39px; top: -6px; left: -1px;"></canvas><cufontext>Info</cufontext></cufon></span></h2>
                <p>
                  We provide IT technology education service for enterprise environment.
                  If you want to have IT education related JAVA technology included android framework,
                  Please contact below email:
                  diana@androidjava.com
                </p>
              </div>
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
