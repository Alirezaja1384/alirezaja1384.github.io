import ProfileComponent from "./Profile";
import ContactMeComponent from "./ContactMe";
import MoreAboutMeComponent from "./MoreAboutMe";
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

            <div className="py-5 md:py-2">
                <MoreAboutMeComponent
                    age={about.age}
                    birthDate={about.birthDate}
                    jobStatus={about.jobStatus}
                />

                <ContactMeComponent {...contactInfo} />
            </div>
        </div>
    );
}

export default ResumeSidebarComponent;
