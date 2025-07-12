import '../styles/PersonalDetails.css';
import InputGroup from './InputGroup';

function PersonalDetails({ onChange, fullName, email, phoneNumber, location}) {
    return (
        <>
            <div className="personal-details">
                <h1>Personal Details</h1>
                <InputGroup
                    type="text"
                    id="full-name"
                    labelText="Full name"
                    placeHolder="First and last name"
                    value={fullName}
                    onChange={onChange}
                    dataKey="fullName"
                />
                <InputGroup
                    type="email"
                    id="email"
                    labelText="Email Address"
                    placeHolder="Email address"
                    value={email}
                    onChange={onChange}
                    dataKey="email"
                />
                <InputGroup
                    type="tel"
                    id="phone-number"
                    labelText="Phone number"
                    placeHolder="Phone number"
                    value={phoneNumber}
                    onChange={onChange}
                    dataKey="phoneNumber"
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
            </div>
        </>
    );
}

export default PersonalDetails;
