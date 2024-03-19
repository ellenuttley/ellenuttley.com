import React from 'react';

const AboutEllen = () => (
  <div>
  <div className="mygrid grid-cols-8 text-center *:subpixel-antialiased text ">

{/* Header */}
  <div className="inline-grid col-span-8 grid-cols-10 order-first">
    <div className="gridbox-header col-span-4 text-left ">Ellen Uttley</div>
    <div className="gridbox-header col-span-6 text-right">Software Engineer</div>
  </div>

{/* Info */}
  <div className="inline-grid col-span-8 grid-cols-4 overflow-x-auto max-md:flex max-md:flex-nowrap">
    <div className="gridbox gridbox-info col-span-1 order-1 lg:order-1">Barnsley, UK</div>
    <div className="gridbox gridbox-info col-span-1 order-2">ellenuttley@gmail.com</div>
    <div className="gridbox gridbox-info col-span-1 order-3 lg:order-1">www.ellenuttley.com</div>
    <div className="gridbox gridbox-info col-span-1 order-4 lg:order-1">github.com/ellenuttley</div>
  </div>

{/* Personal Statement */}
<div className="gridbox space-y-2 order-4 lg:order-3 col-span-8 p-4 leading-snug text-pretty">
<p>I am an enthusiastic junior software developer, in search of a company that fosters learning and professional development.</p> 
<p>My passion for full-stack development grows by the day, and I have found that I have an eye for UX/UI design, and love being able to look at a project through the lens of both a developer and a designer. I try to use this dual perspective to fuel creative innovation and problem solving, and I strive to create simple, but impactful designs that satisfy and simplify the user story.</p>
<p>I completed the CFGDegree Software Engineering bootcamp, elevating my skills in Python and SQL and honing those skills through projects. As one of the top performers, I was then offered a place on the +Masters bootcamp for App Development, where I learnt how to make React Native mobile apps, and achieved the highest grade in my cohort of 97%.</p>
<p>Since then, I have gone on to my current role as a Junior Software Developer, and have found that my background in sales and customer service has given me both the confidence to articulate my ideas, and the communication skills to effectively explain them to my team. My drive for self-directed learning, my design ability, and my knowledge of modern development practices, have led to a rapid expansion of my roles and responsibilities, and I have worked hard to rise to these new challenges.</p>
</div>

{/* Technical Skills */}
<div class="inline-grid grid-cols-4 col-span-8 order-6 lg:order-5 lg:col-span-4 row-span-6 *:max-md:px-1 *:max-md:my-0">

<div className="gridbox gridbox-title order-first col-span-8 lg:col-span-4">
  Technical Skills
</div>

{/* Python */}
  <div className="gridbox min-w-fit order-1 col-span-1">
    <p className="font-normal text-right">Python</p></div>
    
  <div className="gridbox text-left order-1 lg:col-span-3 col-span-7 border-lightGrey border-l">
    Flask, Django, OOP, APIs, testing, file handling
  </div>

{/* SQL */}
  <div className="gridbox min-w-fit order-2 col-span-1 lg:row-span-2">
    <p className="font-normal text-right">SQL</p>
  </div>
  
  <div className="gridbox text-left order-2 col-span-7 lg:col-span-3 lg:row-span-2  border-lightGrey border-l">
    Relational database design and management<br/>
    MySQL, PostgreSQL, SQLAlchemy, ORM
  </div>

{/* Javascript */}
  <div className="gridbox min-w-fit order-3 col-span-1">
    <p className="font-normal text-right">JavaScript</p>
  </div>

  <div className="gridbox text-left order-3 col-span-7 lg:col-span-3 border-lightGrey border-l">
    React, React Native, node.js
  </div>
  
{/* Tailwind */}
  <div className="gridbox min-w-fit order-4 col-span-1 font-light">
    <p className="font-normal text-right">Tailwind</p>
  </div>

  <div className="gridbox text-left pr-0 order-4 col-span-7 lg:col-span-3 border-lightGrey border-l">
    Dark mode, accessibility, responsive development
  </div>

{/* Other Technical Skills */}
  <div className="gridbox text-center order-5 col-span-8 lg:col-span-4 text-pretty">
    Git, Linux / WSL, Ruby on Rails, PostCSS, web development
  </div>
</div>

{/* Non-Technical Skills */}
<div class="inline-grid grid-cols-4 col-span-8 row-span-6 order-6 lg:order-5 lg:col-span-4">

  <div className="gridbox gridbox-title order-1 col-span-8 row-span-1 lg:col-span-4">
    Non-Technical Skills
  </div>

  <div className="gridbox order-2 col-span-8 lg:col-span-4 row-span-2 space-y-2 pt-3 lg:pl-5">
    <p className="break-inside-avoid-column justify-center lg:justify-normal">UX / UI and Web Design -<span className="font-thin whitespace-pre"> primarily using Figma and Canva</span></p>
    <p>Technical writing and editing</p>
    <p className="leading-tight">Knowledge of basic development principles, Agile methodologies, design patterns, and the SDLC</p>
  </div>

{/* Qualifications */}
    <div className="gridbox gridbox-title order-3 col-span-8 row-span-1 lg:col-span-4">
      Qualifications
    </div>

    <div className="gridbox order-4 col-span-8 lg:col-span-4 row-span-2 space-y-2 leading-tight lg:pl-5 pt-3">
      <p>CFG Introduction to Data and SQL</p>
      <p>CFGDegree Software Engineering</p>
      <p>CFG +Masters App Development</p>
    </div>

</div>
  
{/* Projects */}
<div class="inline-grid grid-cols-4 col-span-8 row-span-6 order-7 lg:order-6 ">

  <div className="gridbox gridbox-title order-1 col-span-8 max-md:mb-2">
    Projects
  </div>

  <div className="gridbox  order-2 col-span-8 lg:col-span-1 max-md:gridbox-subtitle">
    <p className="font-light lg:text-xl/loose lg:text-right">BedtimeBard</p>
  </div>

  <div className="gridbox self-center max-md:text-base lg:text-xl/loose lg:pl-3 lg:p-2 lg:text-left order-2 sm:max-md:pt-0 pb-0 col-span-8 lg:col-span-6">
    <i>CFG Degree Final Project</i>
  </div>

  <div className="gridbox lg:pl-3 lg:p-2 order-3 col-span-8 pt-0 lg:pt-0 lg:border-lightGrey lg:border-b">
    An MVC web app that utilised the OpenAI API to write bedtime stories for children, while integrating their bedtime routines in a to-do list style. Made using Flask, written primarily in Python, with database functionality using SQLAlchemy.
  </div>

  <div className="gridbox order-4 col-span-8 lg:col-span-1 max-md:gridbox-subtitle">
    <p className="font-light lg:text-xl/loose lg:font-xl lg:text-right">PetItDone</p>
  </div>

  <div className="gridbox lg:text-xl/loose max-md:text-base col-span-8 pb-0 lg:pl-3 lg:p-2 self-center order-4 lg:col-span-6">
    <i>CFG Masters Final Project</i>
  </div>

  <div className="gridbox order-5 col-span-8 lg:pl-3 pt-0 lg:pt-0 max-md:pb-0 lg:border-lightGrey lg:border-b">
    A combined digipet and to-do list mobile app, designed for neurodivergent people. Made using React Native and Expo, written almost exclusively in JavaScript with node.js, with database and other functionality handled via Firebase.  
  </div>

  <div className="gridbox font-light order-6 col-span-8">
    During both projects I acted as SCRUM master for my respective teams; planning out the project, assigning tasks and tracking progress via KANBAN boards, as well as managing the codebase via GitHub and reviewing my teammates code before it was merged via pull requests. I also designed the UX and database of both apps, and wrote the documentation.
  </div>
</div>

{/* Relevant Work History */}
  <div className="gridbox order-8 lg:order-7 gridbox-title col-span-8 max-md:mb-2">
    Relevant Work History
  </div>

  <div class="inline-grid grid-cols-4 col-span-8 row-span-6 order-9 lg:order-8 "> 

{/* Mobile Title Boxes*/}

  <div className="gridbox max-md:block lg:hidden order-1 col-span-8 gridbox-subtitle">
    <p className="font-light">Merlinsoft</p>
  </div>
  <div className="gridbox max-md:block lg:hidden order-2 max-md:pb-0 col-span-8 text-base">
    <p className="font-light">Junior Software Developer</p>
  </div>
  <div className="gridbox max-md:block lg:hidden order-3 max-md:pt-0 col-span-8">
    <p>Jan. 2024 - Present</p>
  </div>

  <div className="gridbox max-md:block lg:hidden order-5 col-span-8 gridbox-subtitle">
    <p className="font-light">Freelance Web Developer</p>
  </div>
  <div className="gridbox max-md:block lg:hidden order-6 max-md:pb-0 col-span-8 text-base">
    <p className="font-light">Web Developer</p>
  </div>
  <div className="gridbox max-md:block lg:hidden order-7 max-md:pt-0 col-span-8">
    <p>Jul. 2023 - Jan. 2024</p>
  </div>

{/* --- */}

  <div className="gridbox flex max-md:hidden justify-evenly pt-3 text-right lg:order-1 col-span-8 lg:col-span-1 lg:flex-col lg:self-start lg:pt-4">
    <p className="font-normal lg:text-xl">Merlinsoft</p>
    <p>Junior Software Developer</p>
    <p><i>Jan. 2024 - Present</i></p>
  </div>

  <div className="gridbox py-3 space-y-2 order-4 lg:order-1 col-span-8 max-md:pt-0  lg:self-start lg:col-span-3 lg:border-lightGrey lg:border-l">
    <p>Used Tailwind, CSS, and HTML to enhance the existing frontend. Designed and developed multiple web app components from scratch, and as replacements for legacy code.</p>
    <p>Currently solely responsible for the development of a Ruby on Rails replacement for the legacy software, which has involved; implementing a new Git workflow, research, a full UX/UI design, wireframes, the design and creation of a PostgreSQL database, configuring the asset pipeline via Sprockets and the Hotwire stack, and development in HTML.erb, Ruby, Tailwind, and Javascript.</p>
  </div>

  <div className="gridbox flex max-md:hidden justify-evenly pt-3 text-right order-2 col-span-8 lg:self-start lg:col-span-1 lg:flex-col lg:justify-normal">
    <p className="font-normal lg:text-xl">Freelance</p>
    <p>Web Developer</p>
    <p><i>Jul. 2023 - Jan. 2024</i></p>
  </div>


  <div className="gridbox py-3 space-y-2 order-8 text-pretty max-md:pt-0 lg:order-2 col-span-8 lg:col-span-3 lg:self-start  lg:border-lightGrey lg:border-l">
    <p>Designed and built websites for multiple, diverse clients.</p>
    <p>I developed the websites with React, and then deployed them via Heroku. Also handled the domain hosting, SSL certificates, etc.</p>
  </div>

  </div>

  {/* Other Work History */}

  <div class="inline-grid flex-col *:leading-tight *:lg:leading-normal lg:flex-none order-12 lg:order-11 col-span-8 row-span-6 grid-cols-10 *:lg:border-b *:lg:border-lightGrey">

  <div className="gridbox gridbox-title lg:leading-tight order-first col-span-10 max-md:mb-2">
    Other Work History
  </div>


  <div className="gridbox order-1 col-span-10 lg:col-span-3 max-md:gridbox-subtitle">
    <p className="lg:text-right font-light">Anglian Home Improvements</p>
  </div>
  <div className="gridbox order-1 max-md:pb-0 col-span-10 lg:col-span-5 ">
    <p className="lg:text-left">Remote Sales Advisor</p>
  </div>
  <div className="gridbox order-1 max-md:pt-0 col-span-10 lg:col-span-2">
    <p className="lg:text-left">Feb. 2022 - Nov. 2022</p>
  </div>

  <div className="gridbox order-2 col-span-10 lg:col-span-3 max-md:gridbox-subtitle">
    <p className="lg:text-right font-light">Freelancer</p>
  </div>
  <div className="gridbox order-2 max-md:pb-0 col-span-10 lg:col-span-5">
    <p className="lg:text-left">Various Roles</p>
  </div>
  <div className="gridbox order-2 max-md:pt-0 col-span-10 lg:col-span-2">
    <p className="lg:text-left">Aug. 2017 - Dec 2021</p>
  </div>

  <div className="gridbox order-3 col-span-10 lg:col-span-3 max-md:gridbox-subtitle">
    <p className="lg:text-right font-light">Webhelp, Vodafone</p>
  </div>
  <div className="gridbox order-3 max-md:pb-0 col-span-10 lg:col-span-5">
    <p className="lg:text-left">Sales Advisor | Senior Sales Advisor</p>
  </div>
  <div className="gridbox order-3 max-md:pt-0 col-span-10 lg:col-span-2">
    <p className="lg:text-left">Jul. 2013 - Dec 2015</p>
  </div>

  <div className="gridbox order-4 col-span-10 lg:col-span-3 max-md:gridbox-subtitle">
    <p className="lg:text-right font-light">Capita Outsourcing, O2</p>
  </div>
  <div className="gridbox order-4 max-md:pb-0 col-span-10 lg:col-span-5">
    <p className="lg:text-left">Customer Experience Advisor | Escalations Manager</p>
  </div>
  <div className="gridbox order-4 max-md:pt-0 col-span-10 lg:col-span-2">
    <p className="lg:text-left">Sep. 2011 - Jul. 2013</p>
  </div>

  <div className="gridbox order-5 col-span-10 lg:col-span-3 max-md:gridbox-subtitle">
    <p className="lg:text-right font-light">Morrison's Supermarket</p>
  </div>
  <div className="gridbox order-5 max-md:pb-0 col-span-10 lg:col-span-5">
    <p className="lg:text-left">Bakery Assistant | Checkout Operative</p>
  </div>
  <div className="gridbox order-5 max-md:pt-0 col-span-10 lg:col-span-2">
    <p className="lg:text-left">Jun. 2007 - Sep. 2011</p>
  </div>

</div>
  <div className="gridbox order-last col-span-8 font-light text-lg lg:text-xl dark:shadow-none mt-3"><i>References available upon request</i></div>

</div><p><br/></p></div>

);

export default AboutEllen;