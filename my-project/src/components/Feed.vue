<template>
  <div style="border: 1px solid #e0e0e0; padding-bottom: 10px;">
	<md-list class="custom-list md-triple-line">
	    <md-list-item>
		<md-avatar>
		    <img src="http://vuematerial.io/assets/avatar-2.jpg" alt="People">
		</md-avatar>

		<div class="md-list-text-container">
		    <span>OOO 사원 <span style="color: gray; font-size: 5px;" > 로즈시스템즈 > 사업부
		    </span>
		    <span style="float: right;">
		    <a href="#"><img src="../assets/images/icon_favorit_off.png"></a>
		    <a href="#"><img src="../assets/images/icon_no_lock.png"></a>
		    </span>
		    </span>
		    <span style="color: gray; font-size: 5px; border-bottom :1px #e0e0e0;">약 1시간전 </span>
		</div>
	    </md-list-item>

	    <div style="text-align: left;">
		<span style="padding-left: 20px;color:#ee5533;text-align: left;"><strong>진행중 : YYYY-MM-DD</strong></span>
	    </div>
	    
	    <div style="text-align: left;">
	    <span style="padding-left: 20px;text-align: left;"><img src="../assets/images/icon_vote.png" alt=""><strong>설문 내용</strong></span>
		    <div style="padding-left: 50px; padding-top: 10px; text-align: left;">
			    <md-radio v-model="radio1" id="my-test1" name="my-test-group1" md-value="1">항목 1</md-radio><br />
			    <md-radio v-model="radio1" id="my-test2" name="my-test-group1" md-value="2">항목 2</md-radio><br />
			    <md-radio v-model="radio1" id="my-test3" name="my-test-group1" md-value="3">항목 3</md-radio><br />
			    <md-button class="md-raised md-warn">Vote</md-button><br /><br />
			    <label>총 X 건 <a href="#" style="color: blue">결과보기</a></label>
		    </div>
	    </div>

	    <div style="text-align: left;">
		<span style="padding-left: 20px">테스트 메세지</span>
		<md-list class="custom-list md-triple-line">
		    <span style="padding-left: 20px;padding-top: 10px;">
			    <a href="#" style="color: #a0a0a0;"><img src="../assets/images/btn_like.png"> 좋아요 0</a>
			    <a href="#" style="padding-left: 20px; color: #a0a0a0;"><img src="../assets/images/btn_reply.png"> 댓글 0</a>
			    <a href="#" style="padding-left: 20px; color: #a0a0a0;"><img src="../assets/images/btn_sympathy.png"> 공유 0</a>
			    <md-menu md-align-trigger>
			    <md-button style="color: #a0a0a0;" md-menu-trigger><img src="../assets/images/btn_more.png"></md-button>
		 <md-menu-content>
		    <span><a href="#"><img src="../assets/images/btn_selectmore1.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">팔로우</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore1.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">언팔로우</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore7.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">즐겨찾기</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore7.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">즐겨찾기해제</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore3.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">지식등록</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore3.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">지식해제</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore2.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">그룹만들기</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore4.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">완료</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore4.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">미완료</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore5.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">날짜변경</a></span>
		    <span style="padding-top: 5px;"><a href="#"><img src="../assets/images/btn_selectmore6.png" alt="" style="padding-left: 20px;"></a> <a href="#" style="color: #a0a0a0;">삭제</a></span>
		    </md-menu-content>
		    </md-menu>
		    </span>
		</md-list>
	    </div>
	</md-list>
	<div style="text-align: left; border: 1px solid #e0e0e0; background-color: #f0f0f0;">
	    <md-button md-theme="indigo" class="md-primary" style="border: 1px solid gray;">
		<img src="../assets/images/icon_tag.png" style="text-align: left;"> TAG
	    </md-button>
	</div>
	<div style="border: 1px solid #e0e0e0; background-color: gray;">
	    <md-list class="custom-list" style="padding-left:100px; padding-right:20px; background-color: #f0f0f0;">
		<label style="text-align: left; color: #a0a0a0;">OOO 님이 OOO 님에게 회신 중<a href="#"><img src="../assets/images/btn_delete.png" alt="" style="padding-left: 20px;"></a></label>
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    <label> 댓글을 입력하세요</label>
		    <md-input></md-input>
		    <md-menu md-direction="bottom left" md-size="4">
			<md-button class="md-icon-button" md-menu-trigger>
			    <img src="../assets/images/plus_file_off.png" style="padding-right: 10px;">
			</md-button>

			<md-menu-content>
			    <md-menu-item>
				<img src="../assets/images/btn_snssave.png">
				<span>내 PC에서 선택</span>
			    </md-menu-item>

			    <md-menu-item>
				<img src="../assets/images/btn_share.png">
				<span>쉐어포인트에서 선택</span>
			    </md-menu-item>
			</md-menu-content>
		    </md-menu>
		    <!-- 	    			<a href="#"><img src="../assets/images/plus_file_off.png" style="padding-right: 10px;"></a> -->
		</md-input-container>
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    <label> 다른사람한테 알림.</label>
		    <md-input></md-input>
		</md-input-container>
		<span style="text-align: right; margin-top: 10px"><a><img src="../assets/images/btn_write.png"></a></span>
	    </md-list>
	</div>
    </div>
</template>

<script>
    export default {

        data() {
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