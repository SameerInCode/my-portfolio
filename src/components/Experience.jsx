function Experience(){
  const timeline=[
    
    {
      year:"2025",
      title:"Backend Internship",
      place:"IT Beam Software Company",
      desc:"Worked on backend web development using Node.js and MongoDB. Contributed to API development, database operations, and application logic.",
    },
    {
  year:"2024-Present",
  title:"President DHA Circle",
  place:"Student Organization",
  desc:"Leading Student activities, coordinating teams, managing reporting systems, and organizing educational events and training programs."
},
{
      year:"2023-Present",
      title:"BS-Computer Science",
      place:"Lahore Garrison University",
      desc:"Currently pursuing BSCS with focus on Web Development, Machine Learning, Database Systems, Compiler Construction, and Parallel & Distributed Computing.",
    },
  ];

  return(
    <section id="experience">
      <h2>Education Journey</h2>
      <p className="experience-subtitle">
  Academic, Leadership and Professional Growth
</p>
      <div className="timeline">
        {timeline.map((item,index)=>(
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.year}</div>
             <div className="timeline-content">
              <h3>Title: {item.title}</h3>
              <h4>{item.place}</h4>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience;