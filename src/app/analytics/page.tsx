"use client";

import Breadcrumb from "@/components/Breadcrumb";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 4000, orders: 240 },
  { month: "Feb", sales: 3000, orders: 198 },
  { month: "Mar", sales: 5000, orders: 305 },
  { month: "Apr", sales: 2780, orders: 189 },
  { month: "May", sales: 1890, orders: 142 },
  { month: "Jun", sales: 2390, orders: 178 },
  { month: "Jul", sales: 3490, orders: 234 },
];

const categoryData = [
  { name: "Electronics", value: 45 },
  { name: "Clothing", value: 25 },
  { name: "Books", value: 15 },
  { name: "Home", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function AnalyticsPage() {
  return (
    <div>
      <Breadcrumb />
      <div className='p-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-6'>Analytics</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Sales Overview */}
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-4'>Sales Overview</h2>
            <div className='h-[300px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={salesData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='month' />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type='monotone'
                    dataKey='sales'
                    stroke='#8884d8'
                    fill='#8884d8'
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Order Trends */}
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-4'>Order Trends</h2>
            <div className='h-[300px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <BarChart data={salesData}>
                  <CartesianGrid strokeDasharray='3 3' />
                  <XAxis dataKey='month' />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey='orders' fill='#82ca9d' />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Distribution */}
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-4'>
              Category Distribution
            </h2>
            <div className='h-[300px]'>
              <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    outerRadius={100}
                    fill='#8884d8'
                    dataKey='value'
                    label={({ name, percent }) =>
                      `${name} ${(percent * 100).toFixed(0)}%`
                    }
                  >
                    {categoryData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Summary Stats */}
          <div className='bg-white p-6 rounded-lg shadow-sm'>
            <h2 className='text-xl font-semibold mb-4'>Summary Statistics</h2>
            <div className='grid grid-cols-2 gap-4'>
              <div className='p-4 bg-blue-50 rounded-lg'>
                <p className='text-sm text-blue-600'>Total Sales</p>
                <p className='text-2xl font-bold text-blue-700'>$22,550</p>
                <p className='text-sm text-blue-600'>+12.5% from last month</p>
              </div>
              <div className='p-4 bg-green-50 rounded-lg'>
                <p className='text-sm text-green-600'>Total Orders</p>
                <p className='text-2xl font-bold text-green-700'>1,486</p>
                <p className='text-sm text-green-600'>+8.2% from last month</p>
              </div>
              <div className='p-4 bg-purple-50 rounded-lg'>
                <p className='text-sm text-purple-600'>Avg. Order Value</p>
                <p className='text-2xl font-bold text-purple-700'>$152</p>
                <p className='text-sm text-purple-600'>+3.1% from last month</p>
              </div>
              <div className='p-4 bg-orange-50 rounded-lg'>
                <p className='text-sm text-orange-600'>Active Customers</p>
                <p className='text-2xl font-bold text-orange-700'>892</p>
                <p className='text-sm text-orange-600'>
                  +15.3% from last month
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
