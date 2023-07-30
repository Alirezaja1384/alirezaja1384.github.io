import AppsIcon from "@mui/icons-material/Apps";
import GitHubIcon from "@mui/icons-material/GitHub";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ArticleIcon from "@mui/icons-material/Article";
import LanguageIcon from "@mui/icons-material/Language";

function SpecialThanksComponent() {
    return (
        <div className="m-2">
            <h2 className="font-bold text-xl">تشکر ویژه:</h2>
            <div className="mr-1">
                <ul>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/sharu725/online-cv"
                        >
                            <GitHubIcon /> پروژه‌ی online-cv از sharu725
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.flaticon.com/authors/smashicons"
                        >
                            <AppsIcon /> آیکون کاربر از Smashicons - Flaticon
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://loading.io/"
                        >
                            <HourglassBottomIcon /> آیکون بارگذاری از loading.io
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://icons8.com/icon/115648/resume"
                        >
                            <ArticleIcon /> آیکون رزومه از Icons8
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://freedns.afraid.org/"
                        >
                            <LanguageIcon /> پروژه‌ی FreeDNS
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SpecialThanksComponent;
