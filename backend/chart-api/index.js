const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;


app.use(cors());


app.get('/api/chart-data', (req, res) => {
  const chartData = {
    labels: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور"],
    barDatasets: [
      {
        label: "تعداد فروش",
        data: [30, 50, 70, 40, 60, 80],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "درآمد",
        data: [1000, 1500, 2000, 1700, 2100, 2500],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
    lineDatasets: [
      {
        label: "تعداد بازدید",
        data: [300, 500, 700, 400, 600, 800],
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.4,
      },
      {
        label: "تعداد کلیک‌ها",
        data: [200, 300, 400, 350, 450, 600],
        borderColor: "rgba(255, 159, 64, 1)",
        backgroundColor: "rgba(255, 159, 64, 0.2)",
        tension: 0.4,
      },
    ],
  };
  res.json(chartData);
});


app.listen(PORT, () => {
  console.log(`API server is running on http://localhost:${PORT}`);
});
