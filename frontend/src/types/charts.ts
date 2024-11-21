export interface Dataset {
    label: string;
    data: number[];
    backgroundColor?: string;
    borderColor?: string;
    tension?: number;
}

export interface ChartData {
    labels: string[];
    barDatasets: Dataset[];
    lineDatasets: Dataset[];
}