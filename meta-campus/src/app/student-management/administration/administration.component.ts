// import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

// @Component({
// selector: 'app-administration',
//   standalone: true,
//   imports: [CommonModule, FormsModule],
//   templateUrl: './administration.component.html',
//   styleUrl: './administration.component.scss'
// })
// export class AdministrationComponent {
//   // Student data (to be replaced with API call)
//   student = {
//     id: 'STU2023001',
//     name: 'John Doe',
//     dob: new Date('2000-05-15'),
//     email: 'john.doe@college.edu',
//     phone: '+1 234 567 8900',
//     address: '123 College Street, Campus Town',
//     emergencyContact: {
//       name: 'Jane Doe',
//       relation: 'Parent',
//       phone: '+1 987 654 3210'
//     },
//     academicInfo: {
//       rollNo: 'CS2023001',
//       program: 'B.Tech Computer Science',
//       department: 'Computer Science',
//       currentYear: '2nd Year',
//       currentSemester: '4th Semester',
//       admissionYear: 2022,
//       expectedGraduation: 2026
//     },
//     idCardUrl: 'https://example.com/idcards/STU2023001.pdf'
//   };

//   // Fee data
//   feeDetails = {
//     currentStatus: 'Paid',
//     currentSemester: '4th Semester',
//     breakdown: [
//       { name: 'Tuition Fee', amount: 50000, paid: 50000 },
//       { name: 'Hostel Fee', amount: 20000, paid: 20000 },
//       { name: 'Exam Fee', amount: 5000, paid: 5000 },
//       { name: 'Library Fee', amount: 2000, paid: 2000 },
//       { name: 'Miscellaneous', amount: 3000, paid: 3000 }
//     ],
//     totalAmount: 80000,
//     totalPaid: 80000,
//     balance: 0,
//     paymentHistory: [
//       {
//         date: new Date('2023-08-10'),
//         amount: 80000,
//         receiptNo: 'RCPT202308101',
//         semester: '4th Semester',
//         downloadUrl: 'https://example.com/receipts/RCPT202308101.pdf'
//       }
//       // Add more payment history
//     ]
//   };

//   // Scholarship data
//   scholarships = [
//     {
//       name: 'Merit Scholarship',
//       amount: 10000,
//       duration: 'Annual',
//       status: 'Active',
//       applicationDate: new Date('2023-06-01'),
//       renewalDate: new Date('2024-06-01'),
//       criteria: 'CGPA > 8.5'
//     },
//     // Add more scholarships
//   ];

//   // Leave application data
//   leaveApplications = [
//     {
//       id: 'LEA20231101',
//       type: 'Medical',
//       startDate: new Date('2023-11-05'),
//       endDate: new Date('2023-11-07'),
//       reason: 'Fever and doctor consultation',
//       status: 'Approved',
//       documents: ['https://example.com/docs/medical20231101.pdf'],
//       appliedDate: new Date('2023-11-01'),
//       approvedDate: new Date('2023-11-02'),
//       approvedBy: 'Dr. Smith'
//     },
//     // Add more leave applications
//   ];

//   // Document requests
//   documentRequests = [
//     {
//       id: 'DOC20231001',
//       type: 'Bonafide Certificate',
//       requestDate: new Date('2023-10-01'),
//       status: 'Processed',
//       downloadUrl: 'https://example.com/docs/bonafide20231001.pdf'
//     },
//     // Add more document requests
//   ];

//   // Form models
//   editProfileForm = {
//     phone: this.student.phone,
//     address: this.student.address,
//     emergencyContact: { ...this.student.emergencyContact }
//   };

//   newLeaveApplication = {
//     type: 'Academic',
//     startDate: '',
//     endDate: '',
//     reason: '',
//     documents: [] as any[]
//   };

//   newDocumentRequest = {
//     type: 'Bonafide Certificate',
//     purpose: ''
//   };

//   // Active tab
//   activeTab: string = 'profile';

//   // Tab switching
//   setActiveTab(tab: string): void {
//     this.activeTab = tab;
//   }

//   // Submit profile edits
//   submitProfileEdit(): void {
//     // In a real app, this would call an API
//     this.student.phone = this.editProfileForm.phone;
//     this.student.address = this.editProfileForm.address;
//     this.student.emergencyContact = this.editProfileForm.emergencyContact;
//     alert('Profile update request submitted for admin approval');
//   }

//   // Apply for leave
//   applyForLeave(): void {
//    const newLeave = {
//   id: 'LEA' + new Date().getTime(),
//   type: this.newLeaveApplication.type,
//   startDate: new Date(this.newLeaveApplication.startDate),
//   endDate: new Date(this.newLeaveApplication.endDate),
//   reason: this.newLeaveApplication.reason,
//   status: 'Submitted',
//   documents: this.newLeaveApplication.documents,
//   appliedDate: new Date(),

//   // Add these two required properties
//   approvedDate:new Date, // or new Date() if it has a value
//   approvedBy: '',     // or a default approver ID/name
// };

    
//     this.leaveApplications.unshift(newLeave);
//     this.newLeaveApplication = {
//       type: 'Academic',
//       startDate: '',
//       endDate: '',
//       reason: '',
//       documents: []
//     };
//     alert('Leave application submitted successfully');
//   }

//   // Request document
//   requestDocument(): void {
//     const newRequest = {
//       id: `DOC${new Date().getTime()}`,
//       type: this.newDocumentRequest.type,
//       purpose: this.newDocumentRequest.purpose,
//       requestDate: new Date(),
//       status: 'Pending'
//     };
    
//     this.documentRequests.unshift(newRequest);
//     this.newDocumentRequest = {
//       type: 'Bonafide Certificate',
//       purpose: ''
//     };
//     alert('Document request submitted successfully');
//   }

//   // File upload handlers
//   onLeaveDocumentSelected(event: any): void {
//     const files = event.target.files;
//     for (let i = 0; i < files.length; i++) {
//       this.newLeaveApplication.documents.push({
//         name: files[i].name,
//         url: URL.createObjectURL(files[i])
//       });
//     }
//   }

//   // Download handlers
//   downloadIdCard(): void {
//     console.log('Downloading ID card from:', this.student.idCardUrl);
//     // Implement download functionality
//   }

//   downloadReceipt(url: string): void {
//     console.log('Downloading receipt from:', url);
//     // Implement download functionality
//   }

//   downloadDocument(url: string): void {
//     console.log('Downloading document from:', url);
//     // Implement download functionality
//   }

//   // Payment gateway integration (mock)
//   makePayment(): void {
//     alert('Redirecting to payment gateway...');
//     // In a real app, this would redirect to payment gateway
//   }
// }
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-administration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './administration.component.html',
  styleUrl: './administration.component.scss'
})
export class AdministrationComponent {
  // Student data
  student = {
    id: 'STU2023001',
    name: 'John Doe',
    dob: new Date('2000-05-15'),
    email: 'john.doe@college.edu',
    phone: '+1 234 567 8900',
    address: '123 College Street, Campus Town',
    emergencyContact: {
      name: 'Jane Doe',
      relation: 'Parent',
      phone: '+1 987 654 3210'
    },
    academicInfo: {
      rollNo: 'CS2023001',
      program: 'B.Tech Computer Science',
      department: 'Computer Science',
      currentYear: '2nd Year',
      currentSemester: '4th Semester',
      admissionYear: 2022,
      expectedGraduation: 2026
    },
    idCardUrl: 'https://example.com/idcards/STU2023001.pdf'
  };

  // Fee data
  feeDetails = {
    currentStatus: 'Paid',
    currentSemester: '4th Semester',
    breakdown: [
      { name: 'Tuition Fee', amount: 50000, paid: 50000 },
      { name: 'Hostel Fee', amount: 20000, paid: 20000 },
      { name: 'Exam Fee', amount: 5000, paid: 5000 },
      { name: 'Library Fee', amount: 2000, paid: 2000 },
      { name: 'Miscellaneous', amount: 3000, paid: 3000 }
    ],
    totalAmount: 80000,
    totalPaid: 80000,
    balance: 0,
    paymentHistory: [
      {
        date: new Date('2023-08-10'),
        amount: 80000,
        receiptNo: 'RCPT202308101',
        semester: '4th Semester',
        downloadUrl: 'https://example.com/receipts/RCPT202308101.pdf'
      }
    ]
  };

  // Scholarship data
  scholarships = [
    {
      name: 'Merit Scholarship',
      amount: 10000,
      duration: 'Annual',
      status: 'Active',
      applicationDate: new Date('2023-06-01'),
      renewalDate: new Date('2024-06-01'),
      criteria: 'CGPA > 8.5'
    }
  ];

  // Leave application data
  leaveApplications = [
    {
      id: 'LEA20231101',
      type: 'Medical',
      startDate: new Date('2023-11-05'),
      endDate: new Date('2023-11-07'),
      reason: 'Fever and doctor consultation',
      status: 'Approved',
      documents: ['https://example.com/docs/medical20231101.pdf'],
      appliedDate: new Date('2023-11-01'),
      approvedDate: new Date('2023-11-02'),
      approvedBy: 'Dr. Smith'
    }
  ];

  // Document requests
  documentRequests = [
    {
      id: 'DOC20231001',
      type: 'Bonafide Certificate',
      requestDate: new Date('2023-10-01'),
      status: 'Processed',
      downloadUrl: 'https://example.com/docs/bonafide20231001.pdf'
    }
  ];

  // Form models
  editProfileForm = {
    phone: this.student.phone,
    address: this.student.address,
    emergencyContact: { ...this.student.emergencyContact }
  };

  newLeaveApplication = {
    type: 'Academic',
    startDate: '',
    endDate: '',
    reason: '',
    documents: [] as any[]
  };

  newDocumentRequest = {
    type: 'Bonafide Certificate',
    purpose: ''
  };

  activeTab: string = 'profile';

  // Tab switching
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Submit profile edits
  submitProfileEdit(): void {
    this.student.phone = this.editProfileForm.phone;
    this.student.address = this.editProfileForm.address;
    this.student.emergencyContact = this.editProfileForm.emergencyContact;
    alert('Profile update request submitted for admin approval');
  }

  // Apply for leave
  applyForLeave(): void {
    const newLeave = {
      id: 'LEA' + new Date().getTime(),
      type: this.newLeaveApplication.type,
      startDate: new Date(this.newLeaveApplication.startDate),
      endDate: new Date(this.newLeaveApplication.endDate),
      reason: this.newLeaveApplication.reason,
      status: 'Submitted',
      documents: this.newLeaveApplication.documents,
      appliedDate: new Date(),
      approvedDate: new Date(),
      approvedBy: ''
    };

    this.leaveApplications.unshift(newLeave);
    this.newLeaveApplication = {
      type: 'Academic',
      startDate: '',
      endDate: '',
      reason: '',
      documents: []
    };
    alert('Leave application submitted successfully');
  }

  // ✅ Fixed requestDocument method with downloadUrl included
  requestDocument(): void {
    const newRequest = {
      id: `DOC${new Date().getTime()}`,
      type: this.newDocumentRequest.type,
      purpose: this.newDocumentRequest.purpose,
      requestDate: new Date(),
      status: 'Pending',
      downloadUrl: '' // Default empty; will be filled after processing
    };

    this.documentRequests.unshift(newRequest);
    this.newDocumentRequest = {
      type: 'Bonafide Certificate',
      purpose: ''
    };
    alert('Document request submitted successfully');
  }

  // File upload handlers
  onLeaveDocumentSelected(event: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      this.newLeaveApplication.documents.push({
        name: files[i].name,
        url: URL.createObjectURL(files[i])
      });
    }
  }

  // Download handlers
  downloadIdCard(): void {
    console.log('Downloading ID card from:', this.student.idCardUrl);
    window.open(this.student.idCardUrl, '_blank');
  }

  downloadReceipt(url: string): void {
    console.log('Downloading receipt from:', url);
    window.open(url, '_blank');
  }

  downloadDocument(url: string): void {
    console.log('Downloading document from:', url);
    window.open(url, '_blank');
  }

  // Payment gateway integration (mock)
  makePayment(): void {
    alert('Redirecting to payment gateway...');
    // Redirect logic here
  }
}
