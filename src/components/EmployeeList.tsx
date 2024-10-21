import React from 'react';
import { Employee } from '../types';

interface EmployeeListProps {
  employees: Employee[];
}

const EmployeeList: React.FC<EmployeeListProps> = ({ employees }) => {
  return (
    <ul className="bg-white shadow-md rounded-lg divide-y divide-gray-200">
      {employees.map((employee) => (
        <li key={employee.id} className="p-4 hover:bg-gray-50">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{employee.name}</h3>
              <p className="text-gray-600">{employee.department}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-gray-500">{employee.missedEvent}</p>
              <p className="text-sm font-medium text-red-600">{employee.missedTime}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default EmployeeList;