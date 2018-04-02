<template>
    <md-layout md-gutter>
        <md-tabs class="md-transparent">
            <md-tab id="movies" md-label="Social Network">
                <md-layout md-gutter>
                    <md-layout md-flex="15">
                        <md-list class="md-dense">
                            <div>
                                <md-button class="md-icon-button md-raised md-dense" disabled>
                                    <md-icon>home</md-icon>
                                </md-button>
                                <md-button class="md-icon-button md-raised md-dense" disabled>
                                    <md-icon>star_rate</md-icon>
                                </md-button>
                                <md-button class="md-icon-button md-raised md-dense" disabled>
                                    <md-icon>settings</md-icon>
                                </md-button>
                            </div>
                            <br />
                            <md-list-item>
                                <strong>나의 그룹</strong>
                                <md-list-expand>
                                    <md-list>
                                        <md-list-item>[직원]연차신청</md-list-item>
                                        <md-list-item>[직원]도서 및 사무용품 등</md-list-item>
                                        <md-list-item>[완료]우리FIS</md-list-item>
                                    </md-list>
                                </md-list-expand>
                            </md-list-item>

                            <md-list-item>
                                <md-list>
                                    <strong>최근 활동</strong>
                                    <div>
                                        박종훈 사원 님이 박종훈 님의 글(할일)에 팔로우하였습니다.<br /> 약 1시간 전<br /><br />
                                    </div>
                                    <div>
                                        박종훈 사원 님이 박종훈 님의 글(할일)에 팔로우하였습니다.<br /> 약 2시간 전<br /><br />
                                    </div>
                                    <div>
                                        박종훈 사원 님이 박종훈 님의 글(할일)에 팔로우하였습니다.<br /> 약 5시간 전<br /><br />
                                    </div>
                                </md-list>
                            </md-list-item>

                            <md-list-item>
                                <strong>할 일(TO-DO)</strong>
                            </md-list-item>

                            <md-list-item>
                                <strong>해시태그</strong>
                            </md-list-item>
                        </md-list>
                    </md-layout>
                    <md-layout md-column md-gutter md-flex="70">로즈 시스템즈<br /> 박종훈 사원1 <br />
						<test-compo
							:msg="msg"
						/>

                        <!-- form 1 -->
                        <md-layout>
                            <md-card class='my-card'>
                                <md-card-area>
                                    <md-card-actions class='my-card-actions'>
                                        <md-layout md-row md-gutter="10">
                                            <md-layout md-flex='15'>
                                                <md-icon class='my-icon'>edit</md-icon>
                                                <md-button class='my-button'>새메시지</md-button>
                                            </md-layout>
                                            <md-layout md-flex='15'>
                                                <md-icon class='my-icon'>delete</md-icon>
                                                <md-button class='my-button'>할일등록</md-button>
                                            </md-layout>
                                            <md-layout md-flex='15'>
                                                <md-icon class='my-icon'>assessment</md-icon>
                                                <md-button class='my-button'>설문등록</md-button>
                                            </md-layout>
                                        </md-layout>

                                    </md-card-actions>
                                </md-card-area>

                                <md-layout md-column>

                                    <md-layout md-row md-gutter="10">
                                        <md-layout md-flex='90'>
                                            <md-card-content>
                                                <md-input-container>
                                                    <md-textarea class='my-input-text' cols='150' rows='1' placeholder="무엇을 하시나요?">
                                                    </md-textarea>
                                                </md-input-container>
                                            </md-card-content>
                                        </md-layout>
                                        <md-layout md-flex='10' md-align="end">
                                            <md-card-actions>
                                                <md-button class='md-icon-button'>
                                                    <md-icon>attachment</md-icon>
                                                </md-button>
                                            </md-card-actions>
                                        </md-layout>
                                    </md-layout>

                                    <md-card-area>
                                        <md-layout md-row md-gutter>
                                            <md-layout>
                                                <md-card-content>
                                                    <md-input-container>
                                                        <md-input class='my-input-text' size='35' placeholder="팔로워/그룹추가"></md-input>
                                                    </md-input-container>

                                                    <md-input-container v-if='tagActive'>
                                                        <md-input class='my-input-text' size='35' placeholder="태그 추가"></md-input>
                                                    </md-input-container>

                                                </md-card-content>
                                            </md-layout>
                                            <md-layout md-align="end">
                                                <md-card-actions>
                                                    <md-checkbox id="my-test1" name="my-test1">전체회사</md-checkbox>
                                                </md-card-actions>
                                            </md-layout>
                                        </md-layout>

                                    </md-card-area>
                                </md-layout>


                                <md-card-actions class='my-card-actions'>
                                    <md-layout md-gutter="16">
                                        <md-layout md-flex="50">
                                            <md-button class='md-icon-button' v-on:click.native="addTag">
                                                <md-icon>notifications</md-icon>
                                            </md-button>
                                        </md-layout>
                                    </md-layout>

                                    <md-layout md-align="end" md-gutter="16">
                                        <md-layout md-flex="25">
                                            <md-button class="md-raised md-dense">글등록</md-button>
                                        </md-layout>
                                    </md-layout>

                                </md-card-actions>

                            </md-card>
                        </md-layout>


                        <md-layout>

                            <md-table>
                                <md-table-header>
                                    <md-table-row>
                                        <md-table-head id='my-cell-width'>알림내용</md-table-head>
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

                        </md-layout>



                    </md-layout>

                    <md-layout md-flex="15">
                        <md-list class="md-dense">
                            <md-list-item>
                                <strong>Outlook주소록</strong>
                            </md-list-item>
                            <md-list-item>
                                <md-list>
                                    <strong>추천그룹</strong>
                                    <md-list-item>
                                        <div>
                                            [완료]우리FIS<br /> 가영근
                                            <br /> 2017-09-18 Member 4<br /><br />
                                        </div>
                                    </md-list-item>
                                    <md-list-item>
                                        <div>
                                            [완료]우리FIS<br /> 가영근
                                            <br /> 2017-09-18 Member 4<br /><br />
                                        </div>
                                    </md-list-item>
                                </md-list>
                            </md-list-item>

                            <md-list-item>
                                <strong>신규그룹</strong>
                            </md-list-item>
                        </md-list>
                    </md-layout>
                </md-layout>

            </md-tab>
        </md-tabs>
    </md-layout>
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


.md-table {
        /* height: 100px; */
        color: #ff0000;
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
