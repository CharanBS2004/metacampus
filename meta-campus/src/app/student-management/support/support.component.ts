import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  // Student data (to be replaced with API call)
  student = {
    id: 'STU2023001',
    name: 'John Doe',
    email: 'john.doe@college.edu',
    program: 'B.Tech Computer Science',
    currentSemester: '4th Semester'
  };

  // Active tab
  activeTab: string = 'feedback';

  // Feedback form
  feedbackForm = {
    type: 'course',
    subject: '',
    message: '',
    isAnonymous: false,
    rating: 0
  };

  // Help desk ticket form
  ticketForm = {
    category: 'academic',
    subject: '',
    description: '',
    urgency: 'medium',
    attachments: [] as any[]
  };

  // FAQ search
  faqSearch = '';
  faqCategory = 'all';

  // Contact search
  contactSearch = '';

  // Sample data - replace with API calls
  feedbackCategories = [
    { value: 'course', label: 'Course' },
    { value: 'faculty', label: 'Faculty' },
    { value: 'facility', label: 'Campus Facility' },
    { value: 'event', label: 'Event/Service' }
  ];

  ticketCategories = [
    { value: 'academic', label: 'Academic' },
    { value: 'exam', label: 'Exam' },
    { value: 'hostel', label: 'Hostel' },
    { value: 'it', label: 'IT Issue' },
    { value: 'fee', label: 'Fee' },
    { value: 'library', label: 'Library' }
  ];

  urgencyLevels = [
    { value: 'low', label: 'Low' },
    { value: 'medium', label: 'Medium' },
    { value: 'high', label: 'High' }
  ];

  faqs = [
    {
      id: 1,
      question: 'How do I reset my portal password?',
      answer: 'Visit the login page and click "Forgot Password". Enter your registered email to receive a reset link.',
      category: 'login',
      views: 125
    },
    // Add more FAQs
  ];

  contacts = [
    {
      department: 'Admin Office',
      email: 'admin@college.edu',
      phone: '+1 234 567 8901',
      hours: 'Mon-Fri, 9:00 AM - 5:00 PM',
      location: 'Main Building, Room 101'
    },
    // Add more contacts
  ];

  documents = [
    {
      name: 'Leave Application Form',
      description: 'For requesting academic or medical leave',
      downloadUrl: 'https://example.com/forms/leave.pdf',
      category: 'forms'
    },
    // Add more documents
  ];

  submittedTickets = [
    {
      id: 'TKT2023001',
      subject: 'Library access issue',
      category: 'library',
      date: new Date('2023-10-01'),
      status: 'Resolved',
      lastUpdate: new Date('2023-10-03')
    },
    // Add more tickets
  ];

  submittedFeedback = [
    {
      id: 'FBK2023001',
      type: 'course',
      subject: 'Data Structures course feedback',
      date: new Date('2023-09-15'),
      status: 'Reviewed',
      message: 'The app crashes when I open the dashboard.',
      rating:6
    },
    // Add more feedback
  ];

  // Tab switching
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Submit feedback
  submitFeedback(): void {
    const newFeedback = {
      id: `FBK${new Date().getTime()}`,
      ...this.feedbackForm,
      date: new Date(),
      status: 'Submitted',
      student: this.feedbackForm.isAnonymous ? null : this.student.id
    };
    
    this.submittedFeedback.unshift(newFeedback);
    this.feedbackForm = {
      type: 'course',
      subject: '',
      message: '',
      isAnonymous: false,
      rating: 0
    };
    alert('Thank you for your feedback!');
  }

  // Submit help desk ticket
  submitTicket(): void {
    const newTicket = {
      id: `TKT${new Date().getTime()}`,
      ...this.ticketForm,
      student: this.student.id,
      date: new Date(),
      status: 'Submitted',
      lastUpdate: new Date()
    };
    
    this.submittedTickets.unshift(newTicket);
    this.ticketForm = {
      category: 'academic',
      subject: '',
      description: '',
      urgency: 'medium',
      attachments: []
    };
    alert('Your ticket has been submitted successfully!');
  }

  // File upload handler
  onFileSelected(event: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.ticketForm.attachments.push({
        name: files[i].name,
        url: URL.createObjectURL(files[i])
      });
    }
  }

  // Download document
  downloadDocument(url: string): void {
    console.log('Downloading document from:', url);
    // Implement download functionality
  }

  // Filter FAQs by search and category
  get filteredFaqs() {
    let result = [...this.faqs];
    
    if (this.faqCategory !== 'all') {
      result = result.filter(f => f.category === this.faqCategory);
    }
    
    if (this.faqSearch) {
      const searchTerm = this.faqSearch.toLowerCase();
      result = result.filter(f => 
        f.question.toLowerCase().includes(searchTerm) || 
        f.answer.toLowerCase().includes(searchTerm)
      );
    }
    
    return result;
  }

  // Filter contacts by search
  get filteredContacts() {
    if (!this.contactSearch) return this.contacts;
    
    const searchTerm = this.contactSearch.toLowerCase();
    return this.contacts.filter(c => 
      c.department.toLowerCase().includes(searchTerm) || 
      c.email.toLowerCase().includes(searchTerm)
    );
  }

  // Filter documents by category
  get filteredDocuments() {
    // In a real app, implement category filtering
    return this.documents;
  }
}