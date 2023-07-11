import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";

import { toLocalDate } from "../utils/date";
import { WorkExperience } from "../types";

function WorkExperiencesComponent({
    icon,
    workExperiences,
}: {
    icon?: React.ReactElement;
    workExperiences: WorkExperience[];
}) {
    return (
        <div className="m-2">
            <h2 className="font-bold text-xl text-blue">
                {icon} تجربه ها کاری من:
            </h2>
            <div>
                {workExperiences.map((experience) => (
                    <WorkExperienceComponent experience={experience} />
                ))}
            </div>
        </div>
    );
}

function WorkExperienceComponent({
    experience,
}: {
    experience: WorkExperience;
}) {
    return (
        <div key={experience.title} className="my-3">
            <div className="flex flex-wrap justify-between">
                <h4 className="font-bold text-lg">{experience.title}</h4>
                {experience.startDate && experience.endDate && (
                    <span className="inline-flex items-center text-sm text-gray-600 mr-2 lg:text-base">
                        از {toLocalDate(experience.startDate, "short")} تا{" "}
                        {toLocalDate(experience.endDate, "short")}
                    </span>
                )}
            </div>
            <div className="mr-2">
                {experience.companyName && (
                    <p className="text-gray-600">
                        {experience.companyName}
                        {experience.companyWebsite && (
                            <>
                                {" "}
                                |{" "}
                                <a
                                    className="no-style"
                                    href={experience.companyWebsite}
                                >
                                    <LaunchIcon fontSize="small" /> وبسایت شرکت
                                </a>
                            </>
                        )}
                    </p>
                )}
                <p className="text-gray-600">{experience.description}</p>
            </div>
        </div>
    );
}

export default WorkExperiencesComponent;
