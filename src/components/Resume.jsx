import '../styles/Resume.css';
import '../styles/WorkExperienceResumeSection.css';
import PersonalDetailsResumeSection from "./PersonalDetailsResumeSection.jsx";
import EducationExperienceResumeSection from "./EducationExperienceResumeSection.jsx";
import WorkExperienceResumeSection from "./WorkExperienceResumeSection.jsx";

function Resume({info: {personalInfo, educationInfo, workExperience}}) {
    return (
        <div className="resume">
            <PersonalDetailsResumeSection personalInfo={personalInfo} />

            {educationInfo && educationInfo.length > 0 && (
                <>
                    <div className="education-experience-header">Education</div>
                    {educationInfo.map((edu) => (
                        <EducationExperienceResumeSection key={edu.id} educationInfo={edu} />
                    ))}
                </>
            )}

            {workExperience && workExperience.length > 0 && (
                <>
                    <div className="work-experience-header">Work Experience</div>
                    {workExperience.map((work) => (
                        <WorkExperienceResumeSection key={work.id} workExperience={work} />
                    ))}
                </>
            )}
        </div>
    );
}

export default Resume;
