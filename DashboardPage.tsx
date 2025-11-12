
import React from 'react';
import KpiCard from '../components/KpiCard';
import { mockAnalyticsData, mockStudents } from '../services/mockData';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartBarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const ExclamationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);


const DashboardPage: React.FC = () => {
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-heading">Dashboard</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard title="Avg. GPA" value="3.62" icon={<ChartBarIcon />} change="0.04" changeType="increase" />
                <KpiCard title="Attendance Rate" value="92.8%" icon={<CheckCircleIcon />} change="1.5%" changeType="increase" />
                <KpiCard title="Students at Risk" value="124" icon={<ExclamationIcon />} change="8" changeType="decrease" />
                <KpiCard title="Faculty Load Avg." value="3.2 Courses" icon={<ChartBarIcon />} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 bg-stone-800/50 p-6 rounded-lg border border-stone-700/50">
                    <h2 className="text-xl font-bold font-heading mb-4">Semester GPA Trend</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={mockAnalyticsData.gpaTrend} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#52525b" />
                            <XAxis dataKey="semester" stroke="#a1a1aa" />
                            <YAxis stroke="#a1a1aa" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#303030', border: '1px solid #52525b' }}
                                labelStyle={{ color: '#FAF4F4' }}
                            />
                            <Legend wrapperStyle={{ color: '#FAF4F4' }} />
                            <Bar dataKey="avgGpa" fill="#CF5256" name="Average GPA" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-stone-800/50 p-6 rounded-lg border border-stone-700/50">
                    <h2 className="text-xl font-bold font-heading mb-4">Recent Activity</h2>
                    <ul className="space-y-4">
                        {mockStudents.slice(0, 5).map((student, index) => (
                            <li key={student.id} className="flex items-center space-x-3">
                                <img className="h-10 w-10 rounded-full filter grayscale" src={student.avatar} alt={student.name} />
                                <div>
                                    <p className="text-sm font-medium text-[#FAF4F4]">{student.name} enrolled</p>
                                    <p className="text-xs text-stone-400">in {["CS101", "PHY201", "ENG305", "CS202", "BIO101"][index]}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
