<template>
  <div>
    <md-list>
        <md-list-item>
            <md-input-container>
                <label><strong style="color: black;">나의그룹</strong></label>
                <md-input />
            </md-input-container>
            <md-list-expand>
                <md-list>
                    <md-list-item>
                        <md-input-container>
                            <label>[직원]연차신청</label>
                            <md-input />
                        </md-input-container>
                    </md-list-item>
                    <md-list-item>
                        <md-input-container>
                            <label>[직원]도서 및 사무용품 등</label>
                            <md-input />
                        </md-input-container>
                    </md-list-item>
                    <md-list-item>
                        <md-input-container>
                            <label>[완료]우리FIS</label>
                            <md-input />
                        </md-input-container>
                    </md-list-item>
                </md-list>
            </md-list-expand>
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