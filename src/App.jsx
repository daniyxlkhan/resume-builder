import './App.css'
import {useState} from "react";
import exampleData from "./example-data.js";

import PersonalDetails from "./components/PersonalDetails.jsx";
import EducationExperience from "./components/EducationExperience.jsx";
import WorkExperience from "./components/WorkExperience.jsx";
import Resume from "./components/Resume.jsx";


function App() {
    const [personalInfo, setPersonalInfo] = useState(exampleData.personalDetails);
    const [educationInfo, setEducationInfo] = useState(exampleData.sections.education[0]);
    const [workExperience, setWorkExperience] = useState(exampleData.sections.work[0]);

    const handlePersonalInfoChange = (e) => {
        const key = e.target.dataset.key;
        setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    }

    const handleEducationExperienceChange = (e) => {
        const key = e.target.dataset.key;
        setEducationInfo({ ...educationInfo, [key]: e.target.value });
    }

    const handleWorkExperienceChange = (e) => {
        const key = e.target.dataset.key;
        setWorkExperience({ ...workExperience, [key]: e.target.value });
    }

    const resumeDate = {
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

                <EducationExperience
                    onChange={handleEducationExperienceChange}
                    degree={educationInfo.degree}
                    schoolName={educationInfo.schoolName}
                    location={educationInfo.location}
                    startDate={educationInfo.startDate}
                    endDate={educationInfo.endDate}
                    id={educationInfo.id}
                />

                <WorkExperience
                    onChange={handleWorkExperienceChange}
                    companyName={workExperience.companyName}
                    positionTitle={workExperience.positionTitle}
                    location={workExperience.location}
                    jobDescription={workExperience.jobDescription}
                    startDate={workExperience.startDate}
                    endDate={workExperience.endDate}
                    id={workExperience.id}
                />

                <Resume
                    info={resumeDate}
                />
            </div>
        </div>
    )
}

export default App;
