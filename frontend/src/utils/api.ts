import axios from "axios";
import { ChartData } from "../types/charts";

export const fetchChartData = async (): Promise<ChartData> => {
  const response = await axios.get("http://localhost:5000/api/chart-data");
  return response.data;
};
