"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [ {
    title: "Skills",
    id:"skills",
    content: (
        <ul className="list-disc pl-2">
            <li>Node.js</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>MySql</li>
        </ul>
    )
},
{
    title: "Education",
    id:"education",
    content:(
        <ul className="list-disc pl-2">
          <l1>Sistemas de Informação</l1>
          <li>Universidade do Estado de Minas Gerais</li>  
        </ul>
    )
},
{
    title: "Certifications",
    id:"certifications",
    content:(
        <ul className="list-disc pl-2">
          <li>JavaScript</li>
          <li>React</li> 
           <li>MySql</li>
         </ul>
    )
}

]

const AboutSection = () => {
const [tab, setTab] = useState ("skills")
const [isPending, startTransition] = useTransition();
const handleTabChange = (id) => {
    startTransition (()=> {
    setTab(id);
    })
}

  return (
   <section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-8 items center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src= "/image/surfing.png" width={500} height={500}/>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        <p className="text-base lg:text-lg">Hello, I'm Isadora, 21 years old, and I'm in the final semester of my Information Systems degree. My passion for web development is fueled by a solid experience in HTML, CSS, JavaScript, React, MySQL, Node.js, and Git. I'm always striving to improve my skills and explore new technologies to create innovative and efficient solutions</p>
        <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
      </div>
    </div>

   </section>
  )
}

export default AboutSection;