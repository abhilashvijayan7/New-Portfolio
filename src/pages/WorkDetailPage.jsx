import React from "react";
import WorkDetail from "../components/WorkDetail";
import { useParams } from "react-router-dom";
import { workPages } from "../data/workPages";

function WorkDetailPage() {
    const { id } = useParams();
    const workData = workPages.find((w) => w.id === parseInt(id));
    if (!workData) return <h1 className="text-center mt-10 text-xl">Work Not Found</h1>;

  return <WorkDetail {...workData} />;
}

export default WorkDetailPage;
