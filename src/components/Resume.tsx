import { ResumeProfile } from "src/types/resumeProfile";
import ResumeContentComponent from "./ResumeContent";
import ResumeSidebarComponent from "./ResumeSidebar";
import { selectObjectFields } from "src/utils/objects";

function ResumeComponent({ resume }: { resume: ResumeProfile }) {
    return (
        <>
            <div className="flex w-full md:w-auto print:w-full">
                <ResumeSidebarComponent
                    {...selectObjectFields(resume, [
                        "user",
                        "jobTitle",
                        "employmentStatus",
                        "introduction",
                    ])}
                />
            </div>

            <div className="flex flex-grow">
                <ResumeContentComponent
                    {...selectObjectFields(resume, [
                        "aboutMe",
                        "interests",
                        "skills",
                        "projects",
                        "workExperiences",
                    ])}
                />
            </div>
        </>
    );
}

export default ResumeComponent;
