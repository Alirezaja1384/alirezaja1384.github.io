enum JobStatus {
    LOOKING_FOR_JOB = "looking_for_job",
    EMPLOYED = "employed",
    FREELANCING = "freelancing",
}

interface AboutMe {
    fullName: string;
    jobTitle: string;
    imageUrl: string | null;
    age?: number;
    birthDate: string;
    jobStatus: JobStatus;
}

interface ContactInfo {
    cellphoneNumber: string;
    emailAddress: string;
    linkedinUsername: string;
    telegramUsername: string;
    githubUsername: string;
}

interface NamePercentage {
    name: string;
    percentage: number;
}

interface Project {
    name: string;
    description: string;
    links: {
        title: string;
        link: string;
    }[];
}

interface WorkExperience {
    title: string;
    description: string;
    companyName: string | null;
    companyWebsite: string | null;
    startDate: string;
    endDate: string;
}

interface Resume {
    about: AboutMe;
    contactInfo: ContactInfo;
    skills: NamePercentage[];
    interests: NamePercentage[];
    projects: Project[];
    workExperiences: WorkExperience[];
}
