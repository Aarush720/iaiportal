
import React, { useState } from 'react';
import { Course } from '../types';
import { mockCourses } from '../services/mockData';

const CoursesPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-heading">Courses</h1>
                <button 
                    onClick={() => setShowModal(true)}
                    className="bg-[#CF5256] text-white font-bold py-2 px-4 rounded-md transition-all duration-300 hover:bg-rose-700 hover:shadow-lg hover:shadow-[#CF5256]/40"
                >
                    Add Course
                </button>
            </div>

            <div className="overflow-x-auto bg-stone-800/50 border border-stone-700/50 rounded-lg">
                <table className="min-w-full divide-y divide-stone-700">
                    <thead className="bg-stone-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Course Title</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Code</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Department</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Instructor</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Credits</th>
                        </tr>
                    </thead>
                    <tbody className="bg-stone-800/50 divide-y divide-stone-700">
                        {mockCourses.map((course) => (
                            <tr key={course.id} className="hover:bg-stone-700/50 transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#FAF4F4]">{course.title}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-300">{course.code}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-300">{course.department}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-300">{course.instructor}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-stone-300">{course.credits}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* TODO: Implement a proper modal component */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                    <div className="bg-[#303030] p-8 rounded-lg w-1/3 border border-stone-700">
                        <h2 className="text-xl font-bold mb-4">Add Course</h2>
                        <p className="text-stone-300">Course add/edit form would be here.</p>
                        <button onClick={() => setShowModal(false)} className="mt-6 bg-stone-700 text-white py-2 px-4 rounded-md hover:bg-stone-600">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CoursesPage;
