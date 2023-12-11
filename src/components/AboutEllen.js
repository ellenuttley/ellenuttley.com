import React from 'react';

const AboutEllen = () => (
  <div>
  <div class="mygrid grid-cols-8">

{/* header  */}
  <div class="inline-grid col-span-8 grid-cols-2">
  <div class="gridbox order-1 mb-2 pt-1 text-lg lg:text-3xl border-0 font-normal">Ellen Uttley</div>
  <div class="gridbox order-1 mb-2 pt-1 text-lg lg:text-3xl text-right border-0 font-normal">Software Engineer</div></div>

{/* info */}
  <div class="gridbox order-2 m-0.5 border-t-1 col-span-4 lg:col-span-2 text-center bg-lightPurple text-md lg:text-lg font-light lg:border-r-0 lg:border-b-0">ellenuttley@gmail.com</div>
  <div class="gridbox order-2 m-0.5 border-t-1 col-span-4 lg:col-span-2 text-center bg-lightPurple text-md lg:text-lg font-light lg:border-r-0 lg:border-b-0">07815587455</div>
  <div class="gridbox order-3 m-0.5 border-t-1 lg:order-2 col-span-4 lg:col-span-2 text-center bg-lightPurple text-md lg:text-lg font-light lg:border-r-0 lg:border-b-0">Barnsley, UK</div>
  <div class="gridbox order-3 m-0.5 border-t-1 lg:order-2 col-span-4 lg:col-span-2 text-center bg-lightPurple text-md lg:text-lg font-light lg:border-b-0">github.com/ellenuttley</div>

{/* personal statement */}
  <div class="gridbox order-4 lg:order-3 col-span-8 lg:border-b-0 p-4 ">I am an enthusiastic junior software engineer, excited to get started in the real world.
My logical and original way of thinking means that I often come at problems in ways that no one else has considered, and my drive for perfection means that I will put in the hours needed to make those solutions a reality. 
This year I completed the CFGDegree Software Engineering bootcamp, elevating my skills in Python and SQL and honing those skills through projects. As one of the top performers, I was offered a place on the +Masters bootcamp for App Development, where I learnt how to make React Native mobile apps, and achieved the highest grade in my cohort of 97%. 
While my passion and talent lies primarily in backend development, I have an eye for UX and design, and an excellent ability to match front ends to those designs. I enjoy utilising my writing background to make my code dry and readable.</div>

{/* skills */}
  <div class="gridbox order-5 lg:order-4 col-span-8 lg:col-span-6 bg-lightPurple text-lg font-normal lg:border-b-0 lg:border-r-0">Technical Skills</div>
  <div class="gridbox order-11 lg:order-4 col-span-8 lg:col-span-2 bg-lightPurple text-lg font-normal lg:border-b-0">Non-Technical Skills</div>

{/* python */}
  <div class="gridbox order-6 lg:order-5 col-span-2 lg:col-span-1 lg:border-b-0"><p class="font-light">Python</p><i>Flask Django</i></div>
  <div class="gridbox order-6 lg:order-5 lg:col-span-5 col-span-6 lg:border-b-0 lg:border-r-0 lg:border-l-0">Solid foundation in OOP, working with APIs, file handling, recursion, lambda functions, complex data structures, hash tables, etc. Extensive experience with writing functions, and algorithm design. Debugging and writing unit tests, using libraries such as PyTest and Mock. Experience using Flask and Django, and a wide variety of libraries inc. WTForm, Tkinter, Requests, and os</div>

{/* non-technical skills :  */}
  <div class="gridbox order-12 lg:order-5 col-span-8 lg:col-span-2 row-span-3 leading-tight lg:border-b-0 pt-4">UX and Web Design -<br/><p class="font-thin">primarily using Figma and Canva</p><br/>Team Management<br/><br/>Technical writing and editing<br/><br/>Knowledge of Agile Methodologies and the SDLC<br/><br/>Extensive use of Access based systems and CRM software<br/></div>

{/* sql */}
  <div class="gridbox order-7 lg:order-6 col-span-2 lg:col-span-1 lg:border-b-0"><p class="font-light">SQL</p><i>MySQL Firebase</i></div>
  <div class="gridbox order-7 lg:order-6 col-span-6 lg:col-span-5 lg:border-r-0 lg:border-l-0 lg:border-b-0">Database design and creation, complex queries, joins, views, functions, etc. Experience with Firebase, SQLAlchemy (inc. ORM) and SQLite. Have written database models in both Python and JavaScript, and algorithms that performed general CRUD operations, and handled form functionality</div>

{/* javascript */}
  <div class="gridbox order-8 lg:order-7 col-span-2 lg:col-span-1 lg:border-b-0"><p class="font-light">JavaScript</p><i>React Native node.js</i></div>
  <div class="gridbox order-8 lg:order-7 col-span-6 lg:col-span-5 lg:border-r-0 lg:border-l-0 lg:border-b-0">Strong grasp of core principles, spread operators, arrow functions, etc. As well as more app-centric concepts such as components, navigation, redux and hooks. Used for app and web development, via React Native and node.js</div>
  
{/* git */}
  <div class="gridbox order-9 lg:order-8 col-span-2 lg:col-span-1 lg:border-b-0 font-light">Git</div>
  <div class="gridbox order-9 lg:order-8 col-span-6 lg:col-span-5 lg:border-r-0 lg:border-l-0 lg:border-b-0">Experience managing remote codebases via GitHub and Heroku, and for team collaboration - inc. branching, pull requests, and dealing with conflicts</div>

{/* qualifications (inline) */}
  <div class="inline-grid order-12 col-span-8 lg:order-8 lg:grid-rows-3 lg:col-span-2 lg:row-span-2">
  <div class="gridbox col-span-2 bg-lightPurple font-normal text-lg lg:border-b-0">Qualifications</div>
  <div class="gridbox col-span-2 row-span-2 lg:border-b-0">CFG Introduction to Data and SQL<br/>CFG Degree Software Engineering<br/>CFG +Masters App Development<br/></div></div>

{/* ...technical skills. other */}
  <div class="gridbox order-10 lg:order-9 col-span-2 lg:col-span-1 lg:border-b-0 font-light">Other</div>
  <div class="gridbox order-10 lg:order-9 col-span-6 lg:col-span-5 lg:border-r-0 lg:border-l-0 lg:border-b-0">HTML and CSS, Bootstrap, Excel, Linux, Tableau</div>
  
{/* projects */}
  <div class="gridbox order-12 lg:order-10 col-span-8 bg-lightPurple text-lg font-normal lg:border-b-0">Projects</div>

  <div class="gridbox order-12 col-span-8 lg:col-span-2 lg:border-b-0"><p class="font-light">BedtimeBard</p><i>CFG Degree Final Project</i></div>
  <div class="gridbox order-12 col-span-8 border-t-0 lg:border-t lg:col-span-6 lg:border-b-0 lg:border-l-0">An MVC webapp that utilised the OpenAI API to write bedtime stories for children, while integrating their bedtime routines in a to-do list style. Made using Flask, written primarily in Python, with a HTML and CSS frontend, and database functionality using SQLAlchemy</div>

  <div class="gridbox order-12 col-span-8 lg:col-span-2 border-b-0"><p class="font-light">PetItDone</p><i>CFG Masters Final Project</i></div>
  <div class="gridbox order-12 col-span-8 border-t-0 lg:border-t lg:col-span-6 lg:border-b-0 lg:border-l-0">A combined digipet and to-do list mobile app designed to encourage neurodivergent people to get their tasks done. Made using React Native and Expo, written almost exclusively in JavaScript in node.js, with database and other functionality handled via Firebase</div>

  <div class="gridbox order-12 col-span-8 lg:border-b-0">During both projects I acted as SCRUM master for my respective teams; planning out the project, assigning tasks and tracking progress via KANBAN boards, as well as managing the codebase via GitHub and reviewing my teammates code before it was merged via pull requests. I also designed the UX and database of both apps, and wrote the documentation. </div>

{/* work history (inline>*/}
  <div class="gridbox order-12 col-span-8 bg-lightPurple font-normal text-lg lg:border-b-0">Work History</div>

  <div class="inline-grid order-12 col-span-8 grid-cols-5 lg:grid-rows-3 lg:grid-cols-10">

  <div class="gridbox col-span-3 lg:border-b-0"><p class="font-light">Anglian Home Improvements</p>Remote Sales Advisor</div>
  <div class="gridbox col-span-2 lg:border-b-0 lg:border-l-0 text-xs lg:text-base"><i>Feb. 2022 - Nov. 2022</i></div>

  <div class="gridbox col-span-3 row-span-2 lg:border-b-0 lg:border-l-0"><p class="font-light">Capita Outsourcing, O2</p>Customer Experience Advisor<br/>Escalations Manager</div>
  <div class="gridbox col-span-2 row-span-2 lg:border-b-0 lg:border-l-0 text-xs lg:text-base"><i>Sep. 2011 - Jul. 2013</i></div>

  <div class="gridbox col-span-3 lg:border-b-0"><p class="font-light">Freelancer</p>Various Roles</div>
  <div class="gridbox col-span-2 lg:border-b-0 lg:border-l-0 text-xs lg:text-base"><i>Aug. 2017 - Dec 2021</i></div>

  <div class="gridbox col-span-3 lg:border-b-0"><p class="font-light">Webhelp, Vodafone</p>Sales Advisor<br/>Senior Sales Advisor</div>
  <div class="gridbox col-span-2 lg:border-b-0 lg:border-l-0 text-xs lg:text-base"><i>Jul. 2013 - Dec 2015</i></div>

  <div class="gridbox col-span-3 lg:border-b-0 lg:border-l-0"><p class="font-light">Morrison’s Supermarket</p>Bakery Assistant<br/>Checkout Operative</div>
  <div class="gridbox col-span-2 lg:border-b-0 lg:border-l-0 text-xs lg:text-base"><i>Jun. 2007 - Sep. 2011</i></div></div>

  <div class="gridbox order-last col-span-8 font-light text-base"><i>References available upon request</i></div>

</div><p><br/></p></div>

);

export default AboutEllen;