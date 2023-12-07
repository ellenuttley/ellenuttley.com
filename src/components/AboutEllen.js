import React from 'react';

const AboutEllen = () => (
    <div>
<div class="mygrid grid grid-cols-8">

{/* header  */}
    <div class="inline-grid col-span-8 grid-cols-2">
<div class="mybox text-3xl p-3">Ellen Uttley</div>
<div class="mybox text-3xl text-right p-3">Software Engineer</div>
</div>

{/* info */}
  <div class="mybox col-span-2 text-center bg-lightPurple text-lg font-medium">ellenuttley@gmail.com</div>
  <div class="mybox col-span-2 text-center bg-lightPurple text-lg font-medium">07815587455</div>
  <div class="mybox col-span-2 text-center bg-lightPurple text-lg font-medium">Barnsley, UK</div>
  <div class="mybox col-span-2 text-center bg-lightPurple text-lg font-medium">github.com/ellenuttley</div>

{/* personal statement */}
  <div class="mybox col-span-8">I am an enthusiastic junior software engineer, excited to get started in the real world.
My logical and original way of thinking means that I often come at problems in ways that no one else has considered, and my drive for perfection means that I will put in the hours needed to make those solutions a reality. 
This year I completed the CFGDegree Software Engineering bootcamp, elevating my skills in Python and SQL and honing those skills through projects. As one of the top performers, I was offered a place on the +Masters bootcamp for App Development, where I learnt how to make React Native mobile apps, and achieved the highest grade in my cohort of 97%. 
While my passion and talent lies primarily in backend development, I have an eye for UX and design, and an excellent ability to match front ends to those designs. I enjoy utilising my writing background to make my code dry and readable.</div>

{/* skills */}
  <div class="mybox col-span-6 bg-lightPurple text-lg font-medium">Technical Skills</div>
  <div class="mybox col-span-2 bg-lightPurple text-lg font-medium">Non-Technical Skills</div>

  <div class="mybox">Python<br/><i>Flask Django</i></div>
  <div class="mybox col-span-5">Solid foundation in OOP, working with APIs, file handling, recursion, lambda functions, complex data structures, hash tables, etc. Extensive experience with writing functions, and algorithm design.
Debugging and writing unit tests, using libraries such as PyTest and Mock
Experience using Flask and Django, and a wide variety of libraries inc. WTForm, Tkinter, Requests, and os
</div>

  <div class="mybox col-span-2 row-span-3 leading-tight">UX and Web Design -<br/>primarily using Figma and Canva<br/><br/>Team Management<br/><br/>Technical writing and editing<br/><br/>Knowledge of Agile Methodologies and the SDLC<br/><br/>
Extensive use of Access based systems and CRM software<br/>
</div>

  <div class="mybox">SQL<br/><i>MySQL Firebase</i></div>
  <div class="mybox col-span-5">Database design and creation, complex queries, joins, views, functions, etc
Experience with Firebase, SQLAlchemy (inc. ORM) and SQLite. Have written database models in both Python and JavaScript, and algorithms that performed general CRUD operations, and handled form functionality
</div>

  <div class="mybox">JavaScript<br/><i>React Native node.js</i></div>
  <div class="mybox col-span-5">Strong grasp of core principles, spread operators, arrow functions, etc. As well as more app-centric concepts such as components, navigation, redux and hooks. Used for app and web development, via React Native and node.js</div>
  
  <div class="mybox">Git</div>
  <div class="mybox col-span-5">Experience managing remote codebases via GitHub and Heroku, and for team collaboration - inc. branching, pull requests, and dealing with conflicts</div>

{/* qualifications (inline) */}
<div class="inline-grid grid-rows-3 col-span-2 row-span-2">
  <div class="mybox col-span-2 bg-lightPurple font-medium text-lg">Qualifications</div>
  <div class="mybox col-span-2 row-span-2">CFG Introduction to Data and SQL<br/>CFG Degree Software Engineering<br/>CFG +Masters App Development<br/>
</div>
  </div>

  <div class="mybox">Other</div>
  <div class="mybox col-span-5">HTML and CSS, Bootstrap, Excel, Linux, Tableau</div>
  
  {/* projects */}
  <div class="mybox col-span-8 bg-lightPurple text-lg font-medium">Projects</div>

  <div class="mybox col-span-2">BedtimeBard<br/><i>CFG Degree Final Project</i></div>
<div class="mybox col-span-6">An MVC webapp that utilised the OpenAI API to write bedtime stories for children, while integrating their bedtime routines in a to-do list style. Made using Flask, written primarily in Python, with a HTML and CSS frontend, and database functionality using SQLAlchemy</div>

<div class="mybox col-span-2">PetItDone<br/><i>CFG Masters Final Project</i></div>
<div class="mybox col-span-6">A combined digipet and to-do list mobile app designed to encourage neurodivergent people to get their tasks done. Made using React Native and Expo, written almost exclusively in JavaScript in node.js, with database and other functionality handled via Firebase</div>

<div class="mybox col-span-8">During both projects I acted as SCRUM master for my respective teams; planning out the project, assigning tasks and tracking progress via KANBAN boards, as well as managing the codebase via GitHub and reviewing my teammates code before it was merged via pull requests. I also designed the UX and database of both apps, and wrote the documentation. </div>

<div class="mybox col-span-8 bg-lightPurple font-medium text-lg">Work History</div>
{/* work history (inline>*/}
<div class="inline-grid grid-rows-3 grid-cols-10 col-span-8 row-span-3">

<div class="mybox col-span-3">Anglian Home Improvements<br/>Remote Sales Advisor</div>
<div class="mybox col-span-2"><i>Feb. 2022 - Nov. 2022</i></div>

<div class="mybox col-span-3 row-span-2">Capita Outsourcing, O2<br/>Customer Experience Advisor<br/>Escalations Manager</div>
<div class="mybox col-span-2 row-span-2"><i>Sep. 2011 - Jul. 2013</i></div>

<div class="mybox col-span-3">Freelancer<br/>Various Roles</div>
<div class="mybox col-span-2"><i>Aug. 2017 - Dec 2021</i></div>

<div class="mybox col-span-3">Webhelp, Vodafone<br/>Sales Advisor<br/>Senior Sales Advisor
</div>
<div class="mybox col-span-2"><i>Jul. 2013 - Dec 2015</i></div>

<div class="mybox col-span-3">Morrison’s Supermarket<br/>Bakery Assistant<br/>Checkout Operative
</div>
<div class="mybox col-span-2"><i>Jun. 2007 - Sep. 2011</i></div>
</div>

<div class="mybox col-span-8 font-normal"><i>References available upon request</i></div>

</div>
    </div>
);

export default AboutEllen;