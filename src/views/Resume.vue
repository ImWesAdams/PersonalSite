<!-- Link to LinkedIn. Link to download Resume PDF. -->
<!-- What do you get with me?

Experienced and Crafty Python and SQL Developer:
Good at creating features with advanced data processing.
Getting good features for ML is often the toughest part - why not have someone who excels at this?

Lifelong learner:
Came from a data background but wanted to learn enough JavaScript, HTMl, and CSS to make my own website.
Avid reader of various non-fiction topics, especially socioeconomics and social psychology.
Learned to decipher functional languages like Haskell and Elm.
Pursuing masters in data science.

Dedicated and Business-Minded
High motor.
Company visionary.
Drives lower costs and higher revenues.
Reliably informs corporate and product strategy.

 -->
 <template>
   <div class="all">
     <div class="resume-links">
       <div class="linkedin-link">
         <a href="linkedin-link-goes-here" target="_blank">
           <label>LinkedIn</label>
         </a>
       </div>
       <div class="resume-link">
         <!-- A static, internal asset like a resume needs to be in the "public" folder to be referenced with href -->
           <a href="resume.pdf" target="_blank">
           <label>PDF of Resume</label>
         </a>
       </div>
     </div>
     <div class="skills">
      <div class="hard-skills">
        <h1>Hard Skills</h1>
        <div class="skill-item">
          <img alt="Python Logo" class="skill-logo-photo" src="../assets/1200px-Python-logo-notext.svg.png">
          <h2 class = "skill-description">I am experienced using Python to train and deploy Machine Learning models.
            I am skillful at using Python to process and analyze data.
            I have done substantial work in Python to automate and streamline business processes.
            I have created and worked with many common data tasks in this language, including deep learning, unsupervised machine learning,
              plotting and visualizing, web scraping, data preprocessing, and more.
          </h2>
        </div>
        <div class="skill-item">
          <img alt="SQL Logo" class="skill-logo-photo" src="../assets/Sql_data_base_with_logo.png">
          <h2 class = "skill-description">I have lots of experience with SQL and SQL-related tools.
            I have worked with SQL in MySQL databases, Snowflake, SAS, and more.
            I have leveraged SQL-tangent tools like Data Build Tool (dbt), stored procedures, JavaScript processing functions, and more to
              meet advanced data requirements.
            I have experience in several SQL-backed Report and Visualization platforms, including Looker, Sisense (formerly Periscope),
              Spotfire, and more.
          </h2>
        </div>
      </div>
      <div class="soft-skills">
        <h1>Soft Skills</h1>
      </div>
     </div>
   </div>
 </template>

<script>

</script>

<style scoped>
.resume-links {
  display: flex;
  justify-content: space-between;
  /* padding-left: 50px; */
  /* padding-right: 100px; */
  margin: 300px;
  margin-top: 0px;
  margin-bottom: 0px;
}

.skill-logo-photo {
    height: auto;
    width: auto;
    max-width: 128px;
    max-height: 128px;
    float: left;
    vertical-align: middle;
    /* display: flex; */
    align-items: center;
    /* margin: 10px 10px 15px 150px; */
}
.skill-description {
  float: middle;
  /* margin: 10px 10px 15px 0px; */
  /* display: block; */
  padding: 0px 150px 0px 150px;
  /* display: inline-block; */
}
.skills, .skill-item, .skill-logo-photo {
  padding-top: 10px;
  /* padding-bottom: 10px; */
}
/* .skill-item {
  margin-top: 10px;
} */
</style>
