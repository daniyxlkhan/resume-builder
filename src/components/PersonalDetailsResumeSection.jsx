import '../styles/PersonalDetailsResumeSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function PersonalDetailsResumeSection({ personalInfo: { fullName, email, phoneNumber, location } }) {
    return (
        <div className="personal-details-resume-section">
            <div className="name-and-details">
                <span className="full-name">{fullName}</span>
                <div className="contact-info">
                    <span className="email">
                        <FontAwesomeIcon icon={faEnvelope} /> {email}
                    </span>
                    <span className="phone-number">
                        <FontAwesomeIcon icon={faPhone} /> {phoneNumber}
                    </span>
                    <span className="location">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />{location}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetailsResumeSection;