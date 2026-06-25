import { useState } from "react";
import Preview from "./components/Preview";
import FormContainer from "./components/FormContainer";

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
    {
      id: "edu-2",
      school: "Community College",
      degree: "Advanced Diploma in Web Development",
      dateFrom: "2016",
      dateTo: "2018",
    },
  ],
  experience: [
    {
      id: "exp-1",
      company: "Tech Corp Inc.",
      position: "Senior Frontend Developer",
      dateFrom: "2024",
      dateTo: "Present",
      description:
        "Led a team of developers to rebuild the core application dashboard.\nOptimized rendering performance and established clean state management patterns.",
    },
    {
      id: "exp-2",
      company: "Web Solutions Ltd.",
      position: "Frontend Developer",
      dateFrom: "2022",
      dateTo: "2024",
      description:
        "Built responsive user interfaces for corporate client web applications.\nCollaborated closely with design teams to translate wireframes into clean, interactive code frameworks.",
    },
  ],
};

const emptyCvData = {
  general: {
    fullName: "",
    email: "",
    phone: "",
    location: "",
  },
  education: [],
  experience: [],
};

function App() {
  const [cvData, setCvData] = useState(defaultCvData);

  // Handler for form changes - updates resume data in real time.
  // This handler is passed down to components so they can interact with cvData
  function handleFormChange(sectionName, fieldName, newText, id = null) {
    setCvData({
      ...cvData,
      [sectionName]: id
        ? cvData[sectionName].map((item) =>
            item.id === id ? { ...item, [fieldName]: newText } : item,
          )
        : {
            ...cvData[sectionName],
            [fieldName]: newText,
          },
    });
  }

  // Handler to add a new education section
  function handleAddEducation() {
    const newEdu = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      dateFrom: "",
      dateTo: "",
    };

    setCvData({
      ...cvData,
      education: [...cvData.education, newEdu],
    });
  }

  // Handler to add a new experience section
  function handleAddExperience() {
    const newExp = {
      id: crypto.randomUUID(),
      company: "",
      position: "",
      dateFrom: "",
      dateTo: "",
      description: "",
    };

    setCvData({
      ...cvData,
      experience: [...cvData.experience, newExp],
    });
  }

  // Handler to delete an entry from experience or education sections
  function handleDeleteItem(sectionName, id) {
    setCvData({
      ...cvData,
      [sectionName]: cvData[sectionName].filter((item) => item.id !== id),
    });
  }

  return (
    <div className="app-container-wrapper">
      <header className="global-header-bar">
        <div className="header-title-group">
          <h1>CV Builder</h1>
          <div className="project-credits">
            <p className="credits-author">
              Made by{" "}
              <a
                href="https://github.com/stevec-afk/cv-builder"
                target="_blank"
                rel="noreferrer"
              >
                Steve C.
              </a>
            </p>
          </div>
        </div>

        <div className="header-actions-group">
          <button type="button" onClick={() => setCvData(emptyCvData)}>
            Clear Resume
          </button>
          <button type="button" onClick={() => setCvData(defaultCvData)}>
            Load Example
          </button>
        </div>
      </header>

      <div className="app-layout">
        <div className="form-workspace-wrapper">
          <FormContainer
            cvData={cvData}
            onFormChange={handleFormChange}
            onAddEducation={handleAddEducation}
            onAddExperience={handleAddExperience}
            onDeleteItem={handleDeleteItem}
          />
          <div className="scroll-fade-mask"></div>
        </div>
        <Preview cvData={cvData} />
      </div>
    </div>
  );
}
export default App;
