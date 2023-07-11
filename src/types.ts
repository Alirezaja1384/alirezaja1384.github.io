export enum JobStatus {
    LOOKING_FOR_JOB = "looking_for_job",
    EMPLOYED = "employed",
    FREELANCING = "freelancing",
}

export interface AboutMe {
    fullName: string;
    jobTitle: string;
    imageUrl: string | null;
    age?: number;
    birthDate: string;
    jobStatus: JobStatus;
}

export interface ContactInfo {
    cellphoneNumber: string;
    emailAddress: string;
    linkedinUsername: string;
    telegramUsername: string;
    githubUsername: string;
}

export interface NamePercentage {
    name: string;
    percentage: number;
}

export interface Project {
    name: string;
    description: string;
    links: {
        title: string;
        link: string;
    }[];
}

export interface WorkExperience {
    title: string;
    description: string;
    companyName: string | null;
    companyWebsite: string | null;
    startDate: string;
    endDate: string;
}

export interface Resume {
    about: AboutMe;
    contactInfo: ContactInfo;
    skills: NamePercentage[];
    interests: NamePercentage[];
    projects: Project[];
    workExperiences: WorkExperience[];
}
