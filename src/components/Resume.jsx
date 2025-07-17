import '../styles/Resume.css';
import PersonalDetailsResumeSection from "./PersonalDetailsResumeSection.jsx";
import EducationExperienceResumeSection from "./EducationExperienceResumeSection.jsx";

function Resume({info: {personalInfo, educationInfo}}) {
    return (
        <div className="resume">
            <PersonalDetailsResumeSection personalInfo={personalInfo} />

            {educationInfo ? (
            <div className="education-experience-header">Education</div>
            ) : null}
            <EducationExperienceResumeSection educationInfo={educationInfo} />

        </div>
    );
}

export default Resume;