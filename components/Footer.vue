<template functional>
  <div class="footer">
    <span class="message">Website designed and developed by Mark Lambe.</span>
  </div>
</template>

<script>
export default {
  name: "AdditionalInfo",
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
  width: 200px;
  padding: 0 var(--content-borders);
  text-align: right;
}
</style>
