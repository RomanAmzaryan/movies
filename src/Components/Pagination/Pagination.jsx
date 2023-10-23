import React from "react";

import "./pagination.css";
const Pagination = ({ totalPosts, pagePostsCount, setCurrentPage }) => {
    let pages = [];
    for (let i = 1; i <= Math.ceil(totalPosts / pagePostsCount); i++) {
        pages.push(i);
    }

    return (
        <div className="pagination-buttons-cont">
            {pages.map((page, index) => {
                return (
                    <button
                        className="pagination-button"
                        key={index}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                );
            })}
        </div>
    );
};

export default Pagination;
