import { useEffect, useState } from "react";
import Link from "next/link";
import SVG from "@/components/elements/Allsvg";
import axios from "axios";

export default function AnnualReport({ data }) {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get("http://localhost:4001/api/annual-reports/");
                setReports(response.data.annualReports);
            } catch (error) {
                console.error("Failed to fetch annual reports:", error);
            }
        };

        fetchReports();
    }, []);

    return (
        <>
            <div className="container project__area-three">
                {data.map((item) => (
                    <div key={item._id} className="row">
                        <div className="col-xl-7 space-betweeni col-lg-8">
                            <div className="mb-50 dev_gover">
                                <span>{item.title}</span>
                                <h2 className="mt-4" style={{ color: '#110B79' }}>
                                    {item.subtitle}
                                </h2>
                            </div>
                            <div className="dev_customsize mt-4" style={{ color: '#282739' }}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                ))}

                    <div className="row align-items-center justify-content-center">
                {Array.isArray(reports) && reports.length > 0 ? (
                            reports.map((report, index) => (
                            <div key={index}  className="sidebar__widget-dev">
                                <h4 className="sidebar__widget-title">{report.year}</h4>
                                <Link href={`http://localhost:4001/media/${report.document}`} passHref>
                                    <button className="btn-two">
                                        <SVG caseValue='case14' /> view report
                                    </button>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No reports available</p>
                    )}
                        </div>
            </div>
        </>
    );
}
