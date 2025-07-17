import uniqid from "uniqid";

const exampleData = {
    personalDetails: {
        fullName: "Frank Castle",
        email: "frankyboi@gmail.com",
        phoneNumber: "+1 (433)954 9444",
        location: "New York"
    },
    sections: {
        education: [
            {
                degree: "Bachelors of Science",
                schoolName: "New York University",
                location: "New York City, US",
                startDate: "08/2012",
                endDate: "present",
                id: uniqid()
            }
        ],
        work: [
            {
                companyName: "Nelson & Murdock Attorneys at Law",
                positionTitle: "Punisher",
                location: "Hell's Kitchen, NYC",
                jobDescription: "One batch, two batch penny and dime",
                startDate: "02/2018",
                endDate: "present",
                id: uniqid()
            }
        ]
    }
}

export default exampleData;