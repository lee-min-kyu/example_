<template>
  <div>
    <md-tabs md-sync-route>
      <md-tab id="tab-ABOUT" md-label="ABOUT" to="/components/tabs/home">
        ABOUT Tab
      </md-tab>
      <md-tab id="tab-COMPANY" md-label="COMPANY" to="/components/tabs/pages">
        <main-page />
      </md-tab>
      <md-tab id="tab-PARTNER" md-label="PARTNER" to="/components/tabs/posts">
        PARTNER tab
      </md-tab>
      <md-tab id="tab-BUSINESS" md-label="BUSINESS" to="/components/tabs/favorites">
        BUSINESS tab
      </md-tab>
      <md-tab id="tab-COURSES" md-label="COURSES" to="/components/tabs/favorites">
        COURSES tab
      </md-tab>
      <md-tab id="tab-CONTACTS" md-label="CONTACTS" to="/components/tabs/favorites">
        CONTACTS tab
      </md-tab>
    </md-tabs>
  </div>
</template>

<script>
    export default {
        name: "header"
    }
</script>

<style scoped>

</style>
