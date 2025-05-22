import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ClassSchedule {
  day: string;
  time: string;
  subject: string;
  faculty: string;
  room: string;
}

interface Subject {
  code: string;
  name: string;
  faculty: string;
  credits: number;
}

interface Syllabus {
  subject: string;
  syllabusDoc: string;
  notes: string[];
  slides: string[];
  videos?: string[];
}

interface Assignment {
  title: string;
  subject: string;
  deadline: Date;
  instructions: string;
  status: 'Pending' | 'Submitted' | 'Late' | 'Graded';
  feedback?: string;
  grade?: number;
}

interface Exam {
  subject: string;
  date: Date;
  time: string;
  room: string;
  hallTicketUrl?: string;
}

interface Result {
  semester: string;
  subjects: {
    name: string;
    grade: string;
    credits: number;
  }[];
  gpa: number;
}

interface Attendance {
  subject: string;
  totalClasses: number;
  attended: number;
  percentage: number;
}

interface AcademicEvent {
  date: Date;
  title: string;
  description: string;
}

@Component({
  selector: 'app-academics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent {
uploadAssignment() {
throw new Error('Method not implemented.');
}
  // Student data (to be replaced with API call)
  student = {
    id: 'STU2023001',
    name: 'John Doe',
    program: 'B.Tech Computer Science',
    currentSemester: '4th Semester',
    department: 'Computer Science',
    email: 'john.doe@college.edu',
    phone: '+1 234 567 8900'
  };

  // Active tab
  activeTab: string = 'schedule';

  // Class schedule data
  classSchedule: ClassSchedule[] = [
    { day: 'Monday', time: '09:00 - 10:30', subject: 'Data Structures', faculty: 'Dr. Smith', room: 'CS-101' },
    { day: 'Monday', time: '11:00 - 12:30', subject: 'Algorithms', faculty: 'Prof. Johnson', room: 'CS-102' },
    { day: 'Tuesday', time: '10:00 - 11:30', subject: 'Database Systems', faculty: 'Dr. Williams', room: 'CS-103' },
    { day: 'Wednesday', time: '09:00 - 10:30', subject: 'Operating Systems', faculty: 'Prof. Brown', room: 'CS-104' },
    { day: 'Thursday', time: '14:00 - 15:30', subject: 'Computer Networks', faculty: 'Dr. Davis', room: 'CS-105' },
    { day: 'Friday', time: '11:00 - 12:30', subject: 'Software Engineering', faculty: 'Prof. Miller', room: 'CS-106' }
  ];

  // Subjects data
  subjects: Subject[] = [
    { code: 'CS401', name: 'Data Structures', faculty: 'Dr. Smith', credits: 4 },
    { code: 'CS402', name: 'Algorithms', faculty: 'Prof. Johnson', credits: 4 },
    { code: 'CS403', name: 'Database Systems', faculty: 'Dr. Williams', credits: 3 },
    { code: 'CS404', name: 'Operating Systems', faculty: 'Prof. Brown', credits: 3 },
    { code: 'CS405', name: 'Computer Networks', faculty: 'Dr. Davis', credits: 3 },
    { code: 'CS406', name: 'Software Engineering', faculty: 'Prof. Miller', credits: 4 }
  ];

  // Syllabus data
  syllabus: Syllabus[] = [
    { 
      subject: 'Data Structures',
      syllabusDoc: 'https://example.com/syllabus/ds.pdf',
      notes: ['Introduction to DS', 'Arrays and Linked Lists', 'Stacks and Queues'],
      slides: ['DS-Chapter1.pptx', 'DS-Chapter2.pptx'],
      videos: ['https://example.com/videos/ds1', 'https://example.com/videos/ds2']
    },
    // Add other subjects similarly
  ];

  // Assignments data
  assignments: Assignment[] = [
    {
      title: 'Binary Search Tree Implementation',
      subject: 'Data Structures',
      deadline: new Date('2023-11-15'),
      instructions: 'Implement BST with insert, delete and search operations',
      status: 'Submitted',
      feedback: 'Good implementation, but could improve time complexity',
      grade: 85
    },
    // Add other assignments
  ];

  // Exams data
  exams: Exam[] = [
    {
      subject: 'Data Structures',
      date: new Date('2023-12-10'),
      time: '09:00 - 12:00',
      room: 'Exam Hall A',
      hallTicketUrl: 'https://example.com/hallticket/ds'
    },
    // Add other exams
  ];

  // Results data
  results: Result[] = [
    {
      semester: '3rd Semester',
      subjects: [
        { name: 'Discrete Mathematics', grade: 'A', credits: 4 },
        { name: 'Computer Organization', grade: 'B+', credits: 3 },
        // Add other subjects
      ],
      gpa: 3.5
    },
    // Add other semesters
  ];

  // Attendance data
  attendance: Attendance[] = [
    { subject: 'Data Structures', totalClasses: 30, attended: 28, percentage: 93.33 },
    // Add other subjects
  ];

  // Academic calendar data
  academicCalendar: AcademicEvent[] = [
    { date: new Date('2023-08-01'), title: 'Semester Begins', description: 'Start of 4th semester' },
    { date: new Date('2023-10-15'), title: 'Mid-Term Exams', description: 'Mid-term examination period' },
    // Add other events
  ];

  // New assignment upload
  newAssignmentUpload: any = null;

  // Tab switching
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Download timetable
  downloadTimetable(): void {
    console.log('Downloading timetable...');
    // Implement download functionality
  }

  // Print timetable
  printTimetable(): void {
    window.print();
  }

  // Upload assignment
  onFileSelected(event: any): void {
    this.newAssignmentUpload = event.target.files[0];
    console.log('File selected:', this.newAssignmentUpload.name);
    // Implement upload functionality
  }

  // Download hall ticket
  downloadHallTicket(url: string): void {
    console.log('Downloading hall ticket from:', url);
    // Implement download functionality
  }

  // Calculate CGPA
  calculateCGPA(): number {
    // Simple implementation - replace with actual calculation
    return this.results.reduce((sum, result) => sum + result.gpa, 0) / this.results.length;
  }

  hasLowAttendance(): boolean {
  return this.attendance?.some(r => r.percentage < 0.75);
}

}