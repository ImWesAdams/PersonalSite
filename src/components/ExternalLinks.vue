<template>
  <div class="resume-links">
    <div class="resume-link">
      <a href="https://www.linkedin.com/in/jameswesadams/" target="_blank">
        <button class = "link-button">
            <img alt="LinkedIn" class="linkedIn-button" src="../assets/linkedin-logo.png">
        </button>
      </a>
    </div>
    <div class="resume-link">
      <!-- A static, internal asset like a resume needs to be in the "public" folder to be referenced with href -->
        <a href="https://github.com/ImWesAdams" target="_blank">
           <button class = "link-button">
             <img alt="GitHub" class="github-button" src="../assets/github-logo.png">
           </button>
        </a>
    </div>
  </div>
</template>

<style scoped>
img {
  display: inline;
  align-items: center;
  margin: 0 auto;
  height: 100%;
  width: auto;
  /* padding-bottom: 1000px; */
}

.resume-link {
  /* padding: 10%; */
  padding: 0 3px;
}

  .link-button {
    color: #0000FF;
    /* font-weight: bold; */
    /* background-color: rgb(240,240,240); */
    background-color: inherit;

    /* box-shadow: rgba(27, 31, 35, .1) 2px 2px 0; */
    /* border: 1px solid rgba(27, 31, 35, .15); */
    border: none;
    border-radius: 7px;
    cursor: pointer;
    vertical-align: middle;

    font-size: 15px;
    padding: 5px;
    height: 40px;
    width: 40px;

  }

  .link-button:hover {
    background-color: #4CAF50;
    color: white;
    transition: 0.15s linear all;
    /* font-weight: bold; */
  }

</style>
