import AppsIcon from "@mui/icons-material/Apps";
import GitHubIcon from "@mui/icons-material/GitHub";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

function SpecialThanksComponent() {
    return (
        <div className="m-2">
            <h2 className="font-bold text-xl">تشکر ویژه:</h2>
            <div className="mr-1">
                <ul>
                    <li>
                        <a href="https://github.com/sharu725/online-cv">
                            <GitHubIcon /> پروژه‌ی online-cv از sharu725
                        </a>
                    </li>
                    <li>
                        <a href="https://www.flaticon.com/authors/smashicons">
                            <AppsIcon /> آیکون کاربر طراحی شده توسط Smashicons -
                            Flaticon
                        </a>
                    </li>
                    <li>
                        <a href="https://loading.io/">
                            <HourglassBottomIcon /> آیکون بارگذاری از loading.io
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SpecialThanksComponent;
