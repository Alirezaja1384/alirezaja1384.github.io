import { ContactInfo } from "./contactInfo";

export interface User {
    fullName: string;
    birthDate: string | null;
    profileImage: string | null;
    contactInfo: ContactInfo[];
}
