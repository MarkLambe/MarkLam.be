<template functional>
  <div class="footer">
    <div class="message">
      <div>Website designed and developed</div>
      <div>by Mark Lambe.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdditionalInfo"
};
</script>
<style scoped>
.footer {
  width: 100vw;
  height: 100px;
  background-color: var(--main-brand-colour);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.message {
  width: 600px;
  padding: 0 var(--content-borders);
  text-align: right;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
}

@media only screen and (max-width: 800px) {
  .message {
    flex-direction: column;
  }
}
</style>
