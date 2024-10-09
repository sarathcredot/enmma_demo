'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import Statementlist from "./Statementlist";
import Pagination from "./Pagination";
import Link from "next/link";
import SVG from "@/components/elements/Allsvg";

export default function Statement({ style, showItem, showPagination }) {
    
    const [currentPage, setCurrentPage] = useState(1);
    const [groupedData, setGroupedData] = useState([]);

    const showLimit = showItem || 2; // Default to 10 items per page
    const paginationItem = 4; // Number of pagination buttons to display

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/financial-statements`);
                const groupedByYear = groupDataByYear(response.data.financialStatements);
                setGroupedData(groupedByYear);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // Function to group data by year
    const groupDataByYear = (data) => {
        return data.reduce((acc, statement) => {
            const { year } = statement;
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(statement);
            return acc;
        }, {});
    };

    const totalPages = Math.ceil(Object.keys(groupedData).length / showLimit);

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * showLimit;
        const endIndex = startIndex + showLimit;
        const keys = Object.keys(groupedData).slice(startIndex, endIndex);
        return keys.map(key => ({ year: key, statements: groupedData[key] }));
    };

    const getPaginationGroup = () => {
        const start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
        return new Array(paginationItem).fill().map((_, idx) => start + idx + 1).filter(page => page <= totalPages);
    };

    const next = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    const prev = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    const handleActive = (page) => setCurrentPage(page);

    return (
        <>
            <div>
                {getPaginatedData().length === 0 ? (
                    <h3>No Statements Found</h3>
                ) : (
                    getPaginatedData().map((group) => (
                        <div key={group.year} className="statement-main m-0">
                            <div className="dev-statmentlist container">
                                <h1 className="fw-title">{group.year}</h1>
                                {group.statements.map(item => (
                                    <div className="state-list" key={item._id}>
                                        <span>{new Date(item.data).toLocaleDateString()}</span>
                                        <span className="text-nowrap">
                                            <Link href={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.statements}`}>
                                                <SVG caseValue='case14' />&nbsp; &nbsp;VIEW
                                            </Link>
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                )}
            </div>

            {showPagination && totalPages > 1 && (
                <Pagination
                    getPaginationGroup={getPaginationGroup()}
                    currentPage={currentPage}
                    pages={totalPages}
                    next={next}
                    prev={prev}
                    handleActive={handleActive}
                />
            )}
        </>
    );
}
