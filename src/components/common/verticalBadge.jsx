import React from "react";

const VerticalBadge = ({ handleClick, className, textWithReturn }) =>
    textWithReturn.split("\\n").map((text) => (
        <div key={text} className="table">
            <div className="table-row">
                <div className="table-ceil">
                    <span
                        onClick={handleClick}
                        className={className}
                        style={{ cursor: "pointer" }}
                    >
                        {text}
                    </span>
                </div>
            </div>
        </div>
    ));

export default VerticalBadge;
