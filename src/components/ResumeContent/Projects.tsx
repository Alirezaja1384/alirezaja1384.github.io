import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { Project } from "src/types/project";
import { NoBreak } from "../utils";
import Tags from "./Tags";

function ProjectsComponent({
    icon,
    projects,
}: {
    icon?: React.ReactElement;
    projects: Project[];
}) {
    return (
        <div className="m-2">
            <h2 className="font-bold text-xl text-blue">
                {icon} پروژه های من:
            </h2>
            <div>
                {projects.map((project) => (
                    <ProjectItem key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectItem({ project }: { project: Project }) {
    return (
        <NoBreak>
            <div className="flex flex-wrap justify-between my-3">
                <div
                    className={`flex flex-col justify-between ${
                        project.links ? "md:w-3/4" : ""
                    }`}
                >
                    <div className="mb-2">
                        <h4 className="font-bold text-lg">{project.name}</h4>
                        <p className="mr-2 text-gray-600">
                            {project.description}
                        </p>
                    </div>

                    <Tags tags={project.tags} />
                </div>

                <ProjectLinksComponent links={project.links} />
            </div>
        </NoBreak>
    );
}

function ProjectLinksComponent({ links }: { links: Project["links"] }) {
    return (
        <div className="pr-2 w-full md:w-1/4">
            <h4 className="text-gray-700 font-bold">پیوندها</h4>
            <ul>
                {links.map((lnk) => (
                    <li key={lnk.url}>
                        <a href={lnk.url}>
                            <LaunchIcon fontSize="small" /> {lnk.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectsComponent;
