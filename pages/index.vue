<template>
  <div class="body">
    <div class="header">
      <Header />
    </div>
    <div class="timeline">
      <Timeline />
    </div>
    <div class="spacer">
      <Introduction />
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header";
import Timeline from "~/components/Timeline";
import Introduction from "~/components/Introduction";

export default {
  components: {
    Header,
    Timeline,
    Introduction,
  },
};
</script>

<style scoped>
.body {
  padding-bottom: 300px;
}

.header {
  padding-bottom: 25px;
}

.timeline {
  padding-bottom: 125px;
}
</style>
