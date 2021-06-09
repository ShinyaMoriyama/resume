import React from "react";

const WithBackground = ({ component: Component }) => (
    <div className="w-fill">
        <div className="sm:h-1 bg-indigo-600"></div>
        <div className="flex items-center justify-center h-screen bg-indigo-600">
            <Component />
        </div>
    </div>
);

export default WithBackground;
