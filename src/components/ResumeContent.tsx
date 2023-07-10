import EngineeringIcon from "@mui/icons-material/Engineering";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LightbulbCircleIcon from "@mui/icons-material/LightbulbCircle";
import LaptopIcon from "@mui/icons-material/Laptop";

import SpecialThanksComponent from "./SpecialThanks";
import PercentageRepresentationComponent from "./PercentageRepresentation";
import WorkExperiencesComponent, { WorkExperience } from "./WorkExperiences";
import ProjectsComponent from "./Projects";

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

const workExperiences: WorkExperience[] = [
    {
        title: "پروژه مجاز آموز",
        description: "پروژه تمرینی جهت تسلط به Django",
        companyName: null,
        companyWebsite: null,
        startDate: "2021-03-26",
        endDate: "2021-10-30",
    },
    {
        title: "کارآموز React",
        description: "یادگیری React و پیاده سازی چند پروژه تمرینی",
        companyName: "شتابدهنده پیشگامان",
        companyWebsite: "https://shetabdehi.com/",
        startDate: "2021-10-23",
        endDate: "2022-03-20",
    },
    {
        title: "برنامه نویس Django و React",
        description: "پیاده سازی Backend پروژه اپ سرام و Frontend پروژه نماد",
        companyName: "شتابدهنده پیشگامان",
        companyWebsite: "https://shetabdehi.com/",
        startDate: "2022-03-21",
        endDate: "2022-09-22",
    },
];

const projects = [
    {
        name: "مجاز آموز",
        description: "پروژه تمرینی برای تسلط به Django",
        links: [
            {
                title: "گیت هاب پروژه",
                link: "https://github.com/Alirezaja1384/MajazAmooz/",
            },
        ],
    },
    {
        name: "اپ سرام (Backend)",
        description: "سامانه فروش کاشی و سرامیک",
        links: [
            { title: "وبسایت پروژه", link: "https://appceram.com/" },
            {
                title: "مستندات API پروژه",
                link: "https://api.appceram.com/schema/redoc/",
            },
        ],
    },
    {
        name: "سامانه نماد (Frontend)",
        description:
            "سامانه نظارت مردی استان یزد (پس از پایان همکاری سامانه بازنویسی شده)",
        links: [{ title: "وبسایت پروژه", link: "https://nemad.ostanyazd.ir/" }],
    },
];

function ResumeContentComponent() {
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
