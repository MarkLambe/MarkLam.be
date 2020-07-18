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
          <img
            src="~/assets/M@rkLam.be.png"
            class="email-image"
            alt="An image of my email address, which is 'M at-symbol rkLam dot be"
          />
        </div>
      </div>
      <div class="image-area">
        <img
          v-lazy="
            'https://marklambe-site-content.s3-eu-west-1.amazonaws.com/Sri+Lanka.jpeg'
          "
          class="main-image"
          alt="A photo of me on a train in Sri Lanka"
        />
        <img
          v-lazy="
            'https://marklambe-site-content.s3-eu-west-1.amazonaws.com/Sri_Lanka_Label.png'
          "
          class="image-label"
          alt="An illustrated description of the photo, which says 'Hanging out in Sri Lanka"
        />
      </div>
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
  data: () => {
    return {
      sri_lanka_image_url: "",
      sri_lanka_label_image: ""
    };
  }
};
</script>
<style scoped>
.introduction {
  position: relative;
  display: grid;
  padding: 0 var(--content-borders);
  height: 1000px;
}

.content {
  padding-top: 150px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 2;
}

.image-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
}
.main-image {
  width: 100%;
  max-width: 800px;
  height: auto;
  border-radius: 25px;
}

.image-label {
  width: 250px;
  height: auto;
  z-index: 5;
}

.email-image {
  width: 200px;
  height: auto;
}

.text-area {
  width: 50%;
}

.intro-header {
  font-size: var(--h2-font-size);
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

@media only screen and (max-width: 1200px) {
  .introduction {
    height: 1500px;
  }
  .content {
    flex-direction: column;
  }
  .image-area {
    width: 80%;
  }

  .image-label {
    width: 300px;
    height: auto;
  }

  .text-area {
    width: 100%;
    padding-bottom: 40px;
  }
}
</style>
