import '../styles/Resume.css';
import PersonalDetailsResumeSection from "./PersonalDetailsResumeSection.jsx";

function Resume({info}) {
    return (
        <div className="resume">
            <PersonalDetailsResumeSection personalInfo={info}/>
        </div>
    );
}

export default Resume;