<template functional>
  <div class="skillbar">
    <div
      :class="[
        'bar-section',
        'start',
        { blue: props.level > 0 },
        { circle: props.level === 0 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: props.level > 1 },
        { circle: props.level === 1 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: props.level > 2 },
        { circle: props.level === 2 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: props.level > 3 },
        { circle: props.level === 3 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: props.level > 4 },
        { circle: props.level === 4 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: props.level > 5 },
        { circle: props.level === 5 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: props.level > 6 },
        { circle: props.level === 6 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: props.level > 7 },
        { circle: props.level === 7 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        { blue: props.level > 8 },
        { circle: props.level === 8 },
      ]"
    />
    <div
      :class="[
        'bar-section',
        'end',
        { blue: props.level > 9 },
        { circle: props.level === 9 },
      ]"
    />
  </div>
</template>

<script>
export default {
  name: "Skillbar",
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style scoped>
.skillbar {
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 100%;
  justify-items: center;
  align-items: center;
  position: relative;
}

.bar-section {
  background-color: #e3e3e3;
  width: 100%;
  height: 6px;
}

.blue {
  background-color: var(--secondary-brand-colour);
}

.circle::after {
  content: "";
  width: 25px;
  height: 25px;
  border-radius: 15px;
  position: absolute;
  background-color: var(--secondary-brand-colour);
  top: 12px;
}

.start {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}

.end {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
</style>
