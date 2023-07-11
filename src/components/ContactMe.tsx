import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ContactInfo } from "../types";

function ContactMeComponent({
    cellphoneNumber,
    emailAddress,
    linkedinUsername,
    telegramUsername,
    githubUsername,
}: ContactInfo) {
    return (
        <div className="w-full px-4 py-2">
            <h4 className="text-lg font-bold">تماس با من</h4>
            <ul style={{ direction: "ltr" }} className="text-left m-1">
                <li>
                    <a className="no-style" href={`tel:${cellphoneNumber}`}>
                        <CallIcon /> {cellphoneNumber}
                    </a>
                </li>
                <li>
                    <a className="no-style" href={`mailto:${emailAddress}`}>
                        <EmailIcon /> {emailAddress}
                    </a>
                </li>
                <li>
                    <a
                        className="no-style"
                        href={`https://www.linkedin.com/in/${linkedinUsername}`}
                    >
                        <LinkedInIcon /> @{linkedinUsername}
                    </a>
                </li>
                <li>
                    <a
                        className="no-style"
                        href={`https://t.me/${telegramUsername}`}
                    >
                        <TelegramIcon /> @{telegramUsername}
                    </a>
                </li>
                <li>
                    <a
                        className="no-style"
                        href={`https://github.com/${githubUsername}`}
                    >
                        <GitHubIcon /> @{githubUsername}
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ContactMeComponent;
