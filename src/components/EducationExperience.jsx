import '../styles/EducationExperience.css';
import InputGroup from "./InputGroup.jsx";

function EducationExperience({onChange, degree, schoolName, location, startDate, endDate, description, id}) {

    return (
        <div className="education-experience">
            <InputGroup
                type="text"
                id="degree"
                labelText="Degree"
                placeHolder="Degree"
                value={degree}
                onChange={onChange}
                dataKey="degree"
            />
            <InputGroup
                type="text"
                id="schoolName"
                labelText="School Name"
                placeHolder="Name of your school"
                value={schoolName}
                onChange={onChange}
                dataKey="schoolName"
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
            <InputGroup
                type="textarea"
                id="Description"
                labelText="Description"
                placeHolder="Description"
                value={description}
                onChange={onChange}
                dataKey="description"
            />
        </div>
    );
}

export default EducationExperience;