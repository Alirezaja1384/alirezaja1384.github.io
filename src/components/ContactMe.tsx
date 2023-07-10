import CallIcon from "@mui/icons-material/Call";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export interface ContactMeComponentProps {
    cellphoneNumber: string;
    telegramUsername: string;
    githubUsername: string;
    stackoverflowId: number;
}

function ContactMeComponent({
    cellphoneNumber,
    telegramUsername,
    githubUsername,
    stackoverflowId,
}: ContactMeComponentProps) {
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
                <li>
                    <a
                        className="no-style"
                        href={`https://stackoverflow.com/users/${stackoverflowId}`}
                    >
                        <QuestionAnswerIcon /> Stackoverflow
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default ContactMeComponent;
