import React, { useState } from "react";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Sidebar = () => {
    const [collapseShow, setCollapseShow] = useState("hidden");
    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-48 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() =>
                            setCollapseShow("bg-white m-2 py-3 px-6")
                        }
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    {/* Brand */}
                    <Link
                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        to="/"
                    >
                        Resume
                    </Link>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        Resume
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() =>
                                            setCollapseShow("hidden")
                                        }
                                    >
                                        <i className="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    // className="text-pink-500 hover:text-pink-600 text-xs uppercase py-3 font-bold block"
                                    className="text-indigo-600 hover:text-pink-600 text-xs uppercase py-3 font-bold block"
                                    to="/profile"
                                    onClick={() => {
                                        console.log("Link onClice");
                                        // setControl(1);
                                        // this.forceUpdate();
                                        // updateNavigation(item.name);
                                        window.location = "/profile";
                                    }}
                                >
                                    <i className="fas fa-user-circle opacity-75 mr-2 text-sm"></i>{" "}
                                    Profile
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className="text-indigo-600 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                                    to="/projects"
                                    onClick={() => {
                                        console.log("Link onClice");
                                        // setControl(1);
                                        // this.forceUpdate();
                                        // updateNavigation(item.name);
                                        window.location = "/projects";
                                    }}
                                >
                                    <i className="fas fa-clipboard-list text-blueGray-400 mr-2 text-sm"></i>{" "}
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Sidebar;
