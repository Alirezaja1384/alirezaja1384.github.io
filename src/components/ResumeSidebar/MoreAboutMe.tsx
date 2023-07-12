import React from "react";
import { toLocalDate, formatDigits, calculateAge } from "src/utils";

type MoreAboutMeComponentProps = Pick<AboutMe, "birthDate" | "jobStatus">;

const jobStatusMap: { [key in JobStatus]: React.ReactElement } = {
    looking_for_job: <span className="font-bold">در جستجوی کارم</span>,
    employed: <span className="font-bold">استخدام شده ام</span>,
    freelancing: <span className="font-bold">فریلنسرم</span>,
};

function MoreAboutMeComponent({
    birthDate,
    jobStatus,
}: MoreAboutMeComponentProps) {
    return (
        <div className="w-full px-4 py-1">
            <h4 className="text-lg font-bold">درباره من</h4>
            <ul className="m-1">
                <li>
                    متولد {toLocalDate(birthDate, "short")}{" "}
                    {formatDigits(` (${calculateAge(birthDate)} سال)`)}
                </li>
                <li>در حال حاضر {jobStatusMap[jobStatus]}</li>
            </ul>
        </div>
    );
}

export default MoreAboutMeComponent;
