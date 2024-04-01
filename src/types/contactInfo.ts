export type ContactInfoType =
    | "cellphone"
    | "email"
    | "linkedin"
    | "telegram"
    | "github";

export interface ContactInfo {
    type: ContactInfoType;
    value: string;
}
