import { getEmployeesWithMissedClockIns } from '../services/timeTrackingService.js';
import { sendEmail } from '../services/notificationService.js';

export const getMissedClockIns = async (req, res) => {
  try {
    const employees = await getEmployeesWithMissedClockIns();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching missed clock-ins' });
  }
};

export const sendNotification = async (req, res) => {
  const { employeeId, message } = req.body;
  try {
    await sendEmail(employeeId, message);
    res.json({ success: true, message: 'Notification sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending notification' });
  }
};