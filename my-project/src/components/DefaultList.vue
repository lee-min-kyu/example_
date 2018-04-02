<template>
  <div>
    <md-list>
        <md-list-item>
		<md-list>
		    <span style="border-bottom: 1px solid #e0e0e0;"><strong>최근 활동</strong><a href="#"><img style="float: right;" src="../assets/images/btn_more.png"></a></span>
		    <span style="padding-top: 10px;"">
			박종훈 사원 님이 박종훈 님의 글(할일)에 팔로우하였습니다.<br /><span style="color: gray; font-size: 15px; "> 약 1시간 전</span><br /><br />
		    </span>
		    <span>
			박종훈 사원 님이 박종훈 님의 글(할일)에 팔로우하였습니다.<br /><span style="color: gray; font-size: 15px; "> 약 2시간 전</span><br /><br />
		    </span>
		    <span>
			박종훈 사원 님이 박종훈 님의 글(할일)에 팔로우하였습니다.<br /><span style="color: gray; font-size: 15px; "> 약 5시간 전</span><br /><br />
		    </span>
		</md-list>
	    </md-list-item>
    </md-list>
</div>
</template>

<script>
export default {
	props: {
      msg: "",
    },
  data () {
    return {
      //msg: 'Hello world!'
    }
  }
}
</script>

<style>
.example {
  color: red;
}
</style>