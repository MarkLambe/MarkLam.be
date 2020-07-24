<template functional>
  <div class="header">
    <img
      class="header-image"
      src="~/assets/Header.png"
      alt="A blurry effect that sits behind the page title"
    />
    <div class="text-area">
      <h1 class="main-text">Mark Lambe</h1>
      <h2 class="sub-text">Software Developer</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
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
  width: 100%;
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
  margin: 0;
}
.sub-text {
  font-size: var(--h3-font-size);
  color: var(--light-text-color);
  margin: 0;
}

@media only screen and (max-width: 1200px) {
  .text-area {
    top: 10px;
  }
}

@media only screen and (max-width: 600px) {
  .text-area {
    flex-direction: row;
    justify-content: space-around;
  }
}
</style>
