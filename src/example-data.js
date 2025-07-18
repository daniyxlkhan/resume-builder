import uniqid from "uniqid";

const exampleData = {
    personalDetails: {
        fullName: "Frank Castle",
        email: "frankyboi@gmail.com",
        phoneNumber: "+1 (433)954 9444",
        location: "New York City"
    },
    sections: {
        education: [
            {
                degree: "Bachelors in Criminal Justice",
                schoolName: "United States Military Academy",
                location: "West Point, US",
                startDate: "1998",
                endDate: "2001",
                description: "GPA: 3.8 — Dean’s List all semesters. ",
                id: uniqid()
            }
        ],
        work: [
            {
                companyName: "Punisher Inc.",
                positionTitle: "Independent Operations Specialist",
                location: "New York City, US",
                jobDescription: "Operates off-the-grid in targeted risk mitigation. " +
                    "Skilled in surveillance, infiltration, and conflict de-escalation (when possible). " +
                    "Operates under strict moral code focused on justice and protection of the innocent. ",
                startDate: "2013",
                endDate: "present",
                id: uniqid()
            },
            {
                companyName: "Private Security Consultant – Freelance",
                positionTitle: "Consultant",
                location: "New York City, US",
                jobDescription: "Contracted by federal agencies and private clients for high-threat protection ops. " +
                    "Provided tactical training to elite security teams. " +
                    "Oversaw extraction protocols in unstable zones. ",
                startDate: "2010",
                endDate: "2012",
                id: uniqid()
            },
            {
                companyName: "Marine Force Recon – U.S. Marine Corps",
                positionTitle: "Captain",
                location: "Kandahar, Afghanistan",
                jobDescription: "Led over 40 high-risk missions in Afghanistan and Iraq with zero civilian casualties. " +
                    "Received Silver Star, Bronze Star, and Navy Cross for valor. " +
                    "Specialized in reconnaissance, direct action, and hostage recovery. ",
                startDate: "2001",
                endDate: "2009",
                id: uniqid()
            }
        ]
    }
}

export default exampleData;