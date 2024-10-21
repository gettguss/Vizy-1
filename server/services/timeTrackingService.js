// Simulated time-tracking system
const employees = [
  { id: 1, name: 'John Doe', department: 'IT', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', department: 'HR', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', department: 'Sales', email: 'bob@example.com' },
];

export const getEmployeesWithMissedClockIns = async () => {
  // Simulate API call to time-tracking system
  return employees.map(employee => ({
    ...employee,
    missedEvent: Math.random() > 0.5 ? 'Clock In' : 'Clock Out',
    missedTime: new Date().toLocaleTimeString(),
  }));
};