export const mockPickupRequests = [
  {
    id: '1',
    customerName: 'John Doe',
    customerEmail: 'john@example.com',
    customerPhone: '555-0123',
    items: [
      {
        id: 'item1',
        imageUrl: '/images/furniture1.jpg',
        title: 'Vintage Sofa',
        description: 'Mid-century modern sofa in good condition',
        availableDates: [
          { date: '2024-04-15', requestCount: 3 },
          { date: '2024-04-16', requestCount: 1 },
          { date: '2024-04-17', requestCount: 2 }
        ],
        location: '123 Main St, Seattle, WA'
      },
      {
        id: 'item2',
        imageUrl: '/images/furniture2.jpg',
        title: 'Dining Table',
        description: 'Solid wood dining table, seats 6',
        availableDates: [
          { date: '2024-04-18', requestCount: 4 },
          { date: '2024-04-19', requestCount: 2 }
        ],
        location: '123 Main St, Seattle, WA'
      }
    ],
    messages: [
      {
        id: 'msg1',
        content: 'Hi, I\'m interested in donating these items',
        timestamp: new Date('2024-03-20T10:00:00'),
        isRead: true,
        sender: 'user'
      },
      {
        id: 'msg2',
        content: 'Thanks for your interest! We\'ll review your items.',
        timestamp: new Date('2024-03-20T10:30:00'),
        isRead: false,
        sender: 'admin'
      }
    ],
    status: 'pending',
    address: '123 Main St, Seattle, WA'
  },
  // Add more mock requests as needed
]; 