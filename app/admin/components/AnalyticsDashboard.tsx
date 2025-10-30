"use client";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AnalyticsDashboard() {
  const [filters, setFilters] = useState({
    range: "30d",
    careType: "All",
    status: "All",
  });

  // Mock weekly data
  const baseData = [
    { week: "Week 1", leads: 12, approvals: 8, careType: "Assisted Living", status: "active" },
    { week: "Week 2", leads: 19, approvals: 13, careType: "Memory Care", status: "pending" },
    { week: "Week 3", leads: 22, approvals: 16, careType: "Independent", status: "active" },
    { week: "Week 4", leads: 15, approvals: 11, careType: "Memory Care", status: "archived" },
  ];

  // Filter logic
  const filteredData = baseData.filter((d) => {
    const careMatch = filters.careType === "All" || d.careType === filters.careType;
    const statusMatch = filters.status === "All" || d.status === filters.status;
    return careMatch && statusMatch;
  });

  const typeBreakdown = [
    { type: "Assisted Living", count: 12 },
    { type: "Memory Care", count: 8 },
    { type: "Independent", count: 6 },
    { type: "Skilled Nursing", count: 4 },
  ];

  const handleChange = (key: string, value: string) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  return (
    <section className="mt-12 bg-white rounded-2xl p-8 shadow-md border border-sageMint">
      <h2 className="text-2xl font-heading text-sageGreen mb-6 text-center">
        Platform Analytics
      </h2>

      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        <select
          value={filters.range}
          onChange={(e) => handleChange("range", e.target.value)}
          className="border-2 border-sageMint rounded-xl px-4 py-2 text-sageGreen bg-beige/40 focus:outline-none"
        >
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
          <option value="90d">Last 90 Days</option>
        </select>

        <select
          value={filters.careType}
          onChange={(e) => handleChange("careType", e.target.value)}
          className="border-2 border-sageMint rounded-xl px-4 py-2 text-sageGreen bg-beige/40 focus:outline-none"
        >
          <option value="All">All Care Types</option>
          <option value="Assisted Living">Assisted Living</option>
          <option value="Memory Care">Memory Care</option>
          <option value="Independent">Independent</option>
          <option value="Skilled Nursing">Skilled Nursing</option>
        </select>

        <select
          value={filters.status}
          onChange={(e) => handleChange("status", e.target.value)}
          className="border-2 border-sageMint rounded-xl px-4 py-2 text-sageGreen bg-beige/40 focus:outline-none"
        >
          <option value="All">All Statuses</option>
          <option value="active">Active</option>
          <option value="pending">Pending</option>
          <option value="archived">Archived</option>
        </select>
      </div>

      {/* Charts */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Line Chart - Leads vs Approvals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg text-sageGreen mb-3 font-heading text-center">
            Weekly Activity
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="leads"
                stroke="#2F5D50"
                strokeWidth={3}
                name="New Leads"
              />
              <Line
                type="monotone"
                dataKey="approvals"
                stroke="#ABEDD8"
                strokeWidth={3}
                name="Approvals"
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Bar Chart - Care Type Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg text-sageGreen mb-3 font-heading text-center">
            Listings by Care Type
          </h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={typeBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#2F5D50" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
