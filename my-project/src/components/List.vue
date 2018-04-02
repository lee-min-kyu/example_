<template>
<div id="app2">
  <ul>
	<li v-for="item in model">{{item.name}}</li>
  </ul>
</div>
</template>
<script>
export default {
  props: {
      model: Object,
    },
}
</script>
