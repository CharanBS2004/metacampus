import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Hostel {
  id: number;
  name: string;
  roomNumber: string;
  allotmentDate: Date;
  wardenName: string;
  wardenContact: string;
  rules: string[];
  timings: {
    inTime: string;
    outTime: string;
  };
  messMenu?: string[];
}

interface Transport {
  routeId: number;
  routeName: string;
  schedule: {
    morning: string[];
    evening: string[];
  };
  pickupPoints: string[];
  coordinator: {
    name: string;
    contact: string;
    email: string;
  };
  passStatus: 'Active' | 'Expired' | 'Not Issued';
}

interface Club {
  id: number;
  name: string;
  description: string;
  facultyAdvisor: string;
  coordinator: string;
  isMember: boolean;
  upcomingEvents: {
    title: string;
    date: Date;
    description: string;
  }[];
}

interface PlacementDrive {
  id: number;
  company: string;
  date: Date;
  eligibility: string;
  registrationLink: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  result?: string;
}

interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  type: 'cultural' | 'sports' | 'academic' | 'social';
  description: string;
  registrationLink?: string;
}

@Component({
  selector: 'app-campus-life',
  templateUrl: './campus-life.component.html',
  styleUrls: ['./campus-life.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CampusLifeComponent implements OnInit {
  // Student data - will be replaced with actual data from service
  studentName: string = 'Rahul Sharma';
  studentId: string = 'STU20230045';
  department: string = 'Computer Science';
  currentYear: number = 2;

  // Component state
  activeTab: string = 'hostel';
  leaveRequest = {
    fromDate: '',
    toDate: '',
    reason: '',
    emergencyContact: ''
  };
  complaint = {
    category: '',
    description: ''
  };

  // Mock data - replace with API calls in real implementation
  hostelDetails: Hostel = {
    id: 1,
    name: 'Boys Hostel A',
    roomNumber: 'B-205',
    allotmentDate: new Date('2023-06-15'),
    wardenName: 'Dr. S. Patel',
    wardenContact: '9876543210',
    rules: [
      'Strictly follow hostel timings',
      'Visitors allowed only in common area',
      'No smoking or alcohol',
      'Lights out by 11:00 PM'
    ],
    timings: {
      inTime: '8:00 PM',
      outTime: '6:00 AM'
    },
    messMenu: [
      'Monday: North Indian',
      'Tuesday: South Indian',
      'Wednesday: Continental',
      'Thursday: Chinese',
      'Friday: Special Thali'
    ]
  };

  transportDetails: Transport[] = [
    {
      routeId: 1,
      routeName: 'Central Route',
      schedule: {
        morning: ['7:00 AM', '7:30 AM', '8:00 AM'],
        evening: ['4:30 PM', '5:15 PM', '6:00 PM']
      },
      pickupPoints: [
        'City Center',
        'Railway Station',
        'Bus Depot',
        'Gandhi Circle'
      ],
      coordinator: {
        name: 'Mr. R. Verma',
        contact: '8765432109',
        email: 'transport@college.edu'
      },
      passStatus: 'Active'
    }
  ];

  clubs: Club[] = [
    {
      id: 1,
      name: 'Coding Club',
      description: 'For students interested in programming and competitive coding',
      facultyAdvisor: 'Prof. A. Kumar',
      coordinator: 'Anjali Patel (3rd Year)',
      isMember: true,
      upcomingEvents: [
        {
          title: 'Hackathon 2023',
          date: new Date('2023-11-15'),
          description: 'Annual 24-hour coding competition'
        }
      ]
    },
    {
      id: 2,
      name: 'Drama Club',
      description: 'For theater enthusiasts and performers',
      facultyAdvisor: 'Prof. S. Iyer',
      coordinator: 'Rahul Desai (4th Year)',
      isMember: false,
      upcomingEvents: [
        {
          title: 'Annual Play Auditions',
          date: new Date('2023-10-05'),
          description: 'Auditions for the annual college play'
        }
      ]
    }
  ];

  placementDrives: PlacementDrive[] = [
    {
      id: 1,
      company: 'Tech Solutions Inc.',
      date: new Date('2023-11-20'),
      eligibility: 'CGPA >= 7.5, No backlogs',
      registrationLink: 'https://placements.college.edu/tech-solutions',
      status: 'Upcoming'
    },
    {
      id: 2,
      company: 'Global Analytics',
      date: new Date('2023-10-15'),
      eligibility: 'CGPA >= 8.0, Strong in Data Structures',
      registrationLink: 'https://placements.college.edu/global-analytics',
      status: 'Upcoming'
    }
  ];

  calendarEvents: CalendarEvent[] = [
    {
      id: 1,
      title: 'Annual Sports Day',
      date: new Date('2023-12-10'),
      type: 'sports',
      description: 'Inter-department sports competition',
      registrationLink: 'https://events.college.edu/sports-day'
    },
    {
      id: 2,
      title: 'Tech Fest',
      date: new Date('2023-11-25'),
      type: 'academic',
      description: '3-day technology festival with workshops and competitions'
    }
  ];

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  submitLeaveRequest(): void {
    console.log('Leave request submitted:', this.leaveRequest);
    alert('Leave request submitted successfully!');
    this.leaveRequest = {
      fromDate: '',
      toDate: '',
      reason: '',
      emergencyContact: ''
    };
  }

  submitComplaint(): void {
    console.log('Complaint submitted:', this.complaint);
    alert('Complaint registered successfully!');
    this.complaint = {
      category: '',
      description: ''
    };
  }

  joinClub(clubId: number): void {
    const club = this.clubs.find(c => c.id === clubId);
    if (club) {
      club.isMember = true;
      alert(`You have successfully joined ${club.name}`);
    }
  }

  registerForEvent(eventId: number): void {
    const event = this.calendarEvents.find(e => e.id === eventId);
    if (event && event.registrationLink) {
      window.open(event.registrationLink, '_blank');
    } else {
      alert('Registration details will be shared soon');
    }
  }

  applyForPlacement(driveId: number): void {
    const drive = this.placementDrives.find(d => d.id === driveId);
    if (drive) {
      window.open(drive.registrationLink, '_blank');
    }
  }
}