import "./css/app.css";
import SidebarComponent from "./components/Sidebar";
import ResumeContentComponent from "./components/ResumeContent";
import { useEffect, useState } from "react";
import axios from "axios";
import { concatUrl } from "./utils/url";
import { API_ROUTES, API_URL } from "./config";
import applyCaseMiddleware from "axios-case-converter";
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
                    <div className="w-full text-center">
                        <p>Loading</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
