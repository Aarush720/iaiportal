
export interface Student {
  id: string;
  name: string;
  email: string;
  major: string;
  gpa: number;
  enrollmentDate: string;
  avatar: string;
}

export interface Faculty {
  id: string;
  name: string;
  email: string;
  department: string;
  title: string;
  office: string;
  avatar: string;
}

export interface Course {
  id: string;
  title: string;
  code: string;
  department: string;
  credits: number;
  instructor: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Faculty' | 'Student';
  lastLogin: string;
  status: 'Active' | 'Inactive';
}

export interface AttendanceRecord {
    studentId: string;
    studentName: string;
    date: string;
    status: 'Present' | 'Absent' | 'Late' | 'Excused';
}

export interface Assessment {
    id: string;
    courseId: string;
    title: string;
    type: 'Quiz' | 'Midterm' | 'Final' | 'Assignment';
    maxScore: number;
}

export interface AssessmentScore {
    assessmentId: string;
    studentId: string;
    studentName: string;
    score: number | null;
}
