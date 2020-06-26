<template functional>
  <div class="introduction">
    <div class="content">
      <div class="text-area">
        <div class="intro-body">
          <p>
            I have lots of experience with other technologies, like PHP, C#, C
            and C++, and Typescript, but I consider the ones above to be my core
            strengths.
          </p>
          <p>
            I’m also a certified Scrum Master and have some product management
            experience. I can do some design, like this site, and prototyping
            too.
          </p>
          <p>
            If you’d like to chat, here’s my email address, it’s an image to
            avoid bots grabbing it.
          </p>
          <img src="~/assets/M@rkLam.be.png" class="image" />
        </div>
      </div>
      <img src="~/assets/Sri Lanka.jpeg" class="image" />
    </div>
    <div class="background">
      <svg>
        <clipPath id="additionalInfoClipPath" clipPathUnits="objectBoundingBox">
          <path d="M0 0 L0.75 0.0 L1 0.55 L0.3 0.7 L0 1Z" />
        </clipPath>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdditionalInfo",
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
  align-items: flex-start;
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
  background-color: var(--main-brand-colour);
  z-index: 1;
  clip-path: url(#additionalInfoClipPath);
}
</style>
