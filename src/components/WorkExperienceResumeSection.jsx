import "../styles/WorkExperienceResumeSection.css";

function WorkExperienceResumeSection({workExperience: {companyName, positionTitle, jobDescription, location, startDate, endDate}}) {
    return (
        <div className="work-experience-resume-section">
            <div className="company-and-date">
                <span className="company-name">{companyName}</span>
                <span>
                            <span className="date">{startDate} - </span><span className="end-date">{endDate}</span>
                        </span>
            </div>
            <div className="position-and-location">
                <span className="position">{positionTitle}</span>
                <span className="location">{location}</span>
            </div>
            <div className="job-description">
                {jobDescription}
            </div>
        </div>
    );
}

export default WorkExperienceResumeSection;
