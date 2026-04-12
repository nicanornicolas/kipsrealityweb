"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import React from "react";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const leaseId = searchParams.get("leaseId") || undefined;

  const handleViewLease = () => {
    if (!leaseId) {
      alert("Lease ID is missing");
      return;
    }
    router.push(`/tenant/content/lease/${leaseId}`);
  };

  return (
    <div className="bg-[#F5F5F5] h-full flex items-center justify-center">
      <button
        onClick={handleViewLease}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        View Lease Details
      </button>
    </div>
  );
};

export default DashboardPage;
