<!-- ~~ forum post https://stackoverflow.com/questions/67891742/how-to-infinitely-scroll-horizontal-text-with-javascript -->
<template>
  <div class="other-skills" id="other-skills1" @scroll="onScroll($event)" @mousedown="pauseScroll = true" @mouseup="pauseScroll = false">
    <div id="container">
      <figure>
        <img alt="Excel" class="other-skill-logo-photo" src="../assets/Microsoft_Office_Excel_(2019–present).svg.png">
        <figcaption>Excel</figcaption>
      </figure>
      <figure>
        <img alt="TensorFlow" class="other-skill-logo-photo" src="../assets/Tensorflow_logo.svg.png">
        <figcaption>TensorFlow</figcaption>
      </figure>
      <figure>
        <img alt="Scikit-learn" class="other-skill-logo-photo" src="../assets/1200px-Scikit_learn_logo_small.svg.png">
        <figcaption>Scikit-learn</figcaption>
      </figure>
      <figure>
        <img alt="Matplotlib" class="other-skill-logo-photo" src="../assets/Created_with_Matplotlib-logo.svg.png">
        <figcaption>Matplotlib</figcaption>
      </figure>
      <figure>
        <img alt="Looker" class="other-skill-logo-photo" src="../assets/looker_logo_meta_v0005.png">
        <figcaption>Looker</figcaption>
      </figure>
      <figure>
        <img alt="GitHub" class="other-skill-logo-photo" src="../assets/github-logo.png">
        <figcaption>GitHub</figcaption>
      </figure>
      <figure>
        <img alt="NodeJS" class="other-skill-logo-photo" src="../assets/1200px-Node.js_logo.svg.png">
        <figcaption>NodeJS</figcaption>
      </figure>
    <!-- </div>
    <div class="other-skills"> -->
      <figure>
        <img alt="Snowflake" class="other-skill-logo-photo" src="../assets/snowflake-logo.png">
        <figcaption>Snowflake</figcaption>
      </figure>
      <figure>
        <img alt="Data Build Tool (dbt)" class="other-skill-logo-photo" src="../assets/dbt-logo.png">
        <figcaption>dbt</figcaption>
      </figure>
      <figure>
        <img alt="R" class="other-skill-logo-photo" src="../assets/Rlogo.png">
        <figcaption>R</figcaption>
      </figure>
      <figure>
        <img alt="SAS" class="other-skill-logo-photo" src="../assets/sas-logo.png">
        <figcaption>SAS</figcaption>
      </figure>
      <figure>
        <img alt="Plotly" class="other-skill-logo-photo" src="../assets/plotly-logo.png">
        <figcaption>Plotly</figcaption>
      </figure>
      <figure>
        <img alt="Pandas" class="other-skill-logo-photo" src="../assets/pandas-logo.png">
        <figcaption>Pandas</figcaption>
      </figure>
      <figure>
        <img alt="AWS SageMaker" class="other-skill-logo-photo" src="../assets/SageMaker-logo.jpg">
        <figcaption>AWS SageMaker</figcaption>
      </figure>
      <figure>
        <img alt="Sisense" class="other-skill-logo-photo" src="../assets/Sisense-Logo.png">
        <figcaption>Sisense</figcaption>
      </figure>
      <figure>
        <img alt="Stitch ETL" class="other-skill-logo-photo" src="../assets/stitch-logo.png">
        <figcaption>Stitch ETL</figcaption>
      </figure>
    </div>
  </div>
</template>

<style>
.other-skills {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0;

  overflow-x: scroll;
  margin-left: -10vw;
  margin-right: -10vw;

}

/* .all::-webkit-scrollbar {
    display: none;
} */

/* @import url('https://fonts.googleapis.com/css?family=Open+Sans'); */

h2 {
  /* font-family: "Open Sans", sans-serif; */
  font-weight: normal;
}

h1 {
  /* font-family: BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif; */
}

.skill-header1 {
  text-decoration: underline;
  text-decoration-thickness: 3px;
  font-weight: ;
}

.skill-header2 {
  font-weight: bold;
  font-style: italic;
  margin-bottom: 0;
}

.skill-logo-photo {
    height: auto;
    width: auto;
    max-width: 128px;
    max-height: 128px;
    /* float: left; */
    /* vertical-align: middle; */
    /* display: flex; */
    /* display: flex; */
    /* align-items: center; */
    /* margin: 10px 10px 15px 150px; */
}
.other-skill-logo-photo {
    height: auto;
    width: auto;
    max-width: 128px;
    max-height: 128px;
    display: inline-block;
    /* float: left; */
    /* vertical-align: middle; */
    /* display: flex; */
    /* display: flex; */
    /* align-items: center; */
    /* margin: 10px 10px 15px 150px; */
}

.other-skills{
  overflow : scroll;
  width: 500px;
  display:inline-block;
  border: 1px solid red;
  height: 500px;
  white-space: nowrap;
}

#container{
  max-width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  animation: move 3s infinite linear;
}
@keyframes move {
  to {
    transform: translateX(-100vw);
  }
}
/* h1{
  font-size: 20px;
  margin:0;
  padding-left:0px;
  border: 1px solid blue;
  width:283px;
} */
</style>
