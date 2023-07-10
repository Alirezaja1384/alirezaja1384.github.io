import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";

import SpecialThanksComponent from "./SpecialThanks";
import PercentageRepresentationComponent from "./PercentageRepresentation";

const skills = [
    { name: "Python", percentage: 70 },
    { name: "Django", percentage: 70 },
    { name: "Django Rest Framework (DRF)", percentage: 70 },
    { name: "Celery", percentage: 60 },
    { name: "Linux", percentage: 60 },
    { name: "Typescript/Javascript", percentage: 70 },
    { name: "React", percentage: 70 },
    { name: "Docker", percentage: 50 },
    { name: "Redis", percentage: 50 },
    { name: "SQL", percentage: 30 },
];

const interests = [
    { name: "Python", percentage: 90 },
    { name: "Django", percentage: 90 },
    { name: "Linux", percentage: 90 },
    { name: "Typescript/Javascript", percentage: 80 },
    { name: "React", percentage: 80 },
    { name: "Docker", percentage: 70 },
    { name: "SQL", percentage: 50 },
];

function ResumeContentComponent() {
    return (
        <div className="flex flex-col flex-grow p-5">
            <PercentageRepresentationComponent
                title="علاقه‌مندی ها"
                icon={<LightbulbCircleIcon fontSize="large" />}
                interests={interests}
            />
            <PercentageRepresentationComponent
                title="توانایی ها"
                icon={<BuildCircleIcon fontSize="large" />}
                interests={skills}
            />
            <SpecialThanksComponent />
        </div>
    );
}

export default ResumeContentComponent;
