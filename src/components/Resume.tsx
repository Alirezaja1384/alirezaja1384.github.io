import ResumeContentComponent from "./ResumeContent";
import ResumeSidebarComponent from "./ResumeSidebar";

function ResumeComponent({ resume }: { resume: Resume }) {
    return (
        <>
            <div className="flex w-full md:w-[35%] lg:w-[30%]">
                <ResumeSidebarComponent
                    about={resume.about}
                    contactInfo={resume.contactInfo}
                />
            </div>

            <div className="flex w-full md:w-[65%] lg:w-[70%]">
                <ResumeContentComponent
                    interests={resume.interests}
                    skills={resume.skills}
                    projects={resume.projects}
                    workExperiences={resume.workExperiences}
                />
            </div>
        </>
    );
}

export default ResumeComponent;
