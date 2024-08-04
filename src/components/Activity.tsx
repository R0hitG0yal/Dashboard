"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { day: "1", clicks: 5000 },
  { day: "2", clicks: 8000 },
  { day: "3", clicks: 6000 },
  { day: "4", clicks: 10000 },
  { day: "5", clicks: 12000 },
  { day: "6", clicks: 9000 },
  { day: "7", clicks: 13000 },
  { day: "8", clicks: 8000 },
  { day: "9", clicks: 10000 },
  { day: "10", clicks: 14000 },
  { day: "11", clicks: 5000 },
  { day: "12", clicks: 8000 },
  { day: "13", clicks: 6000 },
  { day: "14", clicks: 10000 },
  { day: "15", clicks: 12000 },
  { day: "16", clicks: 9000 },
  { day: "17", clicks: 13000 },
  { day: "18", clicks: 8000 },
  { day: "19", clicks: 10000 },
  { day: "20", clicks: 14000 },
  { day: "21", clicks: 5000 },
  { day: "22", clicks: 8000 },
  { day: "23", clicks: 6000 },
  { day: "24", clicks: 10000 },
  { day: "25", clicks: 12000 },
  { day: "26", clicks: 9000 },
  { day: "27", clicks: 13000 },
  { day: "28", clicks: 8000 },
  { day: "29", clicks: 10000 },
  { day: "30", clicks: 14000 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function ActivityGraph() {
  return (
    <Card className="bg-slate-900 border-slate-900">
      <CardHeader>
        <CardTitle className="text-gray-200">Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer className="w-full h-32 lg:h-44" config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              dataKey={"clicks"}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="clicks" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
