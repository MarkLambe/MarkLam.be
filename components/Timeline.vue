<template>
  <div class="timeline">
    <img class="timeline-image vertical" src="~/assets/Timeline.jpg" />
    <img class="timeline-image horizontal" src="~/assets/Timeline_Mobile.jpg" />
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

@media only screen and (max-width: 1001px) {
  .vertical {
    display: none;
  }
}
@media only screen and (min-width: 1000px) {
  .horizontal {
    display: none;
  }
}
</style>
