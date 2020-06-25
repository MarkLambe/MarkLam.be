<template functional>
  <div class="introduction">
    <div class="content">
      <img src="~/assets/Budapest.jpeg" class="image" />
      <div class="text-area">
        <div class="intro-header">¡Hola! I’m Mark!</div>
        <div class="intro-body">
          <p>
            I’ve been writing code for fourteen years, primarily for the web,
            and I’ve become pretty good at it.
          </p>
          <p>
            I’ve worked with big companies, small companies, and individuals to
            create great web-apps and sites.
          </p>
          <p>
            I’m a nerd when it comes to software-development processes and I
            believe good team organisation leads to great software.
          </p>
          <p>
            My contact details and skillset are described below, and my full CV
            is just a bit further down ☺️
          </p>
        </div>
      </div>
    </div>
    <div class="background">
      <svg>
        <clipPath id="introClipPath" clipPathUnits="objectBoundingBox">
          <path d="M0 0.8 L0.8 0.8 L1 1 L1 0 L0.6 0.2 L0 0.2Z" />
        </clipPath>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Introduction",
};
</script>
<style scoped>
.introduction {
  position: relative;
  display: grid;
  padding: 50px var(--content-borders) 300px var(--content-borders);
}

.content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  z-index: 2;
}

.image {
  width: 35%;
  height: auto;
  border-radius: 25px;
}

.text-area {
  width: 35%;
}

.intro-header {
  font-size: var(--header-font-size);
  padding-bottom: 60px;
}

.intro-body {
}

.background {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--main-background-colour);
  z-index: 1;
  clip-path: url(#introClipPath);
}
</style>
