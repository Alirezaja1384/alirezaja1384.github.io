import axios from "axios";
import applyCaseMiddleware from "axios-case-converter";
import { useEffect, useState } from "react";

import "./css/app.css";
import LoadingSVG from "./images/loading.svg";
import SidebarComponent from "./components/Sidebar";
import ResumeContentComponent from "./components/ResumeContent";
import { concatUrl } from "./utils/url";
import { API_ROUTES, API_URL } from "./config";
import { Resume } from "./types";

const client = applyCaseMiddleware(axios.create());

function App() {
    const [resume, setResume] = useState<Resume | null>(null);

    useEffect(() => {
        client
            .get<Resume>(concatUrl(API_URL, API_ROUTES.resume))
            .then((response) => {
                setResume(response.data);
            });
    }, []);

    useEffect(() => {
        if (resume) document.title = `رزومه‌ی من | ${resume.about.fullName}`;
    }, [resume]);

    return (
        <div id="app" className="w-full">
            <div
                id="content"
                className="flex flex-wrap mx-auto w-full lg:my-8 lg:w-2/3"
            >
                {resume ? (
                    <>
                        <div className="flex w-full lg:w-[30%]">
                            <SidebarComponent
                                about={resume.about}
                                contactInfo={resume.contactInfo}
                            />
                        </div>

                        <div className="flex w-full lg:w-[70%]">
                            <ResumeContentComponent
                                interests={resume.interests}
                                skills={resume.skills}
                                projects={resume.projects}
                                workExperiences={resume.workExperiences}
                            />
                        </div>
                    </>
                ) : (
                    <div className="flex justify-center w-full">
                        <img
                            src={LoadingSVG}
                            className="w-[75px]"
                            alt="درحال بارگذاری"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
