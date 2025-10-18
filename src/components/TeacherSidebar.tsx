import { Home, Users, BarChart3, FileEdit, MessageSquare, Trophy, Brain, Settings, LogOut, Moon, Sun, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { useState } from 'react';

interface TeacherSidebarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

export function TeacherSidebar({ currentPage, onNavigate, onLogout }: TeacherSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const menuItems = [
    { id: 'teacher-dashboard', icon: Home, label: 'Dashboard' },
    { id: 'students', icon: Users, label: 'Students' },
    { id: 'class-analytics', icon: BarChart3, label: 'Class Analytics' },
    { id: 'test-management', icon: FileEdit, label: 'Test Management' },
    { id: 'messages', icon: MessageSquare, label: 'Messages' },
    { id: 'leaderboard', icon: Trophy, label: 'Leaderboard' },
    { id: 'ai-insights', icon: Brain, label: 'AI Insights' },
    { id: 'teacher-settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={`${isCollapsed ? 'w-20' : 'w-64'} bg-white border-r border-gray-200 flex flex-col transition-all duration-300 shadow-lg`}>
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <span className="text-xl">🎓</span>
            </div>
            <div>
              <h1 className="text-gray-900">NeetJEEt</h1>
              <p className="text-xs text-gray-600">Teacher Portal</p>
            </div>
          </div>
        )}
        {isCollapsed && (
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md mx-auto">
            <span className="text-xl">🎓</span>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {!isCollapsed && <span>{item.label}</span>}
            </button>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-3 border-t border-gray-200 space-y-2">
        {!isCollapsed && (
          <Button 
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Class
          </Button>
        )}
        
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          {!isCollapsed && <span>{isDarkMode ? 'Light' : 'Dark'} Mode</span>}
        </button>

        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 hover:bg-red-50 transition-colors"
        >
          <LogOut className="w-5 h-5" />
          {!isCollapsed && <span>Logout</span>}
        </button>

        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center px-3 py-2 text-gray-500 hover:text-gray-700 text-sm"
        >
          {isCollapsed ? '→' : '←'}
        </button>
      </div>
    </div>
  );
}
