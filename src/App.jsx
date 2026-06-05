import { useState } from "react";
import Preview from "./components/Preview";
import Sidebar from "./components/Sidebar";
import Workspace from "./components/Workspace";

const defaultCvData = {
  general: {
    fullName: "Jane Doe",
    email: "janedoe@example.com",
    phone: "(555) 123-4567",
    location: "Halifax, NS, Canada",
  },
  education: [
    {
      id: "edu-1",
      school: "State University",
      degree: "B.S. in Computer Science",
      dateFrom: "2018",
      dateTo: "2022",
    },
  ],
  experience: [
    {
      id: "exp-1",
      company: "Tech Corp Inc.",
      position: "Frontend Developer",
      responsibilities:
        "Developed user interfaces, managed component states, and collaborated with design teams.",
      dateFrom: "2022",
      dateTo: "Present",
    },
  ],
};

function App() {
  const [cvData, setCvData] = useState(defaultCvData);

  function handleGeneralChange(fieldName, newText) {
    setCvData({
      ...cvData,
      general: {
        ...cvData.general,
        [fieldName]: newText,
      },
    });
  }

  function handleEducationChange(id, fieldName, newText) {
    setCvData({
      ...cvData,
      education: cvData.education.map((edu) => {
        if (edu.id === id) {
          return {
            ...edu,
            [fieldName]: newText,
          };
        }
        return edu;
      }),
    });
  }

  function handleExperienceChange(id, fieldName, newText) {
    setCvData({
      ...cvData,
      experience: cvData.experience.map((exp) => {
        if (exp.id === id) {
          return {
            ...exp,
            [fieldName]: newText,
          };
        }
      }),
    });
  }

  return (
    <div className="app-layout">
      <Sidebar />
      <Workspace
        generalData={cvData.general}
        educationData={cvData.education}
        experienceData={cvData.experience}
        onGeneralChange={handleGeneralChange}
        onEducationChange={handleEducationChange}
        onExperienceChange={handleExperienceChange}
      />
      <Preview cvData={cvData} />
    </div>
  );
}

export default App;
