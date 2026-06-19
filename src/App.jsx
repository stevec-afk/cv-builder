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

function App() {
  const [cvData, setCvData] = useState(defaultCvData);

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

  return (
    <div className="app-layout">
      <FormContainer cvData={cvData} onFormChange={handleFormChange} />
      <Preview cvData={cvData} />
    </div>
  );
}

export default App;
