import './App.css'
import {useState} from "react";
import exampleData from "./example-data.js";

import PersonalDetails from "./components/PersonalDetails.jsx";
import EducationExperience from "./components/EducationExperience.jsx";
import Resume from "./components/Resume.jsx";


function App() {
    const [personalInfo, setPersonalInfo] = useState(exampleData.personalDetails);
    const [educationInfo, setEducationInfo] = useState(exampleData.sections.educations[0]);

    const handlePersonalInfoChange = (e) => {
        const key = e.target.dataset.key;
        setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    }

    const handleEducationExperienceChange = (e) => {
        const key = e.dataset.key;
        setEducationInfo({ ...educationInfo, [key]: e.target.value });
    }

    const resumeDate = {
        personalInfo,
        educationInfo,
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

                <Resume
                    info={resumeDate}
                />
            </div>
        </div>
    )
}

export default App;
