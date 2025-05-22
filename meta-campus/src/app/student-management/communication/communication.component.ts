import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-communication',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss']
})
export class CommunicationComponent {
  // Active tab
  activeTab: string = 'announcements';

  // Filter and sort options
  announcementFilter: string = 'all';
  messageFilter: string = 'all';
  eventFilter: string = 'all';
  sortBy: string = 'newest';

  // Notification preferences
  notificationPrefs = {
    assignments: true,
    exams: true,
    fees: true,
    events: false,
    messages: true
  };

  // Sample data - replace with API calls
  announcements = [
    {
      id: 1,
      title: 'Mid-Term Exam Schedule Released',
      content: 'The schedule for mid-term examinations has been published. Please check the exam portal for your specific timetable.',
      category: 'exam',
      date: new Date('2023-10-15'),
      isNew: true,
      priority: 'high'
    },
    {
      id: 2,
      title: 'Campus Closure for Maintenance',
      content: 'The campus will be closed on October 20-21 for annual maintenance work.',
      category: 'campus',
      date: new Date('2023-10-10'),
      isNew: false,
      priority: 'medium'
    },
    // Add more announcements
  ];

  messages = [
    {
      id: 1,
      from: 'Dr. Smith',
      subject: 'Data Structures Assignment Extension',
      content: 'The deadline for Assignment 3 has been extended to Friday. Please submit via the portal.',
      course: 'CS401',
      date: new Date('2023-10-12'),
      isRead: false,
      attachments: ['assignment_extension.pdf']
    },
    // Add more messages
  ];

  events = [
    {
      id: 1,
      title: 'Annual Tech Fest',
      type: 'cultural',
      description: '3-day technology festival with workshops, competitions and guest speakers.',
      date: new Date('2023-11-05'),
      endDate: new Date('2023-11-07'),
      location: 'Main Auditorium',
      registrationLink: 'https://example.com/techfest',
      contact: 'techclub@college.edu'
    },
    // Add more events
  ];

  notifications = [
    {
      id: 1,
      title: 'Assignment Due Tomorrow',
      content: 'CS401 - Data Structures Assignment 3 due tomorrow at 11:59 PM',
      type: 'assignment',
      date: new Date('2023-10-14'),
      isRead: false
    },
    // Add more notifications
  ];

  forumPosts = [
    {
      id: 1,
      title: 'Help with Algorithm Complexity',
      author: 'Jane Doe',
      course: 'CS402',
      date: new Date('2023-10-10'),
      replies: 5,
      isSticky: false
    },
    // Add more forum posts
  ];

  // Tab switching
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Mark announcement as read
  markAsRead(id: number): void {
    const announcement = this.announcements.find(a => a.id === id);
    if (announcement) announcement.isNew = false;
  }

  // Mark message as read
  markMessageAsRead(id: number): void {
    const message = this.messages.find(m => m.id === id);
    if (message) message.isRead = true;
  }

  // Mark notification as read
  markNotificationAsRead(id: number): void {
    const notification = this.notifications.find(n => n.id === id);
    if (notification) notification.isRead = true;
  }

  // Filter announcements by category
  get filteredAnnouncements() {
    let result = [...this.announcements];
    
    if (this.announcementFilter !== 'all') {
      result = result.filter(a => a.category === this.announcementFilter);
    }
    
    if (this.sortBy === 'newest') {
      result.sort((a, b) => b.date.getTime() - a.date.getTime());
    } else {
      result.sort((a, b) => a.date.getTime() - b.date.getTime());
    }
    
    return result;
  }

  // Filter messages by course
  get filteredMessages() {
    if (this.messageFilter === 'all') return this.messages;
    return this.messages.filter(m => m.course === this.messageFilter);
  }

  // Filter events by type
  get filteredEvents() {
    if (this.eventFilter === 'all') return this.events;
    return this.events.filter(e => e.type === this.eventFilter);
  }

  // Add to calendar
  addToCalendar(event: any): void {
    console.log('Adding to calendar:', event.title);
    // Implement calendar integration
  }

  // Reply to message
  replyToMessage(message: any): void {
    console.log('Replying to:', message.subject);
    // Implement message reply functionality
  }

  // Download attachment
  downloadAttachment(url: string): void {
    console.log('Downloading:', url);
    // Implement download functionality
  }

  // Save notification preferences
  saveNotificationPrefs(): void {
    console.log('Notification preferences saved:', this.notificationPrefs);
    // Implement preference saving
  }
}