import './App.css'
import {useState} from "react";
import exampleData from "./example-data.js";

import PersonalDetails from "./components/PersonalDetails.jsx";

function App() {
    const [personalInfo, setPersonalInfo] = useState(exampleData.personalDetails);

    const handlePersonalInfoChange = (e) => {
        const key = e.target.dataset.key;
        setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    }

    return (
        <>
            <PersonalDetails
                onChange={handlePersonalInfoChange}
                fullName={personalInfo.fullName}
                email={personalInfo.email}
                phoneNumber={personalInfo.phoneNumber}
                location={personalInfo.location}
            />
        </>
    )
}

export default App;
