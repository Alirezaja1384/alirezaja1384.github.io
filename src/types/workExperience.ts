import { Link } from "./link";

export interface WorkExperience {
    company: string;
    jobTitle: string;
    description: string;
    startDate: string;
    endDate: string | null;
    tags: string[];
    links: Link[];
}
