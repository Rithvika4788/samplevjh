import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { TakeTest } from './components/TakeTest';
import { Analytics } from './components/Analytics';
import { Learning } from './components/Learning';
import { Challenges } from './components/Challenges';
import { ParentDashboard } from './components/ParentDashboard';
import { Settings } from './components/Settings';
import { TeacherSidebar } from './components/TeacherSidebar';
import { TeacherDashboard } from './components/TeacherDashboard';
import { StudentManagement } from './components/StudentManagement';
import { ClassAnalytics } from './components/ClassAnalytics';
import { TestManagement } from './components/TestManagement';
import { Messages } from './components/Messages';
import { Leaderboard } from './components/Leaderboard';
import { AIInsights } from './components/AIInsights';
import { TeacherSettings } from './components/TeacherSettings';
import { Toaster } from './components/ui/sonner';
import { mockUser } from './utils/mockData';
import { User, ExamType, UserRole } from './types';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [user, setUser] = useState<User>(mockUser);
  const [userRole, setUserRole] = useState<UserRole>('student');

  const handleLogin = (username: string, examType: ExamType, role: UserRole) => {
    // Update user with selected exam type and role
    setUser({
      ...mockUser,
      name: username,
      examType: examType,
      role: role,
    });
    setUserRole(role);
    setCurrentPage(role === 'teacher' ? 'teacher-dashboard' : 'dashboard');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('dashboard');
    setUserRole('student');
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUser(updatedUser);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  // Teacher Portal
  if (userRole === 'teacher') {
    return (
      <>
        <div className="flex h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          <TeacherSidebar 
            currentPage={currentPage} 
            onNavigate={handleNavigate}
            onLogout={handleLogout}
          />
          
          {currentPage === 'teacher-dashboard' && <TeacherDashboard />}
          {currentPage === 'students' && <StudentManagement />}
          {currentPage === 'class-analytics' && <ClassAnalytics />}
          {currentPage === 'test-management' && <TestManagement />}
          {currentPage === 'messages' && <Messages />}
          {currentPage === 'leaderboard' && <Leaderboard />}
          {currentPage === 'ai-insights' && <AIInsights />}
          {currentPage === 'teacher-settings' && <TeacherSettings />}
        </div>
        <Toaster />
      </>
    );
  }

  // Student Portal
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <Sidebar 
          currentPage={currentPage} 
          onNavigate={handleNavigate}
          onLogout={handleLogout}
          examType={user.examType}
        />
        
        {currentPage === 'dashboard' && <Dashboard user={user} onNavigate={handleNavigate} />}
        {currentPage === 'test' && <TakeTest examType={user.examType} onNavigate={handleNavigate} />}
        {currentPage === 'analytics' && <Analytics examType={user.examType} />}
        {currentPage === 'learning' && <Learning examType={user.examType} />}
        {currentPage === 'challenges' && <Challenges />}
        {currentPage === 'parent' && <ParentDashboard user={user} />}
        {currentPage === 'settings' && <Settings user={user} onUpdateUser={handleUpdateUser} />}
      </div>
      <Toaster />
    </>
  );
}
