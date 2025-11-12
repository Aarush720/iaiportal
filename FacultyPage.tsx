
import React, { useState } from 'react';
import { Faculty } from '../types';
import { mockFaculty } from '../services/mockData';

const FacultyPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null);

    const handleEdit = (faculty: Faculty) => {
        setEditingFaculty(faculty);
        setShowModal(true);
    };

    const handleAdd = () => {
        setEditingFaculty(null);
        setShowModal(true);
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold font-heading">Faculty</h1>
                <button 
                    onClick={handleAdd}
                    className="bg-[#CF5256] text-white font-bold py-2 px-4 rounded-md transition-all duration-300 hover:bg-rose-700 hover:shadow-lg hover:shadow-[#CF5256]/40"
                >
                    Add Faculty
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mockFaculty.map(faculty => (
                    <div key={faculty.id} className="bg-stone-800/50 p-6 rounded-lg border border-stone-700/50 text-center">
                        <img src={faculty.avatar} alt={faculty.name} className="w-24 h-24 rounded-full mx-auto filter grayscale mb-4" />
                        <h3 className="text-lg font-bold text-[#FAF4F4]">{faculty.name}</h3>
                        <p className="text-sm text-[#CF5256]">{faculty.title}</p>
                        <p className="text-sm text-stone-400 mt-2">{faculty.department}</p>
                        <p className="text-xs text-stone-500">{faculty.email}</p>
                        <div className="mt-4">
                            <button onClick={() => handleEdit(faculty)} className="text-xs text-stone-400 hover:text-white">Edit</button>
                        </div>
                    </div>
                ))}
            </div>

            {/* TODO: Implement a proper modal component */}
            {showModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
                    <div className="bg-[#303030] p-8 rounded-lg w-1/3 border border-stone-700">
                        <h2 className="text-xl font-bold mb-4">{editingFaculty ? 'Edit' : 'Add'} Faculty</h2>
                        <p className="text-stone-300">Faculty add/edit form would be here.</p>
                        <button onClick={() => setShowModal(false)} className="mt-6 bg-stone-700 text-white py-2 px-4 rounded-md hover:bg-stone-600">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FacultyPage;
