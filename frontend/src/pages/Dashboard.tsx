import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Bar, Line } from "react-chartjs-2";
import { fetchChartData } from "../utils/api";
import { ChartData } from "../types/charts";
import { ChartOptions } from "chart.js";
import "../utils/chartConfig";

const Dashboard: React.FC = () => {
    const { data } = useQuery<ChartData>({
    queryKey: ["chartData"],
    queryFn: fetchChartData,
    initialData: {
      labels: [],
      barDatasets: [],
      lineDatasets:[]
    },
  });
  const barData = {
    labels: data?.labels,
    datasets: data?.barDatasets,
  };
  
  const lineData = {
    labels: data?.labels,
    datasets: data?.lineDatasets,
  }; 

  const barOptions: ChartOptions<"bar"> = {
    responsive: true,
    plugins: {
      legend: { 
        position: "top",
        labels: {
          font: {
            size: 16, 
            weight: 'bold',
            family: "'Helvetica Neue', 'Arial', sans-serif",
          },
        },
      },
      title: { 
        display: true, 
        text: "چارت میله‌ای: فروش و درآمد" , 
        font: {
          size: 20,
          family: "Arial, sans-serif",
          weight: "bold",
        },
        color: 'black'
      },
    },
    scales: {
      x: { type: "category" },
      y: { type: "linear", beginAtZero: true },
    },
  };

  const lineOptions: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: { 
        position: "top",
        labels: {
          font: {
            size: 16, 
            weight: 'bold',
            family: "'Helvetica Neue', 'Arial', sans-serif",
          },
        },
      },
      title: { 
        display: true, 
        text: "چارت خطی: بازدید و کلیک‌ها", 
        font: {
          size: 20,
          family: "Arial, sans-serif",
          weight: "bold",
        },
        color: 'black'
      },
    },
    scales: {
      x: { type: "category" },
      y: { type: "linear", beginAtZero: true },
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <div className="bg-slate-50 shadow-xl shadow-gray-500/50 rounded-lg p-6 w-2/3 mr-auto mt-10">        
        {data?.barDatasets && data.barDatasets.length > 0 ? (
          <Bar data={barData} options={barOptions} />
        ) : (
          <p>داده‌ای برای نمایش وجود ندارد</p>
        )}
      </div>
      <div className="bg-slate-50 shadow-xl shadow-gray-500/50 rounded-lg p-6 w-2/3 ml-auto mt-10">
        {data?.lineDatasets && data.lineDatasets.length > 0 ? (
          <Line data={lineData} options={lineOptions} />
        ) : (
          <p>داده‌ای برای نمایش وجود ندارد</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
