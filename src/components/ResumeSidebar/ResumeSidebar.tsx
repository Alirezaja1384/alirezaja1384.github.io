import ProfileComponent from "./Profile";
import ContactMeComponent from "./ContactMe";
import MoreAboutMeComponent from "./MoreAboutMe";
import EtceteraComponent from "./Etcetera";

function ResumeSidebarComponent({
    about,
    contactInfo,
}: Pick<Resume, "about" | "contactInfo">) {
    return (
        <div id="sidebar">
            <ProfileComponent
                fullName={about.fullName}
                jobTitle={about.jobTitle}
                imageUrl={about.imageUrl}
            />

            <div id="sidebar-content" className="py-5 md:py-2">
                <MoreAboutMeComponent
                    birthDate={about.birthDate}
                    jobStatus={about.jobStatus}
                />

                <ContactMeComponent {...contactInfo} />

                <EtceteraComponent />
            </div>
        </div>
    );
}

export default ResumeSidebarComponent;
