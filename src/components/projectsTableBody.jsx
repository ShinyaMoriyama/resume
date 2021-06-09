import React, { useEffect, useState } from "react";
import { fileterProjectData, getProjectsData } from "../data/projectsData";
import VerticalBadge from "./common/verticalBadge";

function ProjectsTableBody() {
    const [projectsData, setProjectData] = useState([]);
    useEffect(() => {
        const projectsData = getProjectsData();
        console.log("useEffect!!", projectsData);
        setProjectData(projectsData);
    }, []);

    const handleProjectData = (key, value) => {
        console.log("called!");
        const projectsData = fileterProjectData(key, value);
        setProjectData(projectsData);
    };

    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {projectsData.map((project) => (
                <tr key={project.from + project.to}>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <div className="inline-flex text-sm text-gray-900">
                            {project.from}
                        </div>
                        {" - "}
                        <div className="inline-flex text-sm text-gray-900">
                            {project.to}
                        </div>
                        <br />
                        <span
                            onClick={(e) => {
                                console.log(e.target.innerText);
                                handleProjectData(
                                    "belonging",
                                    e.target.innerText
                                );
                            }}
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                            style={{ cursor: "pointer" }}
                        >
                            {project.belonging}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-normal">
                        <div className="text-sm text-gray-900">
                            {project.title}{" "}
                            <span
                                onClick={(e) =>
                                    handleProjectData(
                                        "role",
                                        e.target.innerText
                                    )
                                }
                                className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                style={{ cursor: "pointer" }}
                            >
                                {project.role}
                            </span>
                        </div>
                        <div className="text-sm text-gray-500">
                            {project.benefits}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-pre">
                        <div className="text-sm text-gray-900">
                            {"- " +
                                project.descriptions.replaceAll("\\n", "\n- ")}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-pre">
                        <VerticalBadge
                            handleClick={(e) =>
                                handleProjectData(
                                    "languages",
                                    e.target.innerText
                                )
                            }
                            className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                            textWithReturn={project.languages}
                        />
                    </td>
                    <td className="px-6 py-4 whitespace-pre">
                        <VerticalBadge
                            handleClick={(e) =>
                                handleProjectData("db", e.target.innerText)
                            }
                            className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                            textWithReturn={project.db}
                        />
                    </td>
                    <td className="px-6 py-4 whitespace-pre">
                        <VerticalBadge
                            handleClick={(e) =>
                                handleProjectData(
                                    "libraries",
                                    e.target.innerText
                                )
                            }
                            className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                            textWithReturn={project.libraries}
                        />
                    </td>
                </tr>
            ))}
        </tbody>
    );
}

export default ProjectsTableBody;
