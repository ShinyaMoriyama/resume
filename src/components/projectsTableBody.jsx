import React, { useEffect, useState, useContext } from "react";
import { fileterProjectData, getProjectsData } from "../data/projectsData";
import VerticalBadge from "./common/verticalBadge";
import UserContext from "../context/userContext";

function ProjectsTableBody() {
    const { condition, handleCondition } = useContext(UserContext);
    const [projectsData, setProjectData] = useState([]);

    useEffect(() => {
        const projectsData = condition.key
            ? fileterProjectData(condition.key, condition.value)
            : getProjectsData();
        console.log("filtered", projectsData.length);
        setProjectData(projectsData);
    }, [condition]);

    return (
        <tbody className="bg-indigo-200 divide-y divide-gray-200">
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
                                handleCondition(
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
                            {project.title}
                            <br />
                            <span
                                onClick={(e) =>
                                    handleCondition("role", e.target.innerText)
                                }
                                className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                                style={{ cursor: "pointer" }}
                            >
                                {project.role}
                            </span>
                        </div>
                    </td>
                    <td className="px-6 py-4">
                        <div className="text-sm text-gray-500 whitespace-normal">
                            {project.benefits}
                        </div>
                        <br />
                        <div className="text-sm text-gray-900 whitespace-pre">
                            {"- " +
                                project.descriptions.replaceAll("\\n", "\n- ")}
                        </div>
                    </td>
                    <td className="px-6 py-4 whitespace-pre">
                        <VerticalBadge
                            handleClick={(e) =>
                                handleCondition("languages", e.target.innerText)
                            }
                            className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                            textWithReturn={project.languages}
                        />
                    </td>
                    <td className="px-6 py-4 whitespace-pre">
                        <VerticalBadge
                            handleClick={(e) =>
                                handleCondition("db", e.target.innerText)
                            }
                            className="px-2 text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
                            textWithReturn={project.db}
                        />
                    </td>
                    <td className="px-6 py-4 whitespace-pre">
                        <VerticalBadge
                            handleClick={(e) =>
                                handleCondition("libraries", e.target.innerText)
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
