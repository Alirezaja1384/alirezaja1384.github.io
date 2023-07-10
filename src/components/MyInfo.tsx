import React from "react";
import { toLocalDate } from "../utils/date";
import { formatDigits } from "../utils/text";

export enum JobStatus {
    LOOKING_FOR_JOB = "looking_for_job",
    EMPLOYED = "employed",
    FREELANCING = "freelancing",
}

export interface MoreAboutMeComponentProps {
    age?: number;
    birthDate: string;
    jobStatus: JobStatus;
}

const jobStatusMap: { [key in JobStatus]: React.ReactElement } = {
    looking_for_job: <span className="font-bold">در جستجوی کارم</span>,
    employed: <span className="font-bold">استخدام شده ام</span>,
    freelancing: <span className="font-bold">فریلنسرم</span>,
};

function MoreAboutMeComponent({
    age,
    birthDate,
    jobStatus,
}: MoreAboutMeComponentProps) {
    return (
        <div className="w-full px-4 pt-2">
            <h4 className="text-lg font-bold">درباره من</h4>
            <ul className="m-1">
                <li>
                    متولد {toLocalDate(birthDate, "short")}
                    {age && formatDigits(` (${age} سال)`)}
                </li>
                <li>در حال حاضر {jobStatusMap[jobStatus]}</li>
            </ul>
        </div>
    );
}

export default MoreAboutMeComponent;
