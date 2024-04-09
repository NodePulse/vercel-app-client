import React from 'react';

const AttendanceList = ({ attendanceData }) => {
  return (
    <div className="container mx-auto px-4 sm:px-0">
      <h2 className="font-bold text-2xl mb-4">Attendance List</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4 font-bold">
        <div>Subject</div>
        <div>Percentage</div>
      </div>
      {attendanceData.map((subject) => {
        const { _id, subject_name, attendance } = subject;
        const { attended, total } = attendance;

        const attendancePercentage = ((attended / total) * 100).toFixed(2);

        return (
          <div key={_id} className="grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-4">
            <div>{subject_name}</div>
            <div>{attendancePercentage}%</div>
          </div>
        );
      })}
    </div>
  );
};

export default AttendanceList;