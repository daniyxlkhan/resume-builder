import uniqid from "uniqid";

const exampleData = {
    personalDetails: {
        fullName: "Frank Castle",
        email: "frankyboi@gmail.com",
        phoneNumber: "+1 (433)954 9444",
        location: "New York"
    },
    sections: {
        educations: [
            {
                degree: "Bachelors of Science",
                schoolName: "New York University",
                location: "New York City, US",
                startDate: "08/2020",
                endDate: "present",
                id: uniqid()
            }
        ]
    }
}

export default exampleData;