<template>
  <div>
    <md-list>
    <span style="border-bottom: 1px solid #e0e0e0; text-align: left; padding-bottom:10px"><strong>OO그룹</strong></span>
        <md-list-item>
		<md-list>
		    <md-list-item>
		<md-avatar>
		    <img src="http://vuematerial.io/assets/avatar-2.jpg" alt="People">
		</md-avatar>

		<div class="md-list-text-container">
		    <span><strong>[완료]우리FIS</strong></span>
		    <span>가영근</span>
		    <span style="color: gray; font-size: 13px; border-bottom :1px #e0e0e0;">2017-09-18　　Member <strong style="color: black; font-size: 15px;">4</strong></span>
		</div>
	    </md-list-item>
		</md-list>

	    </md-list-item>
	    <md-list-item>
		<md-list>
		    <md-list-item>
		<md-avatar>
		    <img src="http://vuematerial.io/assets/avatar-2.jpg" alt="People">
		</md-avatar>

		<div class="md-list-text-container">
		    <span><strong>SK TANGO</strong></span>
		    <span>가영근</span>
		    <span style="color: gray; font-size: 13px; border-bottom :1px #e0e0e0;">2017-07-30　　Member <strong style="color: black; font-size: 15px;">3</strong></span>
		</div>
	    </md-list-item>
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