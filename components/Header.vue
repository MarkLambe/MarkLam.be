<template>
  <div>
    Header
    <div v-if="$device.isDesktop">
      Desktop
    </div>
    <div v-else-if="$device.isTablet">
      Tablet
    </div>
    <div v-else>
      Mobile
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped></style>
