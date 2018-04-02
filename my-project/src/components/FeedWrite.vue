<template>
  <div style="border: 1px solid #e0e0e0;">
<div style="width: 100%;">
    <md-tabs class="md-transparent">
	<md-tab md-label="새메세지">
	    <md-list class="custom-list">
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    <label> 무엇을 하시나요?</label>
		    <md-input></md-input>
		    <md-menu md-direction="bottom left" md-size="4">
			<md-button class="md-icon-button" md-menu-trigger>
			    <img src="../assets/images/plus_file_off.png">
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
		    <label> 팔로워/그룹 선택</label>
		    <md-input></md-input>
		    <md-checkbox id="my-test1" name="my-test1" v-model="checkbox"></md-checkbox>전체회사
		</md-input-container>
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    <label> 태그 추가</label>
		    <md-input></md-input>
		</md-input-container>
	    </md-list>

	</md-tab>

	<md-tab md-label="할일등록">
	    <md-list class="custom-list">
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    <label> 나의 할일을 등록하세요</label>
		    <md-input></md-input>
		    <md-menu md-direction="bottom left" md-size="4">
			<md-button class="md-icon-button" md-menu-trigger>
			    <img src="../assets/images/plus_file_off.png">
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
		    <label> 팔로워/그룹 선택</label>
		    <md-input></md-input>
		    <md-checkbox id="my-test1" name="my-test1" v-model="checkbox"></md-checkbox>전체회사
		</md-input-container>
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    <label> 태그 추가</label>
		    <md-input></md-input>
		</md-input-container>
	    </md-list>
	</md-tab>

	<md-tab md-label="설문등록">
	    <md-list class="custom-list">
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    <label> 설문 내용 입력</label>
		    <md-input></md-input>
		    <md-menu md-direction="bottom left" md-size="4">
			<md-button class="md-icon-button" md-menu-trigger>
			    <img src="../assets/images/plus_file_off.png">
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
		<span>
									<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
									1 <label>　항목 입력</label>
									<md-input></md-input>
									</md-input-container>
								</span>
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    2 <label>　항목 입력</label>
		    <md-input></md-input>
		</md-input-container>
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    3 <label>　항목 입력</label>
		    <md-input></md-input>
		</md-input-container>
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    <label> 팔로워/그룹 선택</label>
		    <md-input></md-input>
		    <md-checkbox id="my-test1" name="my-test1" v-model="checkbox"></md-checkbox>전체회사
		</md-input-container>
		<md-input-container md-inline style="border: 1px solid #e0e0e0; background-color: #fff; min-height: 0px; margin: 0px 0 0px;">
		    <label> 태그 추가</label>
		    <md-input></md-input>
		</md-input-container>
	    </md-list>
	</md-tab>
    </md-tabs>
</div>
</div>
</template>

<script>
export default {

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