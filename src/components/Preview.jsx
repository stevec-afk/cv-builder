import { Document, Page, Text, View, StyleSheet, PDFViewer } from "@react-pdf/renderer";
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
  return (
    <div className="preview-column">
      <PDFViewer style={{ width: "100%", height: "100%", border: "none" }}>
        <ResumeDocument cvData={props.cvData} />
      </PDFViewer>
    </div>
  );
}

export default Preview;
