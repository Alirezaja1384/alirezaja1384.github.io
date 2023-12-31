import axios from "axios";
import { useEffect, useState } from "react";
import applyCaseMiddleware from "axios-case-converter";

import "./css/app.css";
import ResumeComponent from "src/components/Resume";
import LoadingComponent from "src/components/Loading";

import { RESUME_DATA_URL } from "src/config";

const client = applyCaseMiddleware(axios.create());

function App() {
    const [resume, setResume] = useState<Resume | null>(null);

    const fetchResume = () => {
        client.get<Resume>(RESUME_DATA_URL).then((response) => {
            setResume(response.data);
        });
    };

    useEffect(fetchResume, []);

    useEffect(() => {
        if (resume) document.title = `رزومه‌ی من | ${resume.about.fullName}`;
    }, [resume]);

    return (
        <div id="app">
            <div id="content">
                {resume ? (
                    <ResumeComponent resume={resume} />
                ) : (
                    <LoadingComponent />
                )}
            </div>
        </div>
    );
}

export default App;
