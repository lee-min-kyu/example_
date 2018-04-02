<template>
  <div id="app">
	<md-table style="border: 1px solid #e0e0e0;">
    <md-table-header>
	<md-table-row>
	    <md-table-head id='my-table-head'>파일</md-table-head>
	    <md-table-head id='my-table-head'>등록자</md-table-head>
	    <md-table-head id='my-table-head'>등록일</md-table-head>
	</md-table-row>
    </md-table-header>

    <md-table-body>
	    <md-table-row v-for="(row, index) in notice" :key="index">
		<md-table-cell v-for="(col, index) in row" v-if="index === 'content'" :key="index" :md-numeric='false'>
		    {{col}}
		</md-table-cell>
		<md-table-cell v-for="(col, index) in row" v-if="index !== 'content'" :key="index" :md-numeric='false' class=my-table-body>
		    {{col}}
		</md-table-cell>
	    </md-table-row>
	</md-table-body>
</md-table>
  </div>
</template>

<script>
var arr = []
    for (var i = 0; i < 15; i++) {

        var con = "내용" + i
        var auth = "작성자" + i
        var tempData = {
            content: con,
            author: auth,
            date: 2
        }

        arr.push(tempData)
    }
export default {
  name: 'mainPage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      message: 'Hello, Vue!',
      like: 0,
      notice: [],
      tagActive: false
    }
  },
  created: function() {
            var self = this
            self.notice = arr
            self.tagActive = false
        },
  methods: {
        addTag: function() {
            var self = this
            self.tagActive = true
            console.log(self.tagActive)
         }
    }
}
</script>
 
<style>
    /*
        $primary-color: #333;

        body {
            background-color: $primary-color;
            font-style: italic;
        }
*/

    .md-table {
        /* height: 100px; */
        color: #ff0000;
        border: 1px solid #e0e0e0;
    }



    /*
        .md-table-head-container {
            height: 10px;
        }
*/

    #my-table-head {
        text-align: center;
        font-weight: bold;
        /*
            color: #ff0000;
            color: #00ff00;
*/
        color: #aaaaaa;
        background-color: #eeeeee;
        width: inherit;
        border: 1px solid #ffffff;
        line-height: 5px;
        height: 5px;
        border: 1px solid #e0e0e0;
    }

    #my-cell-width {
        text-align: center;
        font-weight: bold;
        color: #aaaaaa;
        background-color: #eeeeee;
        border: 1px solid #ffffff;
        width: 80%;
    }

    .my-table-body {
        text-align: center;
        color: #aaaaaa;
        width: inherit;
        /* height: inherit; */
    }

    .md-table {
        margin: 20px;
    }

    .my-card {
        width: 100%;
        margin: 20px;
    }


    .my-button {
        padding-left: 0px;
        padding-right: -10px;
        margin-right: -20px;
    }

    .my-icon {
        margin-right: -5px;
        margin-left: 5px;
    }

    .my-div {
        border: 1px solid gray;
    }

    .my-card-actions {
        background-color: lightgray
    }

    .my-input-text {
        margin-left: 10px;
        text-decoration: none;
        !important background-color: transparent;
        border: 0 solid black;
    }
</style>