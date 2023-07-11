import EngineeringIcon from "@mui/icons-material/Engineering";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import LaptopIcon from "@mui/icons-material/Laptop";

import SpecialThanksComponent from "./SpecialThanks";
import PercentageRepresentationComponent from "./PercentageRepresentation";
import WorkExperiencesComponent from "./WorkExperiences";
import ProjectsComponent from "./Projects";
import { Resume } from "../types";

function ResumeContentComponent({
    interests,
    skills,
    projects,
    workExperiences,
}: Pick<Resume, "interests" | "skills" | "projects" | "workExperiences">) {
    return (
        <div className="flex flex-col flex-grow p-5">
            <PercentageRepresentationComponent
                title="علاقه‌مندی های من"
                icon={<LightbulbCircleIcon fontSize="large" />}
                interests={interests}
            />

            <PercentageRepresentationComponent
                title="توانایی های من"
                icon={<BuildCircleIcon fontSize="large" />}
                interests={skills}
            />

            <WorkExperiencesComponent
                icon={<EngineeringIcon fontSize="large" />}
                workExperiences={workExperiences}
            />

            <ProjectsComponent
                icon={<LaptopIcon fontSize="large" />}
                projects={projects}
            />

            <SpecialThanksComponent />
        </div>
    );
}

export default ResumeContentComponent;
