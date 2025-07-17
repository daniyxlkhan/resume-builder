import '../styles/WorkExperience.css';
import InputGroup from "./InputGroup.jsx";

function WorkExperience({onChange, companyName, positionTitle, location, jobDescription, startDate, endDate, id}) {
    return (
        <div className="work-experience">
            <h1>Experience</h1>
            <InputGroup
                type="text"
                id="company-name"
                labelText="Company Name"
                placeHolder="Company Name"
                value={companyName}
                onChange={onChange}
                dataKey="companyName"
            />
            <InputGroup
                type="text"
                id="position-title"
                labelText="Position Title"
                placeHolder="Position Title"
                value={positionTitle}
                onChange={onChange}
                dataKey="positionTitle"
            />
            <InputGroup
                type="text"
                id="location"
                labelText="Location"
                placeHolder="Location"
                value={location}
                onChange={onChange}
                dataKey="location"
            />
            <InputGroup
                type="textarea"
                id="description"
                labelText="Job Description"
                placeHolder="Job Description"
                value={jobDescription}
                onChange={onChange}
                dataKey="jobDescription"
            />
            <InputGroup
                type="text"
                id="startDate"
                labelText="Start Date"
                placeHolder="Start Date"
                value={startDate}
                onChange={onChange}
                dataKey="startDate"
            />
            <InputGroup
                type="text"
                id="endDate"
                labelText="End Date"
                placeHolder="End Date"
                value={endDate}
                onChange={onChange}
                dataKey="endDate"
            />
        </div>
    );
}


export default WorkExperience;
