import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";

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
                    <ProjectComponent key={project.name} project={project} />
                ))}
            </div>
        </div>
    );
}

function ProjectComponent({ project }: { project: Project }) {
    return (
        <div className="flex flex-wrap justify-between my-3">
            <div className={`w-full pl-2 ${project.links ? "lg:w-3/4" : ""}`}>
                <h4 className="font-bold text-lg">{project.name}</h4>
                <p className="mr-2 text-gray-600">{project.description}</p>
            </div>
            {project.links && <ProjectLinksComponent links={project.links} />}
        </div>
    );
}

function ProjectLinksComponent({ links }: { links: Project["links"] }) {
    return (
        <div className="pr-2 w-full lg:w-1/4">
            <h4 className="text-gray-700 font-bold">پیوندها</h4>
            <ul>
                {links.map((lnk) => (
                    <li key={lnk.title}>
                        <a href={lnk.link}>
                            <LaunchIcon fontSize="small" /> {lnk.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectsComponent;
