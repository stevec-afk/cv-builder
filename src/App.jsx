import { useState } from "react";
import Preview from "./components/Preview";
import Workspace from "./components/Workspace";

const defaultCvData = {
  general: {
    fullName: "Jane Doe",
    email: "janedoe@example.com",
    phone: "(555) 123-4567",
    location: "Halifax, NS, Canada",
  },
  education: {
    "edu-1": {
      id: "edu-1",
      school: "State University",
      degree: "B.S. in Computer Science",
      dateFrom: "2018",
      dateTo: "2022",
      isVisible: true,
    },
  },
  experience: {
    "exp-1": {
      id: "exp-1",
      company: "Tech Corp Inc.",
      position: "Frontend Developer",
      dateFrom: "2022",
      dateTo: "Present",
      description:
        "Developed user interfaces, managed component states, and collaborated with design teams.",
      isVisible: true,
    },
  },
};

function App() {
  const [cvData, setCvData] = useState(defaultCvData);

  function handleFormChange(sectionName, fieldName, newText, id = null) {
    setCvData({
      ...cvData,
      [sectionName]: id
        ? {
            // Nested list object (Education / Experience)
            ...cvData[sectionName],
            [id]: {
              ...cvData[sectionName][id],
              [fieldName]: newText,
            },
          }
        : {
            // Flat object (general)
            ...cvData[sectionName],
            [fieldName]: newText,
          },
    });
  }

  return (
    <div className="app-layout">
      <Workspace cvData={cvData} onFormChange={handleFormChange} />
      <Preview cvData={cvData} />
    </div>
  );
}

export default App;
