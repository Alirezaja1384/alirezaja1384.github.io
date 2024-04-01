import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/AlternateEmail";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { ContactInfo, ContactInfoType } from "src/types/contactInfo";

const CONTACT_INFO_TYPE_ICON: Record<ContactInfoType, typeof CallIcon> = {
    cellphone: CallIcon,
    email: EmailIcon,
    github: GitHubIcon,
    linkedin: LinkedInIcon,
    telegram: TelegramIcon,
};

function contactInfoHref(cInfo: ContactInfo): string {
    const val = cInfo.value[0] === "@" ? cInfo.value.substring(1) : cInfo.value;
    switch (cInfo.type) {
        case "cellphone":
            return `tel:${val}`;
        case "email":
            return `mailto:${val}`;
        case "linkedin":
            return `https://www.linkedin.com/in/${val}`;
        case "telegram":
            return `https://t.me/${val}`;
        case "github":
            return `https://github.com/${val}`;
    }
}

function ContactInfoItem({ cInfo }: { cInfo: ContactInfo }) {
    const Icon = CONTACT_INFO_TYPE_ICON[cInfo.type];
    return (
        <li>
            <a
                target="_blank"
                rel="noreferrer"
                className="no-style"
                href={contactInfoHref(cInfo)}
            >
                <Icon /> {cInfo.value}
            </a>
        </li>
    );
}

function ContactMeComponent({ contactInfo }: { contactInfo: ContactInfo[] }) {
    return (
        <div className="w-full py-1">
            <h4 className="text-lg font-bold">تماس با من</h4>
            <ul style={{ direction: "ltr" }} className="text-left m-1">
                {contactInfo.map((cInfo) => (
                    <ContactInfoItem
                        key={`${cInfo.type}:${cInfo.value}`}
                        cInfo={cInfo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ContactMeComponent;
