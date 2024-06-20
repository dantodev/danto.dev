<template>
  <div class="layout">
    <div class="background">
      <div class="background__circle background__circle-magenta"></div>
      <div class="background__circle background__circle-purple"></div>
      <div class="background__circle background__circle-blue"></div>
    </div>
    <slot />
  </div>
</template>

<style lang="postcss">
:root {
  --color-magenta: #d60270;
  --color-purple: #9b4f96;
  --color-blue: #0038a8;
  --color-bg: #222222;
  --color-text: #ffffff;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: var(--color-bg);
}

.background {
  position: relative;
  grid-area: 1 / 1 / 4 / 4;
  overflow: hidden;
  z-index: 0;
}

.background__circle {
  --circle-color: var(--color-magenta);

  position: absolute;
  height: 100vh;
  width: 100vw;
  opacity: 0.5;
  background-image: radial-gradient(50% 50%, var(--circle-color), transparent);
  background-repeat: no-repeat;
  animation: circle 16s linear infinite;
  transform: scale(1.75);
}

.background__circle-magenta {
  --circle-color: var(--color-magenta);
  animation-delay: -12s;
}
.background__circle-purple {
  --circle-color: var(--color-purple);
  animation-delay: -6s;
}
.background__circle-blue {
  --circle-color: var(--color-blue);
  animation-delay: 0s;
}

@keyframes circle {
  0% {
    transform: scale(1.75) translate(-15%, -15%);
    opacity: 0.5;
  }
  30% {
    transform: scale(1.5) translate(15%, -15%);
  }
  50% {
    transform: scale(1.75) translate(15%, 15%);
    opacity: 0.25;
  }
  85% {
    transform: scale(1.25) translate(-15%, 15%);
  }
  100% {
    transform: scale(1.75) translate(-15%, -15%);
    opacity: 0.5;
  }
}

.layout {
  display: grid;
  grid-template-columns: 1fr minmax(min-content, max-content) 1fr;
  grid-template-rows: 1fr max-content 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
  color: var(--color-text);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
  font-size: 1rem;
  line-height: 1.6;
}

a {
  color: var(--color-text);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>

<script setup>
useHead({
  title: "danto.dev 🚀",
  meta: []
});
</script>
