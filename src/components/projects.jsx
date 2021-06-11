import ProjectsTableBody from "./projectsTableBody";
import ProjectsTableHeader from "./projectsTableHeader";

function Projects({ condition, handleCondition }) {
    return (
        <div className="sm:w-5/6 sm:h-5/6 overflow-y-auto sm:rounded-lg mt-auto md:mt-0">
            <div className="flex flex-col">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <ProjectsTableHeader />
                                <ProjectsTableBody
                                    condition={condition}
                                    handleCondition={handleCondition}
                                />
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
