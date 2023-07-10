import ProfileComponent from "./Profile";
import ContactMeComponent from "./ContactMe";
import MoreAboutMeComponent, { JobStatus } from "./MyInfo";

function SidebarComponent() {
    return (
        <div id="sidebar" className="flex flex-col flex-grow text-white">
            <ProfileComponent
                fullName="علیرضا جعفری"
                jobTitle="توسعه دهنده وب"
                imageUrl={null}
            />
            <MoreAboutMeComponent
                age={18}
                birthDate="2005-08-16"
                jobStatus={JobStatus.LOOKING_FOR_JOB}
            />
            <ContactMeComponent
                cellphoneNumber="+989386288279"
                emailAddress="alirezaja1384@gmail.com"
                linkedinUsername="alirezaja1384"
                telegramUsername="alirezaja1384"
                githubUsername="alirezaja1384"
            />
        </div>
    );
}

export default SidebarComponent;
