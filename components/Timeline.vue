<template>
  <div class="timeline">
    <img
      v-if="displayHorizontalImage"
      class="timeline-image"
      src="~/assets/Timeline.jpg"
    />
    <img
      v-if="displayVerticalImage"
      class="timeline-image"
      src="~/assets/Timeline_Mobile.jpg"
    />
  </div>
</template>

<script>
export default {
  name: "Timeline",
  computed: {
    displayHorizontalImage() {
      return process.client && window.innerWidth >= 1000;
    },
    displayVerticalImage() {
      return process.client && window.innerWidth < 1000;
    },
  },
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
