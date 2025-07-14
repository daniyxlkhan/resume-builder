import './App.css'
import {useState} from "react";
import exampleData from "./example-data.js";

import PersonalDetails from "./components/PersonalDetails.jsx";
import PersonalDetailsResumeSection from "./components/PersonalDetailsResumeSection.jsx";

function App() {
    const [personalInfo, setPersonalInfo] = useState(exampleData.personalDetails);

    const handlePersonalInfoChange = (e) => {
        const key = e.target.dataset.key;
        setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    }

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

                <PersonalDetailsResumeSection
                    personalInfo={personalInfo}
                />
            </div>
        </div>
    )
}

export default App;
