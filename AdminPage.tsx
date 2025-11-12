
import React, { useState } from 'react';
import { mockUsers } from '../services/mockData';
import { User } from '../types';

const AdminPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>(mockUsers);
    
    // TODO: Implement actual status toggle with API call
    const toggleStatus = (userId: string) => {
        setUsers(users.map(u => u.id === userId ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u));
    };
    
    const getRoleColor = (role: string) => {
        switch (role) {
            case 'Admin': return 'bg-red-500/30 text-red-300';
            case 'Faculty': return 'bg-blue-500/30 text-blue-300';
            case 'Student': return 'bg-green-500/30 text-green-300';
            default: return 'bg-stone-500/30 text-stone-300';
        }
    };

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold font-heading">Admin - User Management</h1>

             <div className="overflow-x-auto bg-stone-800/50 border border-stone-700/50 rounded-lg">
                <table className="min-w-full divide-y divide-stone-700">
                    <thead className="bg-stone-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Role</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Last Login</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-stone-400 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="bg-stone-800/50 divide-y divide-stone-700">
                        {users.map(user => (
                            <tr key={user.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm font-medium text-[#FAF4F4]">{user.name}</div>
                                    <div className="text-sm text-stone-400">{user.email}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getRoleColor(user.role)}`}>
                                        {user.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-stone-300">
                                    {new Date(user.lastLogin).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`text-sm font-medium ${user.status === 'Active' ? 'text-green-400' : 'text-stone-500'}`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <button onClick={() => toggleStatus(user.id)} className="text-indigo-400 hover:text-indigo-300">
                                        {user.status === 'Active' ? 'Deactivate' : 'Activate'}
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
             </div>
        </div>
    );
};

export default AdminPage;
