import EngineeringIcon from "@mui/icons-material/Engineering";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import LaptopIcon from "@mui/icons-material/Laptop";

import ProjectsComponent from "./Projects";
import WorkExperiencesComponent from "./WorkExperiences";
import LevelRepresentationComponent from "./LevelRepresentation";
import { ResumeProfile } from "src/types/resumeProfile";
import { NoBreak } from "../utils";
import AboutMeComponent from "./AboutMe";
import CopyrightComponent from "../shared/Copyright";

function ResumeContentComponent({
    aboutMe,
    interests,
    skills,
    projects,
    workExperiences,
}: Pick<
    ResumeProfile,
    "aboutMe" | "interests" | "skills" | "projects" | "workExperiences"
>) {
    return (
        <div className="flex flex-col flex-grow p-5">
            <AboutMeComponent aboutMe={aboutMe} />

            <NoBreak>
                <LevelRepresentationComponent
                    title="علاقه‌مندی های من"
                    icon={<LightbulbCircleIcon fontSize="large" />}
                    levels={interests}
                />
            </NoBreak>

            <NoBreak>
                <LevelRepresentationComponent
                    title="توانایی های من"
                    icon={<BuildCircleIcon fontSize="large" />}
                    levels={skills}
                />
            </NoBreak>

            <WorkExperiencesComponent
                icon={<EngineeringIcon fontSize="large" />}
                workExperiences={workExperiences}
            />

            <ProjectsComponent
                icon={<LaptopIcon fontSize="large" />}
                projects={projects}
            />

            <div className="md:hidden">
                <CopyrightComponent theme="blue" />
            </div>
        </div>
    );
}

export default ResumeContentComponent;
