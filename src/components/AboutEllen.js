import React from 'react';

const AboutEllen = () => (
  <div>
  <div className="mygrid grid-cols-8">

{/* Header */}
  <div className="inline-grid col-span-8 grid-cols-2">
  <div className="gridbox-header">Ellen Uttley</div>
  <div className="gridbox-header text-right">Software Engineer</div></div>

{/* Info */}
  <div className="gridbox gridbox-info order-2 border-t-1 lg:border-r-0 ">
    ellenuttley@gmail.com
  </div>

  <div className="gridbox gridbox-info order-2 border-t-1 lg:border-r-0">07815587455</div>
  <div className="gridbox gridbox-info order-3 border-t-1 lg:order-2 lg:border-r-0">Barnsley, UK</div>
  <div className="gridbox gridbox-info order-3 border-t-1 lg:order-2">github.com/ellenuttley</div>

{/* Personal Statement */}
<div className="gridbox space-y-2 order-4 lg:order-3 col-span-8 lg:border-b-0 p-4 px-6 font-light leading-snug ">
<p>I am an enthusiastic junior software developer, in search of a company that fosters learning and professional development.</p> 
<p>My passion for full-stack development grows by the day, and I have found that I have an eye for UX/UI design, and love being able to look at a project through the lens of both a developer and a designer. I try to use this dual perspective to fuel creative innovation and problem solving, and I strive to create simple, but impactful designs that satisfy and simplify the user story.</p>
<p>I completed the CFGDegree Software Engineering bootcamp, elevating my skills in Python and SQL and honing those skills through projects. As one of the top performers, I was then offered a place on the +Masters bootcamp for App Development, where I learnt how to make React Native mobile apps, and achieved the highest grade in my cohort of 97%.</p>
<p>Since then, I have gone on to my current role as a Junior Software Developer, and have found that my background in sales and customer service has given me both the confidence to articulate my ideas, and the communication skills to effectively explain them to my team. My drive for self-directed learning, my design ability, and my knowledge of modern development practices, have led to a rapid expansion of my roles and responsibilities, and I have worked hard to rise to these new challenges.</p>
</div>

{/* Technical Skills */}
<div class="inline-grid grid-cols-4 col-span-8 order-6 lg:order-5 lg:col-span-4 row-span-6">

<div className="gridbox gridbox-title order-first col-span-8 lg:col-span-4 lg:border-b-0 lg:border-r-0">
  Technical Skills
</div>

{/* Python */}
  <div className="gridbox order-1 col-span-1 lg:border-b-0">
    <p className="font-normal text-right">Python</p></div>
  <div className="gridbox text-left order-1 lg:col-span-3 col-span-7 lg:border-b-0 lg:border-r-0 lg:border-l-0">
    Flask, Django, OOP, APIs, testing, file handling
  </div>

{/* SQL */}
  <div className="gridbox order-2 col-span-1 lg:row-span-2 lg:border-b-0">
    <p className="font-normal text-right">SQL</p>
  </div>
  
  <div className="gridbox text-left order-2 col-span-7 lg:col-span-3 lg:row-span-2 lg:border-r-0 lg:border-l-0 lg:border-b-0">
    Relational database design and management<br/>
    MySQL, PostgreSQL, SQLAlchemy, ORM
  </div>

{/* Javascript */}
  <div className="gridbox order-3 col-span-1 lg:border-b-0">
    <p className="font-normal text-right">JavaScript</p>
  </div>

  <div className="gridbox text-left order-3 col-span-7 lg:col-span-3 lg:border-r-0 lg:border-l-0 lg:border-b-0">
    React, React Native, node.js
  </div>
  
{/* Tailwind */}
  <div className="gridbox order-4 col-span-1 lg:border-b-0 font-light">
    <p className="font-normal text-right">Tailwind</p>
  </div>

  <div className="gridbox text-left pr-0 order-4 col-span-7 lg:col-span-3 lg:border-r-0 lg:border-l-0 lg:border-b-0">
    Dark mode, accessibility, responsive development
  </div>

{/* Other Technical Skills */}
  <div className="gridbox text-center order-5 col-span-8 lg:col-span-4 lg:border-r-0 lg:border-l-0 lg:border-b-0">
    Git, Linux / WSL, Ruby on Rails, PostCSS, web development
  </div>
</div>

{/* Non-Technical Skills */}
<div class="inline-grid grid-cols-4 col-span-8 row-span-6 order-6 lg:order-5 lg:col-span-4">

  <div className="gridbox gridbox-title order-1 col-span-8 row-span-1 lg:col-span-4 lg:border-b-0">
    Non-Technical Skills
  </div>

  <div className="gridbox order-2 col-span-8 lg:col-span-4 row-span-2 space-y-2 leading-tight lg:border-b-0 pt-3">
    <p className="flex justify-center lg:justify-normal">UX / UI and Web Design -<p className="font-thin whitespace-pre"> primarily using Figma and Canva</p></p>
    <p>Technical writing and editing</p>
    <p className="leading-tight">Knowledge of basic development principles, Agile methodologies, design patterns, and the SDLC</p>
  </div>

{/* Qualifications */}
    <div className="gridbox gridbox-title order-3 col-span-8 row-span-1 lg:col-span-4 lg:border-b-0">
      Qualifications
    </div>

    <div className="gridbox order-4 col-span-8 lg:col-span-4 row-span-2 space-y-2 leading-tight lg:border-b-0 pt-3">
      <p>CFG Introduction to Data and SQL</p>
      <p>CFGDegree Software Engineering</p>
      <p>CFG +Masters App Development</p>
    </div>

</div>
  
{/* Projects */}
<div class="inline-grid grid-cols-4 col-span-8 row-span-6 order-7 lg:order-6">

  <div className="gridbox gridbox-title order-1 col-span-8 lg:border-b-0">
    Projects
  </div>

  <div className="gridbox order-2 col-span-2  lg:border-b-0">
    <p className="font-light">BedtimeBard</p>
  </div>

  <div className="gridbox text-left col-span-2 order-2 border-t-0 lg:border-t lg:col-span-6 lg:border-b-0 lg:border-l-0">
    <i>CFG Degree Final Project</i>
  </div>

  <div className="gridbox order-3 col-span-8 lg:border-b-0">
    An MVC web app that utilised the OpenAI API to write bedtime stories for children, while integrating their bedtime routines in a to-do list style. Made using Flask, written primarily in Python, with database functionality using SQLAlchemy.
  </div>

  <div className="gridbox order-4 col-span-2 border-b-0">
    <p className="font-light">PetItDone</p>
  </div>

  <div className="gridbox text-left col-span-2 order-4 border-t-0 lg:border-t lg:col-span-6 lg:border-b-0 lg:border-l-0">
    <i>CFG Masters Final Project</i>
  </div>

  <div className="gridbox order-5 col-span-8 lg:border-b-0">
    A combined digipet and to-do list mobile app, designed for neurodivergent people. Made using React Native and Expo, written almost exclusively in JavaScript with node.js, with database and other functionality handled via Firebase.  
  </div>

  <div className="gridbox order-6 col-span-8 lg:border-b-0">
    During both projects I acted as SCRUM master for my respective teams; planning out the project, assigning tasks and tracking progress via KANBAN boards, as well as managing the codebase via GitHub and reviewing my teammates code before it was merged via pull requests. I also designed the UX and database of both apps, and wrote the documentation.
  </div>
</div>

{/* Relevant Work History */}
  <div className="gridbox order-8 lg:order-7 gridbox-title col-span-8 lg:border-b-0">
    Relevant Work History
  </div>

  <div className="gridbox flex justify-evenly pt-3 text-right order-9 lg:order-8 col-span-8 lg:col-span-2 lg:flex-col lg:justify-normal border-b-0">
    <p className="font-normal lg:text-xl">Merlinsoft</p>
    <p className="font-light">Junior Software Developer</p>
    <p className="font-light"><i>Jan. 2024 - Present</i></p>
  </div>

  <div className="gridbox py-3 space-y-2 order-9 lg:order-8 col-span-8 border-t-0 lg:border-t lg:col-span-6 lg:border-b-0 lg:border-l-0">
    <p>Used Tailwind, CSS, and HTML to enhance the existing frontend. Designed and developed multiple web app components from scratch, both for new features and as replacements for existing ones. Collaborated with fellow developers about solutions to technical problems. </p>
    <p>I am currently solely responsible for the development of a Ruby on Rails web app to replace the legacy software, which has involved; implementing a new and improved Git workflow, a full UX/UI design including research and wireframes, design and creation of a PostgreSQL database, configuring the asset pipeline via Sprockets and the Hotwire stack, and the development itself in HTML, Ruby, Tailwind, and some Javascript.</p>
  </div>

  <div className="gridbox flex justify-evenly pt-3 text-right order-10 lg:order-9 col-span-8 lg:col-span-2 lg:flex-col lg:justify-normal border-b-0">
    <p className="font-normal lg:text-xl">Freelance</p>
    <p className="font-light">Web Developer</p>
    <p className="font-light"><i>Jul. 2023 - Jan. 2024</i></p>
  </div>

  <div className="gridbox py-3 space-y-2 order-11 lg:order-10 col-span-8 border-t-0 lg:border-t lg:col-span-6 lg:border-b-0 lg:border-l-0">
    <p>Designed and built websites for multiple, diverse clients.</p>
    <p>I developed the websites with React, and then deployed them via Heroku. Also handled the domain hosting, SSL certificates, etc.</p>
  </div>

  {/* Other Work History */}

  <div class="inline-grid order-12 lg:order-11 col-span-8 row-span-6 grid-cols-10">

  <div className="gridbox gridbox-title order-first col-span-10 lg:border-b-0">
    Other Work History
  </div>


  <div className="gridbox order-1 col-span-3 lg:border-b-0">
    <p className="font-normal text-right text-nowrap">Anglian Home Improvements</p>
  </div>
  <div className="gridbox order-1 col-span-4 lg:col-span-5 lg:border-b-0 lg:border-l-0">
    <p className="text-left text-nowrap">Remote Sales Advisor</p>
  </div>
  <div className="gridbox col-span-3 order-1 lg:col-span-2 lg:border-b-0">
    <p className="font-light text-right lg:text-left text-nowrap"><i>Feb. 2022 - Nov. 2022</i></p>
  </div>

  <div className="gridbox order-2 col-span-3 lg:border-b-0">
    <p className="font-normal text-right text-nowrap">Freelancer</p>
  </div>
  <div className="gridbox order-2 lg:col-span-5 col-span-4 lg:border-b-0 lg:border-l-0">
    <p className="text-left text-nowrap">Various Roles</p>
  </div>
  <div className="gridbox col-span-3 order-2 lg:col-span-2 lg:border-b-0">
    <p className="font-light text-right lg:text-left text-nowrap"><i>Aug. 2017 - Dec 2021</i></p>
  </div>

  <div className="gridbox order-3 col-span-3 lg:border-b-0">
    <p className="font-normal text-right text-nowrap">Webhelp, Vodafone</p>
  </div>
  <div className="gridbox order-3 col-span-4 lg:col-span-5 lg:border-b-0 lg:border-l-0">
    <p className="text-left text-nowrap">Sales Advisor | Senior Sales Advisor</p>
  </div>
  <div className="gridbox order-3 col-span-3 lg:col-span-2 lg:border-b-0">
    <p className="font-light text-right lg:text-left text-nowrap"><i>Jul. 2013 - Dec 2015</i></p>
  </div>

  <div className="gridbox order-4 col-span-3 lg:border-b-0">
    <p className="font-normal text-right text-nowrap">Capita Outsourcing, O2</p>
  </div>
  <div className="gridbox order-4 col-span-4 lg:col-span-5 lg:border-b-0 lg:border-l-0">
    <p className="text-left text-nowrap">Customer Experience Advisor | Escalations Manager</p>
  </div>
  <div className="gridbox order-4 col-span-3 lg:col-span-2 lg:border-b-0">
    <p className="font-light text-right lg:text-left text-nowrap"><i>Sep. 2011 - Jul. 2013</i></p>
  </div>

  <div className="gridbox order-5 col-span-3 lg:border-b-0">
    <p className="font-normal text-right text-nowrap">Morrison's Supermarket</p>
  </div>
  <div className="gridbox order-5 col-span-4 lg:col-span-5 lg:border-b-0 lg:border-l-0">
    <p className="text-left text-nowrap">Bakery Assistant | Checkout Operative</p>
  </div>
  <div className="gridbox order-5 col-span-3 lg:col-span-2 lg:border-b-0">
    <p className="font-light text-right lg:text-left text-nowrap"><i>Jun. 2007 - Sep. 2011</i></p>
  </div>

</div>
  <div className="gridbox text-left order-last col-span-8 font-light text-base lg:text-lg dark:shadow-none"><i>References available upon request</i></div>

</div><p><br/></p></div>

);

export default AboutEllen;