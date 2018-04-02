<template>
  <div>
	<md-table style="border: 1px solid #e0e0e0;">
	    <md-table-header>
		<md-table-row>
		    <md-table-head id='my-table-head'>����</md-table-head>
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
export default {
	props: {
      msg: "",
      notice: []
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
