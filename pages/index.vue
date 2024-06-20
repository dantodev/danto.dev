<template>
  <div class="page-index">
    <h1 class="page-index_title">Daniel Kahl</h1>
    <p class="page-index_description">Developer from Dresden, Germany • working at Verint Systems</p>
    <div class="page-index__links">
      <a href="https://github.com/dantodev" target="_blank" title="Github">Github</a>
      <span>&nbsp;•&nbsp;</span>
      <a href="https://twitter.com/dantodev" target="_blank" title="Twitter">Twitter</a>
      <span>&nbsp;•&nbsp;</span>
      <a href="https://www.xing.com/profile/Daniel_Kahl8" target="_blank" title="Xing">Xing</a>
      <span>&nbsp;•&nbsp;</span>
      <a href="https://www.linkedin.com/in/dantodev/" target="_blank" title="LinkedIn">LinkedIn</a>
    </div>
  </div>
</template>

<style>
.page-index {
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 1;
}

.page-index_title {
  font-size: 2rem;
  margin: 0 0 1rem;
}

.page-index_description {
  font-size: 1rem;
  margin: 0 0 1rem;
}
</style>
