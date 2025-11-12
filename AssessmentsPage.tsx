
import React, { useState } from 'react';
import { mockAssessments, mockAssessmentScores } from '../services/mockData';

const AssessmentsPage: React.FC = () => {
    const [scores, setScores] = useState(mockAssessmentScores);
    
    // TODO: Implement actual score update logic with API call
    const handleScoreChange = (studentId: string, assessmentId: string, newScore: string) => {
        const scoreVal = newScore === '' ? null : parseInt(newScore, 10);
        console.log(`Updating score for student ${studentId} on assessment ${assessmentId} to ${scoreVal}`);
        setScores(prevScores => prevScores.map(s => 
            s.studentId === studentId && s.assessmentId === assessmentId ? { ...s, score: scoreVal } : s
        ));
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-heading">Assessments</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 bg-stone-800/50 p-6 rounded-lg border border-stone-700/50 h-fit">
                    <h2 className="text-xl font-bold font-heading mb-4">Add Assessment</h2>
                     <form className="space-y-4">
                        {/* Form fields for adding a new assessment */}
                        <div>
                             <label htmlFor="course" className="block text-sm font-medium text-stone-300">Course</label>
                            <select id="course" className="mt-1 block w-full bg-stone-800 border border-stone-700 rounded-md py-2 px-3 focus:outline-none focus:ring-[#CF5256] focus:border-[#CF5256]">
                                <option>CS101 - Introduction to Algorithms</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-stone-300">Title</label>
                            <input type="text" id="title" className="mt-1 block w-full bg-stone-800 border border-stone-700 rounded-md py-2 px-3 focus:outline-none focus:ring-[#CF5256] focus:border-[#CF5256]" />
                        </div>
                        <button type="submit" className="w-full bg-[#CF5256] text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 hover:bg-rose-700">Add Assessment</button>
                    </form>
                </div>
                
                <div className="lg:col-span-2 space-y-6">
                    {mockAssessments.map(assessment => (
                        <div key={assessment.id} className="bg-stone-800/50 p-6 rounded-lg border border-stone-700/50">
                            <h3 className="text-lg font-bold">{assessment.title} <span className="text-sm font-normal text-stone-400">({assessment.type}) - Max Score: {assessment.maxScore}</span></h3>
                             <table className="min-w-full divide-y divide-stone-700 mt-4">
                                <thead className="bg-stone-800/50">
                                    <tr>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-stone-400 uppercase">Student</th>
                                        <th className="px-4 py-2 text-left text-xs font-medium text-stone-400 uppercase">Score</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {scores.filter(s => s.assessmentId === assessment.id).map(score => (
                                        <tr key={score.studentId}>
                                            <td className="px-4 py-2 text-sm text-[#FAF4F4]">{score.studentName}</td>
                                            <td className="px-4 py-2">
                                                <input 
                                                    type="number"
                                                    value={score.score ?? ''}
                                                    onChange={(e) => handleScoreChange(score.studentId, assessment.id, e.target.value)}
                                                    className="w-20 bg-stone-900 border border-stone-600 rounded-md px-2 py-1 text-center focus:ring-1 focus:ring-[#CF5256] focus:outline-none"
                                                    placeholder="N/A"
                                                    max={assessment.maxScore}
                                                    min={0}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AssessmentsPage;
