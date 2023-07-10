import "./css/app.css";
import SidebarComponent from "./components/Sidebar";
import ResumeContentComponent from "./components/ResumeContent";

function App() {
    return (
        <div id="app" className="w-full">
            <div
                id="content"
                className="flex flex-wrap mx-auto w-full lg:my-8 lg:w-2/3"
            >
                <div className="flex w-full lg:w-[30%]">
                    <SidebarComponent />
                </div>
                <div className="flex w-full lg:w-[70%]">
                    <ResumeContentComponent />
                </div>
            </div>
        </div>
    );
}

export default App;
