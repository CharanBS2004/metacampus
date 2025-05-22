import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Book {
  id: number;
  title: string;
  author: string;
  issueDate: Date;
  dueDate: Date;
  isRenewable: boolean;
  isOverdue: boolean;
  fine?: number;
}

interface CatalogBook {
  id: number;
  title: string;
  author: string;
  subject: string;
  isbn: string;
  status: 'Available' | 'Issued' | 'Reserved';
  location: string;
}

interface DigitalResource {
  id: number;
  title: string;
  type: 'e-book' | 'journal' | 'research-paper';
  link: string;
  provider?: string;
}

interface Notice {
  id: number;
  title: string;
  content: string;
  date: Date;
  isImportant: boolean;
}

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LibraryComponent implements OnInit {
  // Student data
  studentName: string = 'John Doe';
  studentId: string = 'STU2023001';
  department: string = 'Computer Science';
  
  // Component state
  activeTab: string = 'issuedBooks';
  searchQuery: string = '';
  searchCategory: string = 'title';
  
  // Mock data
  issuedBooks: Book[] = [
    {
      id: 1,
      title: 'Introduction to Algorithms',
      author: 'Thomas H. Cormen',
      issueDate: new Date('2023-05-01'),
      dueDate: new Date('2023-05-29'),
      isRenewable: true,
      isOverdue: false
    },
    {
      id: 2,
      title: 'Clean Code',
      author: 'Robert C. Martin',
      issueDate: new Date('2023-05-10'),
      dueDate: new Date('2023-05-28'),
      isRenewable: false,
      isOverdue: true,
      fine: 50
    }
  ];
  
  catalog: CatalogBook[] = [
    {
      id: 1,
      title: 'Design Patterns',
      author: 'Erich Gamma',
      subject: 'Software Engineering',
      isbn: '978-0201633610',
      status: 'Available',
      location: 'CS-102-A'
    },
    {
      id: 2,
      title: 'Database System Concepts',
      author: 'Abraham Silberschatz',
      subject: 'Database',
      isbn: '978-0078022159',
      status: 'Issued',
      location: 'CS-103-B'
    }
  ];
  
  digitalResources: DigitalResource[] = [
    {
      id: 1,
      title: 'Journal of Computer Science',
      type: 'journal',
      link: 'https://jcs.example.com',
      provider: 'JSTOR'
    },
    {
      id: 2,
      title: 'Machine Learning Basics',
      type: 'e-book',
      link: 'https://ml-books.example.com/123'
    }
  ];
  
  notices: Notice[] = [
    {
      id: 1,
      title: 'New Arrivals - May 2023',
      content: 'We have added 50 new books to our computer science section.',
      date: new Date('2023-05-15'),
      isImportant: false
    },
    {
      id: 2,
      title: 'Library Closure Notice',
      content: 'The library will be closed on June 1st for maintenance.',
      date: new Date('2023-05-20'),
      isImportant: true
    }
  ];
  
  borrowingHistory: Book[] = [
    {
      id: 3,
      title: 'Operating System Concepts',
      author: 'Abraham Silberschatz',
      issueDate: new Date('2023-03-01'),
      dueDate: new Date('2023-03-29'),
      isRenewable: false,
      isOverdue: false
    }
  ];
  
  constructor() {}

  ngOnInit(): void {
    // In a real app, you would fetch data here
  }

  switchTab(tab: string): void {
    this.activeTab = tab;
  }

  renewBook(bookId: number): void {
    console.log(`Renewing book with ID: ${bookId}`);
    alert('Book renewal request submitted!');
  }

  reserveBook(bookId: number): void {
    console.log(`Reserving book with ID: ${bookId}`);
    alert('Book reservation request submitted!');
  }

  searchCatalog(): void {
    console.log(`Searching for ${this.searchQuery} in ${this.searchCategory}`);
  }

  calculateTotalFines(): number {
    return this.issuedBooks
      .filter(book => book.fine)
      .reduce((total, book) => total + (book.fine || 0), 0);
  }

  getDaysOverdue(dueDate: Date): number {
    const today = new Date();
    const timeDiff = today.getTime() - dueDate.getTime();
    return Math.max(0, Math.floor(timeDiff / (1000 * 60 * 60 * 24)));
  }
}
