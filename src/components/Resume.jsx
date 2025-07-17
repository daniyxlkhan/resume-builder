import '../styles/Resume.css';
import '../styles/WorkExperienceResumeSection.css';
import PersonalDetailsResumeSection from "./PersonalDetailsResumeSection.jsx";
import EducationExperienceResumeSection from "./EducationExperienceResumeSection.jsx";
import WorkExperienceResumeSection from "./WorkExperienceResumeSection.jsx";

function Resume({info: {personalInfo, educationInfo, workExperience}}) {
    return (
        <div className="resume">
            <PersonalDetailsResumeSection personalInfo={personalInfo} />

            {educationInfo ? (
            <div className="education-experience-header">Education</div>
            ) : null}
            <EducationExperienceResumeSection educationInfo={educationInfo} />

            {workExperience ? (
            <div className="work-experience-header">Work Experience</div>
            ) : null}
            <WorkExperienceResumeSection workExperience={workExperience} />
        </div>
    );
}

export default Resume;
