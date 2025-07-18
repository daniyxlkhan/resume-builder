import './App.css'
import {useState} from "react";
import exampleData from "./example-data.js";
import uniqid from "uniqid";

import PersonalDetails from "./components/PersonalDetails.jsx";
import EducationExperience from "./components/EducationExperience.jsx";
import EntrySelector from "./components/EntrySelector.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Resume from "./components/Resume.jsx";


function App() {
    const [personalInfo, setPersonalInfo] = useState(exampleData.personalDetails);
    const [educationInfo, setEducationInfo] = useState(exampleData.sections.education);
    const [workExperience, setWorkExperience] = useState(exampleData.sections.work);
    const [selectedEducationIndex, setSelectedEducationIndex] = useState(0);
    const [selectedWorkIndex, setSelectedWorkIndex] = useState(0);

    const handlePersonalInfoChange = (e) => {
        const key = e.target.dataset.key;
        setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    }

    const handleEducationExperienceChange = (e) => {
        const key = e.target.dataset.key;
        const updatedEducation = [...educationInfo];
        updatedEducation[selectedEducationIndex] = {
            ...updatedEducation[selectedEducationIndex],
            [key]: e.target.value
        };
        setEducationInfo(updatedEducation);
    }

    const handleWorkExperienceChange = (e) => {
        const key = e.target.dataset.key;
        const updatedWork = [...workExperience];
        updatedWork[selectedWorkIndex] = {
            ...updatedWork[selectedWorkIndex],
            [key]: e.target.value
        };
        setWorkExperience(updatedWork);
    }

    const addEducationEntry = () => {
        const newEducation = {
            degree: "",
            schoolName: "",
            location: "",
            startDate: "",
            endDate: "",
            description: "",
            id: uniqid()
        };
        setEducationInfo([...educationInfo, newEducation]);
        setSelectedEducationIndex(educationInfo.length);
    }

    const deleteEducationEntry = (index) => {
        const updatedEducation = [...educationInfo];
        updatedEducation.splice(index, 1);
        setEducationInfo(updatedEducation);
        setSelectedEducationIndex(Math.min(selectedEducationIndex, updatedEducation.length - 1));
    }

    const addWorkEntry = () => {
        const newWork = {
            companyName: "",
            positionTitle: "",
            location: "",
            jobDescription: "",
            startDate: "",
            endDate: "",
            id: uniqid()
        };
        setWorkExperience([...workExperience, newWork]);
        setSelectedWorkIndex(workExperience.length);
    }

    const deleteWorkEntry = (index) => {
        const updatedWork = [...workExperience];
        updatedWork.splice(index, 1);
        setWorkExperience(updatedWork);
        setSelectedWorkIndex(Math.min(selectedWorkIndex, updatedWork.length - 1));
    }

    const resumeData = {
        personalInfo,
        educationInfo,
        workExperience,
    };

    return (
        <div className="app">
            <div className="main-container">
                <PersonalDetails
                    onChange={handlePersonalInfoChange}
                    fullName={personalInfo.fullName}
                    email={personalInfo.email}
                    phoneNumber={personalInfo.phoneNumber}
                    location={personalInfo.location}
                />

                <div className="education-section">
                    <div className="section-header">
                        <h2>Education</h2>
                        <button onClick={addEducationEntry} className="add-button">Add Education</button>
                    </div>

                    <EntrySelector
                        entries={educationInfo}
                        addEntry={addEducationEntry}
                        selectedIndex={selectedEducationIndex}
                        setSelectedIndex={setSelectedEducationIndex}
                        deleteEntry={deleteEducationEntry}
                        selectLabelText="Select Education Entry"
                        displayField="schoolName"
                    />

                    {educationInfo.length > 0 && (
                        <EducationExperience
                            onChange={handleEducationExperienceChange}
                            degree={educationInfo[selectedEducationIndex].degree}
                            schoolName={educationInfo[selectedEducationIndex].schoolName}
                            location={educationInfo[selectedEducationIndex].location}
                            startDate={educationInfo[selectedEducationIndex].startDate}
                            endDate={educationInfo[selectedEducationIndex].endDate}
                            description={educationInfo[selectedEducationIndex].description}
                            id={educationInfo[selectedEducationIndex].id}
                        />
                    )}
                </div>

                <div className="work-section">
                    <div className="section-header">
                        <h2>Work Experience</h2>
                        <button onClick={addWorkEntry} className="add-button">Add Work</button>
                    </div>

                    <EntrySelector
                        entries={workExperience}
                        addEntry={addWorkEntry}
                        selectedIndex={selectedWorkIndex}
                        setSelectedIndex={setSelectedWorkIndex}
                        deleteEntry={deleteWorkEntry}
                        selectLabelText="Select Work Entry"
                        displayField="companyName"
                    />

                    {workExperience.length > 0 && (
                        <WorkExperience
                            onChange={handleWorkExperienceChange}
                            companyName={workExperience[selectedWorkIndex].companyName}
                            positionTitle={workExperience[selectedWorkIndex].positionTitle}
                            location={workExperience[selectedWorkIndex].location}
                            jobDescription={workExperience[selectedWorkIndex].jobDescription}
                            startDate={workExperience[selectedWorkIndex].startDate}
                            endDate={workExperience[selectedWorkIndex].endDate}
                            id={workExperience[selectedWorkIndex].id}
                        />
                    )}
                </div>

                <Resume
                    info={resumeData}
                />
            </div>
        </div>
    )
}

export default App;