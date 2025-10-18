import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, Brain, AlertTriangle, Eye } from 'lucide-react';
import { Badge } from './ui/badge';

export function TeacherDashboard() {
  const [selectedClass, setSelectedClass] = useState('class-12-pcm');
  const [dateFilter, setDateFilter] = useState('week');

  // Mock data
  const stats = {
    classAverage: 78,
    activeStudents: 42,
    stressIndex: 6.5,
    weakTopics: ['Calculus', 'Thermodynamics', 'Organic Chemistry']
  };

  const alerts = [
    { id: 1, type: 'warning', student: 'Rithvika', message: 'scored below average in Calculus (42%)', action: 'View Details' },
    { id: 2, type: 'info', message: 'Class shows high stress in Thermodynamics.', action: 'View Analytics' },
    { id: 3, type: 'success', message: '3 students improved Transferability Score.', action: 'View Report' },
  ];

  const recentTests = [
    { id: 1, name: 'Physics - Newton\'s Laws', avgScore: 76, attempted: 40, accuracy: 82, date: '2025-10-15' },
    { id: 2, name: 'Math - Calculus Basics', avgScore: 68, attempted: 38, accuracy: 71, date: '2025-10-12' },
    { id: 3, name: 'Chemistry - Equilibrium', avgScore: 82, attempted: 42, accuracy: 88, date: '2025-10-10' },
  ];

  const performanceTrend = [
    { month: 'Jun', accuracy: 72 },
    { month: 'Jul', accuracy: 75 },
    { month: 'Aug', accuracy: 78 },
    { month: 'Sep', accuracy: 76 },
    { month: 'Oct', accuracy: 80 },
  ];

  const subjectPerformance = [
    { subject: 'Math', avg: 76 },
    { subject: 'Physics', avg: 82 },
    { subject: 'Chemistry', avg: 78 },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Navbar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Welcome, Dr. Sharma 👋</h1>
              <p className="text-sm text-gray-600">Here's what's happening with your classes today</p>
            </div>
            <div className="flex items-center gap-4">
              <Select value={selectedClass} onValueChange={setSelectedClass}>
                <SelectTrigger className="w-[200px] bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="class-12-pcm">Class 12 PCM</SelectItem>
                  <SelectItem value="class-11-pcm">Class 11 PCM</SelectItem>
                  <SelectItem value="class-12-bio">Class 12 Bio</SelectItem>
                </SelectContent>
              </Select>

              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="w-[150px] bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="week">This Week</SelectItem>
                  <SelectItem value="month">This Month</SelectItem>
                  <SelectItem value="term">This Term</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Stat Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-gray-600">Class Average</CardTitle>
              <TrendingUp className="w-5 h-5 text-cyan-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-gray-900">{stats.classAverage}%</div>
              <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                  style={{ width: `${stats.classAverage}%` }}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-gray-600">Active Students</CardTitle>
              <Users className="w-5 h-5 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-gray-900">{stats.activeStudents}</div>
              <p className="text-xs text-gray-600 mt-1">students active this week</p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-gray-600">Stress Index</CardTitle>
              <Brain className="w-5 h-5 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl text-gray-900">{stats.stressIndex}/10</div>
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                  <div 
                    key={i}
                    className={`h-1.5 flex-1 rounded-full ${i <= stats.stressIndex ? 'bg-orange-500' : 'bg-gray-200'}`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm text-gray-600">Weak Topics</CardTitle>
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                {stats.weakTopics.map((topic) => (
                  <Badge key={topic} variant="outline" className="text-xs border-red-200 text-red-700">
                    {topic}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Alerts Panel */}
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              AI Alerts & Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {alerts.map((alert) => (
                <div key={alert.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-start gap-3">
                    {alert.type === 'warning' && <span className="text-lg">⚠️</span>}
                    {alert.type === 'info' && <span className="text-lg">💡</span>}
                    {alert.type === 'success' && <span className="text-lg">⭐</span>}
                    <div>
                      {alert.student && <span className="text-gray-900">{alert.student} </span>}
                      <span className="text-gray-700">{alert.message}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline" className="border-gray-300">
                    <Eye className="w-4 h-4 mr-1" />
                    {alert.action}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Tests Summary */}
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">Recent Tests Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Test Name</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Avg Score</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Attempted</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Accuracy</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {recentTests.map((test) => (
                    <tr key={test.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-gray-900">{test.name}</td>
                      <td className="py-3 px-4">
                        <span className={`text-sm ${test.avgScore >= 75 ? 'text-green-600' : 'text-orange-600'}`}>
                          {test.avgScore}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{test.attempted}</td>
                      <td className="py-3 px-4 text-gray-700">{test.accuracy}%</td>
                      <td className="py-3 px-4 text-gray-600 text-sm">{test.date}</td>
                      <td className="py-3 px-4">
                        <Button size="sm" variant="outline" className="border-gray-300">
                          View Report
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Performance Graphs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900">Class Accuracy Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={performanceTrend}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="accuracy" stroke="#0891b2" strokeWidth={2} name="Accuracy %" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900">Average Performance by Subject</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={subjectPerformance}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="subject" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="avg" fill="#0891b2" name="Average %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
