import React from "react";

export function SelectingReportCharacteristics() {
    return (
        <ul className="pagination pagination-sm my-3">
            <li className="page-item"><a href="#" className="page-link bg-dark">Overall</a></li>
            <li className="page-item"><a href="#" className="page-link bg-dark">Morale</a></li>
            <li className="page-item"><a href="#" className="page-link bg-dark">Stress</a></li>
            <li className="page-item"><a href="#" className="page-link bg-dark">Workload</a></li>
        </ul>
    );
}
