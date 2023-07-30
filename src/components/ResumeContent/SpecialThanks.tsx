import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import GitHubIcon from "@mui/icons-material/GitHub";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ArticleIcon from "@mui/icons-material/Article";
import LanguageIcon from "@mui/icons-material/Language";

const specialThanks: {
    id: string;
    href: string;
    text: string;
    icon: React.ReactElement;
}[] = [
    {
        id: "online-cv",
        text: "پروژه‌ی online-cv از sharu725",
        icon: <GitHubIcon />,
        href: "https://github.com/sharu725/online-cv",
    },
    {
        id: "free-dns",
        text: "پروژه‌ی FreeDNS از Joshua Anderson",
        icon: <LanguageIcon />,
        href: "https://freedns.afraid.org/",
    },
    {
        id: "user-icon",
        text: "آیکون کاربر از Smashicons - Flaticon",
        icon: <AppsIcon />,
        href: "https://www.flaticon.com/authors/smashicons",
    },
    {
        id: "loading-icon",
        text: "آیکون بارگذاری از loading.io",
        icon: <HourglassBottomIcon />,
        href: "https://loading.io/",
    },
    {
        id: "resume-icon",
        text: "آیکون رزومه از Icons8",
        icon: <ArticleIcon />,
        href: "https://icons8.com/icon/115648/resume",
    },
];

function SpecialThanksComponent() {
    return (
        <div className="m-2">
            <h2 className="font-bold text-xl">تشکر ویژه:</h2>
            <div className="mr-1">
                <ul>
                    {specialThanks.map((st) => (
                        <li key={st.id}>
                            <a target="_blank" rel="noreferrer" href={st.href}>
                                {st.icon} {st.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SpecialThanksComponent;
