
import React from 'react';
import { mockAnalyticsData } from '../services/mockData';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

const AnalyticsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold font-heading">Analytics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700/50">
          <h2 className="text-xl font-bold font-heading mb-4">Overall GPA Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockAnalyticsData.gpaTrend} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#52525b" />
              <XAxis dataKey="semester" stroke="#a1a1aa" />
              <YAxis stroke="#a1a1aa" />
              <Tooltip contentStyle={{ backgroundColor: '#303030', border: '1px solid #52525b' }} />
              <Legend />
              <Line type="monotone" dataKey="avgGpa" stroke="#CF5256" strokeWidth={2} name="Average GPA" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700/50">
          <h2 className="text-xl font-bold font-heading mb-4">Grade Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={mockAnalyticsData.gradeDistribution} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label>
                {mockAnalyticsData.gradeDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#303030', border: '1px solid #52525b' }} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
        <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700/50">
          <h2 className="text-xl font-bold font-heading mb-4">Attendance Summary</h2>
           <ResponsiveContainer width="100%" height={300}>
                <BarChart data={mockAnalyticsData.attendanceSummary}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#52525b" />
                    <XAxis dataKey="name" stroke="#a1a1aa" />
                    <YAxis stroke="#a1a1aa" />
                    <Tooltip contentStyle={{ backgroundColor: '#303030', border: '1px solid #52525b' }} />
                    <Bar dataKey="value" name="Records">
                        {mockAnalyticsData.attendanceSummary.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.fill} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
  );
};

export default AnalyticsPage;
