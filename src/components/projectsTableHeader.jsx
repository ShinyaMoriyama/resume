import React from "react";
import TableHeader from "./common/tableHeader";

function ProjectsTableHeader() {
    const headerNames = [
        "Belonging",
        "Title (Role)",
        "Description",
        "Language",
        "DB",
        "Libraries",
    ];

    const elements = [];

    headerNames.map((name) => {
        return elements.push(
            <TableHeader
                key={name}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                name={name}
            />
        );
    });

    return (
        <thead className="bg-gray-50">
            <tr>{elements}</tr>
        </thead>
    );
}

export default ProjectsTableHeader;
