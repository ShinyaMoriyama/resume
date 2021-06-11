import { Fragment, useState } from "react";
import WithBackground from "./components/common/withBackground";
// import NavBar from "./components/navBar";
import Projects from "./components/projects";
import Profile from "./components/profile";
import Sidebar from "./components/sideBar";
import UserContext from "./context/userContext";
// import './App.css';

function App() {
    const initialCondition = { key: "", value: "" };
    const [disp, setDisp] = useState("");
    const [condition, setCondition] = useState(initialCondition);

    const handleDisp = (disp) => {
        setDisp(disp);
        setCondition(initialCondition);
    };

    const handleCondition = (key, value) => {
        console.log(value);
        setCondition({ key, value });
    };

    const renderSwitch = (disp) => {
        switch (disp) {
            case "Projects":
                return (
                    <UserContext.Provider
                        value={{
                            condition: condition,
                            handleCondition: handleCondition,
                        }}
                    >
                        <WithBackground>
                            <Projects />
                        </WithBackground>
                    </UserContext.Provider>
                );
            default:
                return (
                    <WithBackground>
                        <Profile />
                    </WithBackground>
                );
        }
    };

    return (
        <Fragment>
            <Sidebar handleClick={handleDisp} />
            <div className="relative md:ml-48 bg-blueGray-100">
                <main>{renderSwitch(disp)}</main>
            </div>
        </Fragment>
    );
}

export default App;
