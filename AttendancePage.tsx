
import React from 'react';
import { mockAttendance } from '../services/mockData';

const AttendancePage: React.FC = () => {

    const handleExport = () => {
        // TODO: Implement actual CSV export functionality
        alert('CSV export functionality to be implemented.');
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Present': return 'bg-green-500/20 text-green-300';
            case 'Absent': return 'bg-red-500/20 text-red-300';
            case 'Late': return 'bg-yellow-500/20 text-yellow-300';
            case 'Excused': return 'bg-blue-500/20 text-blue-300';
            default: return 'bg-stone-500/20 text-stone-300';
        }
    };
    
    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-heading">Attendance</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-stone-800/50 p-6 rounded-lg border border-stone-700/50 h-fit">
                    <h2 className="text-xl font-bold font-heading mb-4">Record Attendance</h2>
                    <form className="space-y-4">
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-stone-300">Course</label>
                            <select id="course" className="mt-1 block w-full bg-stone-800 border border-stone-700 rounded-md py-2 px-3 focus:outline-none focus:ring-[#CF5256] focus:border-[#CF5256]">
                                <option>CS101 - Introduction to Algorithms</option>
                                <option>PHY201 - Quantum Mechanics I</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="date" className="block text-sm font-medium text-stone-300">Date</label>
                            <input type="date" id="date" defaultValue={new Date().toISOString().substring(0, 10)} className="mt-1 block w-full bg-stone-800 border border-stone-700 rounded-md py-2 px-3 focus:outline-none focus:ring-[#CF5256] focus:border-[#CF5256]" />
                        </div>
                        <button type="submit" className="w-full bg-[#CF5256] text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-rose-700">Load Roster</button>
                    </form>
                </div>

                <div className="lg:col-span-2 bg-stone-800/50 p-6 rounded-lg border border-stone-700/50">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold font-heading">Attendance Summary for CS101</h2>
                        <button onClick={handleExport} className="text-sm border border-stone-600 py-1 px-3 rounded-md hover:bg-stone-700 transition-colors">Export CSV</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-stone-700">
                             <thead className="bg-stone-800">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Student Name</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Student ID</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-700">
                                {mockAttendance.map(record => (
                                    <tr key={record.studentId}>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#FAF4F4]">{record.studentName}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-400">{record.studentId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(record.status)}`}>
                                                {record.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AttendancePage;
