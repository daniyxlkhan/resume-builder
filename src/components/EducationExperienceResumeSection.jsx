import '../styles/EducationExperienceResumeSection.css';

function EducationExperienceResumeSection({educationInfo: {degree, schoolName, location, startDate, endDate, description, id}}) {
    return (
        <div className="education-experience-resume-section">
            <div className="school-and-date">
                <span className="school-name">{schoolName}</span>
                <span>
                    <span className="date">{startDate} - </span><span className="end-date">{endDate}</span>
                </span>
            </div>

            <div className="degree-and-location">
                <span className="degree">{degree}</span>
                <span className="location"><i>{location}</i></span>
            </div>
            <div className="education-description">
                {description}
            </div>
        </div>
    );
}

export default EducationExperienceResumeSection;