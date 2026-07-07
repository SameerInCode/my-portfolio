import { useState } from "react";

function Skills() {
  const [expandedCategory, setExpandedCategory] = useState(null);

  const skillsData = [
    {
      id: '1',
      title: 'Programming Languages',
      icon: '💻',
      color: '#FF6B6B',
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "Python", level: 70 },
        { name: "C++", level: 75 },
        { name: "C", level: 70 },
        { name: "SQL", level: 60 }
      ],
    },
    {
      id: '2',
      title: 'Web Development',
      icon: '🌐',
      color: '#4ECDC4',
      skills: [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "ReactJS", level: 70 },
        { name: "NodeJS", level: 60 },
        { name: "Figma", level: 65 },
        { name: "Tailwind CSS", level: 60 }
      ]
    },
    {
      id: '3',
      title: 'Database',
      icon: '🗄️',
      color: '#95E1D3',
      skills: [
        { name: 'MongoDB', level: 70 },
        { name: 'SQL', level: 60 }
      ]
    },
    {
      id: '4',
      title: 'Tools & Platforms',
      icon: '🛠️',
      color: '#F38181',
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Supabase", level: 80 },
        { name: "GitHub", level: 70 },
        { name: "Git", level: 70 },
        { name: "MS SQL Server", level: 80 },
        { name: "Trello", level: 85 },
        { name: "Jira", level: 80 },
        { name: "Anaconda", level: 75 },
        { name: "Jupyter Notebook", level: 80 },
        { name: "Postman", level: 85 }
      ]
    },
    {
      id: '5',
      title: 'AI/ML',
      icon: '🤖',
      color: '#AA96DA',
      skills: [
        { name: "Pandas", level: 80 },
        { name: "Numpy", level: 80 },
        { name: "Scikit-Learn", level: 75 },
        { name: "ML-Models", level: 75 }
      ]
    },
  ];

  const toggleCategory = (id) => {
    setExpandedCategory(expandedCategory === id ? null : id);
  };

  return (
    <section id="skills">
      <div className="skills-header">
        <h2>Skills & Expertise</h2>
        <p className="skills-subtitle">Click on a category to explore</p>
      </div>
      
      <div className="skills-grid">
        {skillsData.map((category) => (
          <div
            key={category.id}
            className={`skill-category ${expandedCategory === category.id ? 'expanded' : ''}`}
            onClick={() => toggleCategory(category.id)}
            style={{ '--category-color': category.color }}
          >
            <div className="category-header">
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <div className="expand-icon">
                {expandedCategory === category.id ? '−' : '+'}
              </div>
            </div>

            <div className="category-content">
              <div className="skills-list">
                {category.skills.map((skill, index) => (
                  <div key={index} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <div className="skill-bar">
                        <div
                          className="skill-progress"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;