import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports : [CommonModule,RouterLink],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // Student Information Variables
  studentName: string = 'John Doe';
  rollNumber: string = 'STU2023001';
  currentProgram: string = 'Bachelor of Computer Science';
  currentSemester: string = 'Semester 6';
  feeStatus: string = 'Paid';
  scholarshipStatus: string = 'Active';
  isFinalYear: boolean = true;

  // Today's Timetable
  todaysClasses = [
    { time: '09:00 - 10:30', subject: 'Data Structures', room: 'B-201' },
    { time: '11:00 - 12:30', subject: 'Algorithms', room: 'B-205' },
    { time: '14:00 - 15:30', subject: 'Database Systems', room: 'A-102' }
  ];

  // Pending Assignments
  pendingAssignmentsCount: number = 2;
  pendingAssignments = [
    { title: 'DS Assignment 3', dueDate: '2023-11-15' },
    { title: 'Algo Project Part 2', dueDate: '2023-11-20' }
  ];

  // Upcoming Exams
  nextExam = {
    subject: 'Database Systems',
    date: '2023-12-05',
    time: '09:00 - 12:00'
  };

  // Attendance Summary
  attendancePercentage: number = 82;
  attendanceStatus: string = this.getAttendanceStatus(this.attendancePercentage);

  // Library Status
  issuedBooksCount: number = 3;
  dueSoonBooks = [
    { title: 'Introduction to Algorithms', dueDate: '2023-11-18' },
    { title: 'Database System Concepts', dueDate: '2023-11-22' }
  ];

  // Notifications
  notifications = [
    {
      type: 'announcement',
      icon: 'fas fa-bullhorn',
      title: 'College Fest 2023',
      message: 'Annual cultural fest registration is now open. Last date: Nov 25',
      time: '2 hours ago',
      link: '/events/fest-2023'
    },
    {
      type: 'message',
      icon: 'fas fa-envelope',
      title: 'Message from Prof. Smith',
      message: 'Please submit your project proposals by Friday',
      time: '1 day ago',
      link: '/messages'
    },
    {
      type: 'event',
      icon: 'fas fa-calendar-check',
      title: 'Workshop on AI',
      message: 'Register for the AI workshop happening next Monday',
      time: '3 days ago',
      link: '/events/ai-workshop'
    }
  ];

  // Quick Actions
  quickActions = [
    { icon: 'fas fa-file-alt', title: 'Apply for Leave', link: '/leave' },
    { icon: 'fas fa-rupee-sign', title: 'Pay Fees', link: '/fees' },
    { icon: 'fas fa-calendar-week', title: 'View Timetable', link: '/timetable' },
    { icon: 'fas fa-poll', title: 'View Results', link: '/results' },
    { icon: 'fas fa-comment-alt', title: 'Submit Feedback', link: '/feedback' },
    { icon: 'fas fa-search', title: 'Library Search', link: '/library/search' }
  ];

  // Recent Grades
  recentGrades = [
    { subject: 'Data Structures', exam: 'Midterm', grade: 'A', marks: 85, totalMarks: 100 },
    { subject: 'Algorithms', exam: 'Quiz 2', grade: 'B+', marks: 78, totalMarks: 100 }
  ];

  // Placement Activities
  placementActivities = [
    {
      company: 'Tech Solutions Inc.',
      position: 'Software Engineer',
      description: 'Campus recruitment drive for final year students',
      deadline: '2023-12-10',
      eligibility: 'CGPA > 7.5',
      canApply: true
    },
    {
      company: 'Data Systems Ltd.',
      position: 'Data Analyst',
      description: 'Pre-placement talk and application process',
      deadline: '2023-12-15',
      eligibility: 'All branches',
      canApply: false
    }
  ];

  // Club Events
  clubEvents = [
    {
      title: 'Coding Competition',
      description: 'Annual coding competition with exciting prizes',
      date: '2023-11-25',
      time: '10:00 AM - 4:00 PM',
      location: 'Computer Lab 3',
      canRegister: true
    },
    {
      title: 'Tech Talk: Blockchain',
      description: 'Guest lecture on blockchain technology',
      date: '2023-12-02',
      time: '2:00 PM - 4:00 PM',
      location: 'Auditorium',
      canRegister: true
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // In a real app, you would fetch this data from a service
  }

  private getAttendanceStatus(percentage: number): string {
    if (percentage >= 80) return 'good';
    if (percentage >= 70) return 'warning';
    return 'danger';
  }
}