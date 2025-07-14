import '../styles/Resume.css';
import PersonalDetailsResumeSection from "./PersonalDetailsResumeSection.jsx";

function Resume({info: {personalInfo, educationInfo}}) {
    return (
        <div className="resume">
            <PersonalDetailsResumeSection personalInfo={personalInfo} />

        </div>
    );
}

export default Resume;