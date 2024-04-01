import { Link } from "./link";

export interface Project {
    name: string;
    description: string;
    tags: string[];
    links: Link[];
}
