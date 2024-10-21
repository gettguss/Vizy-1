export interface Employee {
  id: number;
  name: string;
  department: string;
  missedEvent: 'Clock In' | 'Clock Out';
  missedTime: string;
}