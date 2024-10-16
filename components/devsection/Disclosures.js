'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Statementlist from './Statementlist';
import Pagination from './Pagination';
import Link from 'next/link';
import SVG from '@/components/elements/Allsvg';

export default function Statement({ style, showItem, showPagination }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [groupedData, setGroupedData] = useState([]);
  
  const showLimit = showItem || 2; 
  const paginationItem = 3; 
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/disclosure`);
        const groupedByYear = groupDataByYear(response.data.disclosures);
        setGroupedData(groupedByYear);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const groupDataByYear = (data) => {
    const grouped = data.reduce((acc, statement) => {
      const { year } = statement;
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(statement);
      return acc;
    }, {});

    return Object.keys(grouped)
      .sort((a, b) => b - a) 
      .map((year) => ({
        year: year,
        statements: grouped[year],
      }));
  };

  const totalPages = Math.ceil(groupedData.length / showLimit);

  const getPaginatedData = () => {
    const startIndex = (currentPage - 1) * showLimit;
    const endIndex = startIndex + showLimit;
    return groupedData.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    const start = Math.floor((currentPage - 1) / paginationItem) * paginationItem;
    return new Array(paginationItem)
      .fill()
      .map((_, idx) => start + idx + 1)
      .filter((page) => page <= totalPages);
  };

  const next = () => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  const prev = () => setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleActive = (page) => setCurrentPage(page);

  return (
    <>
      <div>
        {groupedData.length === 0 ? (
          <h3>No Statements Found</h3>
        ) : (
          getPaginatedData().map((group) => (
            <div key={group.year} className="statement-main m-0">
              <div className="dev-statmentlist container">
                <h1 className="fw-title">{group.year}</h1>
                {group.statements.map((item) => (
                  <div className="state-list" key={item._id}>
                    <span className="discloure-list">{item.heading}</span>
                    <span className=" text-nowrap">
                      {item.document ? (
                        <Link href={`${process.env.NEXT_PUBLIC_MEDIA_BASE_URL}${item.document}`}>
                          <SVG caseValue="case14" />
                          &nbsp; &nbsp;VIEW
                        </Link>
                      ) : (
                        <span className=' text-nowrap' style={{fontSize:"13px"}}>No Document </span>
                      )}
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
