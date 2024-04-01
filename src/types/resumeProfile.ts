import { NameLevelPair } from "./nameLevel";
import { Project } from "./project";
import { User } from "./user";
import { WorkExperience } from "./workExperience";

export type EmploymentStatus = "looking_for_job" | "employed" | "freelancer";

export interface ResumeProfile {
    user: User;
    introduction: string | null;
    aboutMe: string;
    jobTitle: string;
    employmentStatus: EmploymentStatus;
    skills: NameLevelPair[];
    interests: NameLevelPair[];
    projects: Project[];
    workExperiences: WorkExperience[];
}
