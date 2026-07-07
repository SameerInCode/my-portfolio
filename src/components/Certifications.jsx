import { useState } from "react";

function Certificates(){
const certifications=[
  {
    id:1,
    title:"Frontend Web Development",
    organization:"Bano Qabil | PITB | Learning Resource Network (UK)",
    duration:"Sep 2024 - Nov 2024",
    image: "../public/frontend.jpeg"
  },
  {
    id:2,
    title:"Backend Web Development",
    organization:"Bano Qabil | PITB | Learning Resource Network (UK)",
    duration:"May 2025 - Sep 2025",
    image: "../public/backend.jpeg"
  },
  {
    id:3,
    title:"Python For Data Scienece",
    organization:"IBM Cognitive Class",
    duration:"May 2026 - June 2026",
    image: "../public/python.PNG"

  },

];
return(
<section id="certifications">
  <h2>Certifications</h2>
  <div className="certifications-grid">
    {
      certifications.map((cert)=>(
        <div className="certification-card" key={cert.id}>
          <div className="cert-image-container">
            <img src={cert.image} alt={cert.title} className="cert-image" />
          </div>
          <h3>{cert.title}</h3>
          <h4>{cert.organization}</h4>
          <p>{cert.duration}</p>
        </div>
      ))
    }
  </div>
</section>
);
}
export default Certificates;