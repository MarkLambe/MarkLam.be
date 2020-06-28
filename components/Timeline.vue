<template functional>
  <div class="timeline">
    <img class="timeline-image" src="~/assets/Timeline.jpg" />
  </div>
</template>

<script>
export default {
  name: "Timeline",
};
</script>
<style scoped>
.timeline {
  display: flex;
  justify-content: center;
}

.timeline-image {
  width: 80%;
  height: auto;
}
</style>
