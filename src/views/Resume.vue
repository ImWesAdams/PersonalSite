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
     <div class="header">
       <h1 class = "h1-header">Oh yeah, I've got the skills!</h1>
       <div class="resume-links">
         <div class="resume-link">
           <a href="https://google.com" target="_blank">
             <button class = "link-button">
               <!-- <label class = "link"> -->
                 LinkedIn
               <!-- </label> -->
             </button>
           </a>
         </div>
         <div class="resume-link">
           <!-- A static, internal asset like a resume needs to be in the "public" folder to be referenced with href -->
             <a href="resume.pdf" target="_blank">
               <button class = "link-button">
                 <!-- <label class = "link"> -->
                   Resume
                 <!-- </label> -->
               </button>
           </a>
         </div>
         <div class="resume-link">
           <!-- A static, internal asset like a resume needs to be in the "public" folder to be referenced with href -->
             <a href="github-link-goes-here" target="_blank">
                <button class = "link-button">
                  <!-- <label class = "link"> -->
                  GitHub
                  <!-- </label> -->
                </button>
             </a>
         </div>
       </div>
     </div>
     <div class="skills">
      <div class="programming-skills">
        <h1 class = "skill-header1">Programming and Software Skills</h1>
        <h2 class = "skill-header2">I know more than just the standard data software stack.</h2>
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
        <div class="skill-item">
          <img alt="VueJS Logo" class="skill-logo-photo" src="../assets/logo.png">
          <h2 class = "skill-description">I have substantial experience with front-end development in VueJS, HTML, and CSS. In fact, I created this website myself with those tools!
            Even though my job responsibilities never explicitly listed front-end development, I have found that knowing how web development works has helped me
              to process website structures and people's interactions with websites and to contribute knowledgably to site engagement and monitoring projects.
          </h2>
        </div>
        <div class="skill-item">
          <img alt="JS Logo" class="skill-logo-photo" src="../assets/600px-JavaScript-logo.png">
          <h2 class = "skill-description">I have experience leveraging JavaScript to create data-processing scripts in cloud systems (like Snowflake) and locally (in NodeJS).
            Similar to my work with front-end development, my job responsibilities have never explicitly listed back-end development, but I have found that knowing how systems development works
              has helped me to decipher and analyze deployed systems and to perform more advanced processing of data in multiple stack environments.
          </h2>
        </div>
        <h2 class="other-skills-header">and more...</h2>
        <div class="other-skills" id="other-skills1"
                      @scroll="onScroll($event)" @mousedown="pauseScroll($event), pauseScrollTag=true" @mouseup="resumeScroll($event), pauseScrollTag=false">
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
      <div class="soft-skills">
        <h1 class="skill-header1">Soft Skills</h1>
        <h2 class = "skill-header2">I believe that being the best requires skills beyond the keyboard and mouse.</h2>
        <div class="skill-item">
          <img alt="Leadership" class="skill-logo-photo" src="../assets/teamlead.png">
          <h2 class = "skill-description">I have worked as both a team lead and as an individual contributor for various projects in data and optimization, using Agile, Kanban, and other methdologies (and home-brewed versions of them).
            Having these experiences helps me to more effectively contribute to, guide, and craft the work and outcomes of initiatives.
          </h2>
        </div>
        <div class="skill-item">
          <img alt="Communication" class="skill-logo-photo" src="../assets/communication.jpg">
          <h2 class = "skill-description">I am an adroit communicator, both digitally and verbally.
            I feel that I learn more and make better impressions when I listen and recruit input more than I talk.
            When I talk, I work to make things understandable, and I excel at explaining complicated topics to people with minimal familiarity.
          </h2>
        </div>
        <div class="skill-item">
          <img alt="Diligence" class="skill-logo-photo" src="../assets/document.png">
          <h2 class = "skill-description">I am a diligent and efficient worker. Work is a fulfilling and satisfying part of my life - I often get lost in a state of "flow" in my work, and I especially
            enjoy the opportunities to hone current skills and develop new ones on the job. I take pride in meeting deadlines and exceeding expectations.
          </h2>
        </div>
        <div class="skill-item">
          <img alt="Learning" class="skill-logo-photo" src="../assets/learning.jpg">
          <h2 class = "skill-description">I am a highly curious person with a passion for learning. I spend a lot of time in self-study, in online classes, and behind books.
            I am almost always learning and refining new skills. If I don't actively have a new challenge to overcome or new knowledge to obtain, I feel bored and unfulfilled. I am a passionate believer
            in relentless self-improvement.
          </h2>
        </div>
      </div>
     </div>
   </div>
 </template>

<script>

// import handleClick from '@/main.js';
export default {
  methods: {
      scrollRight(selectedItem) {
        this.directionScroll = 'left';
        // console.log(this.directionScroll);
      this.timerRight = setInterval(() => {
           selectedItem.target.scrollLeft -= 1;
      }, 5)
    },
    scrollLeft(selectedItem) {
      this.directionScroll = 'right';
      // console.log(this.directionScroll);
      this.timerLeft = setInterval(() => {
           selectedItem.target.scrollLeft += 1;
      }, 5)
    },
    pauseScroll(selectedItem) {
      clearInterval(this.timerRight);
      clearInterval(this.timerLeft);
      this.timerRight=0;
      this.timerLeft=0;
      void(selectedItem);
      // console.log('scrolling paused');
      // console.log(selectedItem.target.scrollLeft);
    },
    resumeScroll(selectedItem) {
      // console.log(this.directionScroll);
      // console.log('resume scroll activated');
      if (this.directionScroll == 'right') {
        this.scrollLeft(selectedItem);
        console.log('scrolling right from resume');
      }
      else {
        this.scrollRight(selectedItem);
      }
    },
    onScroll(selectedItem) {
      if(this.pauseScrollTag) {
        clearInterval(this.timerLeft);
        clearInterval(this.timerRight);
        if (selectedItem.target.scrollLeft + selectedItem.target.clientWidth >= selectedItem.target.scrollWidth) {
            this.directionScroll='left';
          }
          if (selectedItem.target.scrollLeft <=0) {
              this.directionScroll='right';
            }
        return
        }


      if (selectedItem.target.scrollLeft + selectedItem.target.clientWidth >= selectedItem.target.scrollWidth) {
        clearInterval(this.timerLeft);
        // console.log('reached right end scroll');
        this.scrollRight(selectedItem);
      }

      if (selectedItem.target.scrollLeft <= 0) {
        clearInterval(this.timerRight);
        // console.log('reached left end scroll');
        this.scrollLeft(selectedItem);
      }
    // var scrollCheck = 1;
    // var position = 0;
   //  if (this.pauseScroll) {
   //    position = selectedItem.target.scrollLeft;
   //    scrollCheck = 0;
   //    console.log(position);
   //    clearInterval(this.timerLeft);
   //    this.timerLeft = 0;
   //    clearInterval(this.timerRight);
   //    this.timerRight = 0;
   //    selectedItem.target.scrollLeft = position;
   //    // this.scrollLeft(selectedItem);
   //    // clearInterval()
   //  }
   //   if (selectedItem.target.scrollLeft + selectedItem.target.clientWidth >= selectedItem.target.scrollWidth) {
   //     selectedItem.target.scrollLeft = selectedItem.target.scrollWidth-selectedItem.target.clientWidth;
   //     this.scrollRight(selectedItem);
   //     clearInterval(this.timerLeft);
   //     console.log('reached right end onScroll');
   // }
   // if (selectedItem.target.scrollLeft <= 0) {
   //   selectedItem.target.scrollLeft = 0;
   //   this.scrollLeft(selectedItem);
   //   clearInterval(this.timerRight);
   //   console.log('reached left end onScroll');
   // }
   // if (!scrollCheck) {
   //   this.scrollLeft(selectedItem)
   //
   // }
}
},
  mounted: // ~~this only runs once at the start of the page load. downstream events are then handled by onScroll
   function scrollOnStart () { // ~~scroll right on startup
     // console.log('mounted scroll');
     let content2 =  document.getElementById('other-skills1');
  this.timerRight = setInterval(() => {
    // if (this.pauseScroll) {
    //   // console.log('pauseScroll is true');
    //   void(0);
    // }
    // else {
    // // if this.onScroll({ target: { scrollLeft, clientWidth, scrollWidth }}) < 1 {
      content2.scrollLeft += 1;
      // console.log(content2.scrollHeight);
      if (content2.scrollLeft+content2.clientWidth>=content2.scrollWidth) {
        // console.log('reached right end mounted');
        clearInterval(this.timerRight);
        return;
      }
    // }
  // }
}, 5)
},
  // function() { //~~ old scroll right on start - did not have right behavior when combined with css smooth scroll-behavior
  //   let content2 =  document.getElementById('other-skills1');
  //   content2.scrollTo(500,0);
  // },

data() {
  return {
    timer: null,
    pauseScrollTag: false,
    directionScroll: 'right',
  }
},

beforeUnmount() {
  clearInterval(this.timer)
}
};
</script>

<style scoped>

/* ~~ hide scroll bar to avoid the jittery manual scroll problem */
/* ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  } */

.all {
  margin-left: 10vw;
  margin-right: 10vw;
  text-align: center;
}

.header {
  padding-bottom: 2%;
}

.h1-header {
  /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */
  /* color: aqua; */
  font-size: 250%;
}

/* .resume-links { ~~ commenting out the formatting here so I can use in App.vue and reuse the format across the site

  display: inline-flex;

  vertical-align: middle;
  text-align: center;

}

.resume-link {
  padding: 0 20px;

}

  .link-button {
    color: #0000FF;
    background-color: rgb(240,240,240);

    border: 1px solid rgba(27, 31, 35, .15);
    border-radius: 7px;
    cursor: pointer;
    vertical-align: middle;

    font-size: 15px;
    padding: 5px 10px;

  }

  .link-button:hover {
    background-color: #4CAF50;
    color: white;
    transition: 0.15s linear all;
  } */

  .skill-header1 {
    padding-top: 0;
    text-align: left;
  }
  .skill-header2 {
    padding-top: 0;
    padding-bottom: 5px;
    text-align: left;
  }

.skill-item {
  display: flex;
  align-items: center;
  /* padding: 0 0 10px 10px; */
  /* margin: 0 10% 0 10%; */
}

/* @keyframes bannermove {
  0% {
      transform: translate(25%, 0);
  }
  100% {
      transform: translate(-125%, 0%);
  }
} */

.other-skills {
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* pointer-events: none; */

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

.other-skills > figure {
      pointer-events: none;
      /* ~~ ^make it so that you can't interact with the photos so the scrolling feature is never lost */
}

.skill-description {
  /* float: middle; */
  /* display: flex; */
  /* margin: 10px 10px 15px 0px; */
  /* display: block; */
  padding-left: 15px;
  padding-right: 15px;
  /* display: inline-block; */
}
.skills, .skill-item, .skill-logo-photo {
  /* padding-top: 10px; */
  /* padding-bottom: 10px; */
}

/* figure {
    display: inline-block;
    border: 1px dotted gray;
    margin: 20px;
}
figure img {
    vertical-align: top;
}
figure figcaption {
    border: 1px dotted blue;
    text-align: center;
} */
/* .skill-item {
  margin-top: 10px;
} */
</style>
