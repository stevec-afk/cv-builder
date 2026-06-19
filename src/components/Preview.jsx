import { useEffect, useState } from "react";
import { Document, Page, Text, View, StyleSheet, usePDF } from "@react-pdf/renderer";
import "./Preview.css";

// PDF blueprint styles
const pdfStyles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
    padding: 40,
  },
  section: {
    marginBottom: 15,
  },
  nameHeader: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#1e293b",
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 16,
    color: "#0f172a",
    borderBottomWidth: 1,
    borderBottomColor: "#cbd5e1",
    borderBottomStyle: "solid",
    paddingBottom: 4,
    marginTop: 15,
    marginBottom: 8,
  },
  bodyText: {
    fontSize: 11,
    color: "#334155",
    lineHeight: 1.5,
  },
});

function ResumeDocument(props) {
  const { general, education, experience } = props.cvData;

  return (
    <Document>
      <Page size="A4" style={pdfStyles.page}>
        {/* 1. General Contact Info Section */}
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.title}>{general.fullName || "Your Name"}</Text>
          <Text style={pdfStyles.bodyText}>{general.email}</Text>
          <Text style={pdfStyles.bodyText}>{general.phone}</Text>
        </View>

        {/* 2. Education Section */}
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.title}>Education</Text>
          {Object.values(education || {}).map((edu) => (
            <View key={edu.id} style={{ marginBottom: 5 }}>
              <Text style={pdfStyles.bodyText}>
                {edu.schoolName || "School"} — {edu.degree || "Degree"}
              </Text>
            </View>
          ))}
        </View>

        {/* 3. Professional Experience Section */}
        <View style={pdfStyles.section}>
          <Text style={pdfStyles.title}>Professional Experience</Text>
          {Object.values(experience || {}).map((exp) => (
            <View key={exp.id} style={{ marginBottom: 5 }}>
              <Text style={pdfStyles.bodyText}>
                {exp.companyName || "Company"} — {exp.titlePosition || "Position"}
              </Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}

function Preview(props) {
  const [debouncedCvData, setDebouncedCvData] = useState(props.cvData);
  const [base64Url, setBase64Url] = useState("");

  // 🚨 OPTIMIZATION 1: THE DEBOUNCE FIREBREAK
  // As the user types rapidly, this hook absorbs the keystrokes.
  // It delays updating the heavy PDF engine until the typing pauses for 350ms.
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCvData(props.cvData);
    }, 350);

    return () => clearTimeout(handler);
  }, [props.cvData]);

  // 🚨 OPTIMIZATION 2: THE BACKGROUND COMPILER HOOK
  // Generates the PDF file blob silently in memory, listening ONLY to debounced data.
  const [instance, updateInstance] = usePDF({
    document: <ResumeDocument cvData={debouncedCvData} />,
  });

  // Whenever the debounced data changes, force the hook engine to re-compile
  useEffect(() => {
    updateInstance();
  }, [debouncedCvData, updateInstance]);

  // 🚨 OPTIMIZATION 3: THE BASE64 TRANSLATOR
  // Takes the compiled binary blob and serializes it into a standard Base64 Data URI string.
  useEffect(() => {
    if (instance.blob) {
      const reader = new FileReader();
      reader.readAsDataURL(instance.blob);
      reader.onloadend = () => {
        setBase64Url(reader.result);
      };
    }
  }, [instance.blob]);

  return (
    <div className="preview-column">
      {base64Url ? (
        <iframe
          src={base64Url}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      ) : (
        <div className="pdf-loading-placeholder">Compiling Live Document...</div>
      )}
    </div>
  );
}

export default Preview;
