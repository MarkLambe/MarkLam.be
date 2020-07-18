<template>
  <div class="cv">
    <div class="cv-description">
      Finally, here’s my CV, you can
      <a
        href="https://marklambe-site-content.s3-eu-west-1.amazonaws.com/Mark+Lambe+CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        >open and download it as a PDF</a
      >.
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCv",
};
</script>
<style scoped>
.cv {
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: var(--h3-font-size);
  margin: 100px 0;
}

.cv-description {
  padding: 0 var(--content-borders);
}

@media only screen and (max-width: 800px) {
  .cv {
    margin: 0;
  }
}
</style>
