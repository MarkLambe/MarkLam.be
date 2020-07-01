<template>
  <div class="timeline">
    <img
      v-if="$device.isDesktop"
      class="timeline-image"
      src="~/assets/Timeline.jpg"
    />
    <img v-else class="timeline-image" src="~/assets/Timeline_Mobile.jpg" />
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
