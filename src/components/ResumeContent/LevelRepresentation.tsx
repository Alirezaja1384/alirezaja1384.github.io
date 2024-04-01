import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { NameLevelPair } from "src/types/nameLevel";

function LevelRepresentationComponent({
    title,
    icon,
    levels,
}: {
    title: string;
    icon?: React.ReactElement;
    levels: NameLevelPair[];
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
                {levels.map(({ name, level, maxLevel }) => (
                    <div
                        key={`${name}:${level}:${maxLevel}`}
                        className="w-full"
                    >
                        {name}
                        <ProgressBar
                            bgColor="var(--blue)"
                            completed={(level / maxLevel) * 100}
                            isLabelVisible={false}
                            animateOnRender
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LevelRepresentationComponent;
