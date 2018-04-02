<template>
  <div>
    <header>
      <header-tag />
    </header>
  </div>
</template>


<style lang="scss" scoped>
  small {
    display: block;
  }
</style>

<script>
  import Header from "./Header";

  export default {
    components: {Header},
    name: 'RegularButtons'
  }
</script>
