
import { Student, Faculty, Course, User, AttendanceRecord, Assessment, AssessmentScore } from '../types';

/* TODO: Replace this mock data with actual API calls to a backend service. */

export const mockStudents: Student[] = [
  { id: 'S001', name: 'Amelia Johnson', email: 'amelia.j@university.edu', major: 'Computer Science', gpa: 3.8, enrollmentDate: '2022-09-01', avatar: 'https://picsum.photos/seed/S001/200' },
  { id: 'S002', name: 'Benjamin Carter', email: 'ben.c@university.edu', major: 'Physics', gpa: 3.5, enrollmentDate: '2021-09-01', avatar: 'https://picsum.photos/seed/S002/200' },
  { id: 'S003', name: 'Chloe Davis', email: 'chloe.d@university.edu', major: 'English Literature', gpa: 3.9, enrollmentDate: '2023-09-01', avatar: 'https://picsum.photos/seed/S003/200' },
  { id: 'S004', name: 'Daniel Evans', email: 'daniel.e@university.edu', major: 'Mechanical Engineering', gpa: 3.2, enrollmentDate: '2022-09-01', avatar: 'https://picsum.photos/seed/S004/200' },
  { id: 'S005', name: 'Olivia Martinez', email: 'olivia.m@university.edu', major: 'Biology', gpa: 3.7, enrollmentDate: '2021-09-01', avatar: 'https://picsum.photos/seed/S005/200' },
  { id: 'S006', name: 'Liam Wilson', email: 'liam.w@university.edu', major: 'History', gpa: 3.4, enrollmentDate: '2023-09-01', avatar: 'https://picsum.photos/seed/S006/200' },
  { id: 'S007', name: 'Sophia Rodriguez', email: 'sophia.r@university.edu', major: 'Chemistry', gpa: 4.0, enrollmentDate: '2022-09-01', avatar: 'https://picsum.photos/seed/S007/200' },
];

export const mockFaculty: Faculty[] = [
  { id: 'F01', name: 'Dr. Evelyn Reed', email: 'e.reed@university.edu', department: 'Computer Science', title: 'Professor', office: 'Tech Hall 301', avatar: 'https://picsum.photos/seed/F01/200' },
  { id: 'F02', name: 'Dr. Samuel Greene', email: 's.greene@university.edu', department: 'Physics', title: 'Associate Professor', office: 'Science Wing 112', avatar: 'https://picsum.photos/seed/F02/200' },
  { id: 'F03', name: 'Dr. Isabella Foster', email: 'i.foster@university.edu', department: 'English Literature', title: 'Professor', office: 'Arts Building 250', avatar: 'https://picsum.photos/seed/F03/200' },
];

export const mockCourses: Course[] = [
  { id: 'C01', title: 'Introduction to Algorithms', code: 'CS101', department: 'Computer Science', credits: 4, instructor: 'Dr. Evelyn Reed' },
  { id: 'C02', title: 'Quantum Mechanics I', code: 'PHY201', department: 'Physics', credits: 4, instructor: 'Dr. Samuel Greene' },
  { id: 'C03', title: 'Modernist Poetry', code: 'ENG305', department: 'English Literature', credits: 3, instructor: 'Dr. Isabella Foster' },
  { id: 'C04', title: 'Data Structures', code: 'CS202', department: 'Computer Science', credits: 4, instructor: 'Dr. Evelyn Reed' },
];

export const mockUsers: User[] = [
    { id: 'U01', name: 'Admin User', email: 'admin@university.edu', role: 'Admin', lastLogin: '2024-07-30T10:00:00Z', status: 'Active' },
    { id: 'U02', name: 'Dr. Evelyn Reed', email: 'e.reed@university.edu', role: 'Faculty', lastLogin: '2024-07-30T09:15:00Z', status: 'Active' },
    { id: 'U03', name: 'Amelia Johnson', email: 'amelia.j@university.edu', role: 'Student', lastLogin: '2024-07-29T14:30:00Z', status: 'Active' },
    { id: 'U04', name: 'Inactive User', email: 'inactive@university.edu', role: 'Student', lastLogin: '2024-01-15T11:00:00Z', status: 'Inactive' },
];

export const mockAttendance: AttendanceRecord[] = [
    ...mockStudents.slice(0, 4).map(s => ({ studentId: s.id, studentName: s.name, date: '2024-07-30', status: 'Present' as 'Present' | 'Absent' | 'Late' | 'Excused' })),
    { studentId: 'S005', studentName: 'Olivia Martinez', date: '2024-07-30', status: 'Absent' },
    { studentId: 'S006', studentName: 'Liam Wilson', date: '2024-07-30', status: 'Late' },
];

export const mockAssessments: Assessment[] = [
    { id: 'A01', courseId: 'C01', title: 'Quiz 1: Big O Notation', type: 'Quiz', maxScore: 20 },
    { id: 'A02', courseId: 'C01', title: 'Midterm Exam', type: 'Midterm', maxScore: 100 },
];

export const mockAssessmentScores: AssessmentScore[] = [
    { assessmentId: 'A01', studentId: 'S001', studentName: 'Amelia Johnson', score: 18 },
    { assessmentId: 'A01', studentId: 'S004', studentName: 'Daniel Evans', score: 15 },
    { assessmentId: 'A02', studentId: 'S001', studentName: 'Amelia Johnson', score: 92 },
    { assessmentId: 'A02', studentId: 'S004', studentName: 'Daniel Evans', score: 78 },
];

export const mockAnalyticsData = {
    gpaTrend: [
        { semester: 'Fall 2022', avgGpa: 3.45 },
        { semester: 'Spring 2023', avgGpa: 3.51 },
        { semester: 'Fall 2023', avgGpa: 3.58 },
        { semester: 'Spring 2024', avgGpa: 3.62 },
    ],
    attendanceSummary: [
        { name: 'Present', value: 850, fill: '#4CAF50' },
        { name: 'Absent', value: 100, fill: '#F44336' },
        { name: 'Late', value: 40, fill: '#FFC107' },
        { name: 'Excused', value: 10, fill: '#2196F3' },
    ],
    gradeDistribution: [
        { name: 'A', value: 28, fill: '#4CAF50' },
        { name: 'B', value: 45, fill: '#8BC34A' },
        { name: 'C', value: 15, fill: '#FFC107' },
        { name: 'D', value: 8, fill: '#FF9800' },
        { name: 'F', value: 4, fill: '#F44336' },
    ],
};
