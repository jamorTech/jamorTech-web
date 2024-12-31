import React from 'react';
import AdminProfile from '../components/AdminProfile/AdminProfile';

const AdminProfilePage = () => {
  // This is mock data. In a real application, you would fetch this data from your API
  const admin = {
    name: "Alex Johnson",
    role: "Senior System Administrator",
    profilePicture: "/placeholder.svg?height=120&width=120",
    email: "alex.johnson@jamortech.com",
    department: "IT Operations",
    adminId: "ADM-2023-001",
    lastLogin: "2023-06-20 09:15 AM",
    stats: {
      totalUsers: 5280,
      activeInterns: 1250,
      registeredCompanies: 320,
      openPositions: 175
    },
    recentActivity: [
      { 
        description: "Approved new company registration: Tech Innovators Inc.", 
        date: "2023-06-20",
        time: "10:30 AM"
      },
      { 
        description: "Updated system security protocols", 
        date: "2023-06-19",
        time: "03:45 PM"
      },
      { 
        description: "Resolved user ticket #4589: Account access issue", 
        date: "2023-06-19",
        time: "11:20 AM"
      },
      { 
        description: "Generated monthly activity report", 
        date: "2023-06-18",
        time: "09:00 AM"
      }
    ]
  };

  return (
    <div>
      <AdminProfile admin={admin} />
    </div>
  );
};

export default AdminProfilePage;

