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
  ],
  experience: [
    {
      id: "exp-1",
      company: "Tech Corp Inc.",
      position: "Frontend Developer",
      dateFrom: "2022",
      dateTo: "Present",
      description: "Developed user interfaces.",
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

  // Handlers to clear data and reload default cvData respectively
  function handleClearCv() {
    setCvData(emptyCvData);
  }
  function handleLoadExample() {
    setCvData(defaultCvData);
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
              Built by{" "}
              <a href="https://github.com" target="_blank" rel="noreferrer">
                Steve C.
              </a>
            </p>
            <p className="credits-source">
              <a href="https://github.com/cv-builder" target="_blank" rel="noreferrer">
                view source code on github
              </a>
            </p>
          </div>
        </div>

        <div className="header-actions-group">
          <button type="button" onClick={handleClearCv}>
            Clear Resume
          </button>
          <button type="button" onClick={handleLoadExample}>
            Load Example
          </button>
        </div>
      </header>

      <div className="app-layout">
        <FormContainer
          cvData={cvData}
          onFormChange={handleFormChange}
          onAddEducation={handleAddEducation}
          onAddExperience={handleAddExperience}
          onDeleteItem={handleDeleteItem}
        />
        <Preview cvData={cvData} />
      </div>
    </div>
  );
}
export default App;
