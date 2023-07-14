import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

function PercentageRepresentationComponent({
    title,
    icon,
    interests,
}: {
    title: string;
    icon?: React.ReactElement;
    interests: NamePercentage[];
}) {
    return (
        <div className="flex flex-col m-2">
            <h2 className="font-bold text-xl text-blue">
                {icon} {title}:
            </h2>
            <div
                style={{ direction: "ltr" }}
                className="grid gap-2 grid-cols-1 text-left lg:grid-cols-2 print:grid-cols-2"
            >
                {interests.map((interest) => (
                    <div key={interest.name} className="w-full">
                        {interest.name}
                        <ProgressBar
                            bgColor="var(--blue)"
                            completed={interest.percentage}
                            isLabelVisible={false}
                            animateOnRender
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PercentageRepresentationComponent;
