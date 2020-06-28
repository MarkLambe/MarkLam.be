<template functional>
  <div class="header">
    <img class="header-image" src="~/assets/Header.jpg" />
    <div class="text-area">
      <div class="main-text">Mark Lambe</div>
      <div class="sub-text">Software Developer</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
<style scoped>
.header {
  width: 100%;
  color: var(--main-text-color);
}
.header-image {
  width: 100%;
  height: auto;
}

.text-area {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.main-text {
  font-size: var(--h1-font-size);
}
.sub-text {
  font-size: var(--h3-font-size);
  color: var(--light-text-color);
}
</style>
