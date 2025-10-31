function Experience(){
  const timeline=[
    {
      year:"2022-Present",
      title:"BS-Computer Science",
      place:"Lahore Garrison University",
      desc:"Currently pursuing BSCS with focus on web development, OOP, and system design.",
    },
    {
      year:"2024",
      title:"Backend Internship",
      place:"IT Beam Software Company",
      desc:"Worked with backend Web devlopment on Node Js and MongoDB Database",
    },
  ];

  return(
    <section id="experience">
      <h2>Education & Experience</h2>
      <div className="timeline">
        {timeline.map((item,index)=>(
          <div className="timeline-item" key={index}>
            <div className="timeline-dot"></div>
            <div className="timeline-date">{item.year}</div>
             <div className="timeline-content">
              <h3>{item.title}</h3>
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