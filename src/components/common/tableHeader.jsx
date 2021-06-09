import React from "react";

const TableHeader = ({ className, name }) => (
    <th scope="col" className={className}>
        {name}
    </th>
);

export default TableHeader;
