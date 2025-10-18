import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, UserPlus, Download, Eye, Mail } from 'lucide-react';
import { Badge } from './ui/badge';
import { Textarea } from './ui/textarea';

interface Student {
  id: string;
  name: string;
  email: string;
  class: string;
  avgScore: number;
  stress: number;
  focus: number;
  lastActive: string;
}

export function StudentManagement() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const students: Student[] = [
    { id: '1', name: 'Rithvika Sharma', email: 'rithvika@example.com', class: 'Class 12 PCM', avgScore: 76, stress: 7, focus: 82, lastActive: '2 hours ago' },
    { id: '2', name: 'Arjun Patel', email: 'arjun@example.com', class: 'Class 12 PCM', avgScore: 88, stress: 5, focus: 91, lastActive: '1 hour ago' },
    { id: '3', name: 'Priya Reddy', email: 'priya@example.com', class: 'Class 12 PCM', avgScore: 82, stress: 6, focus: 85, lastActive: '3 hours ago' },
    { id: '4', name: 'Karthik Kumar', email: 'karthik@example.com', class: 'Class 12 PCM', avgScore: 71, stress: 8, focus: 74, lastActive: '5 hours ago' },
    { id: '5', name: 'Sneha Iyer', email: 'sneha@example.com', class: 'Class 12 PCM', avgScore: 91, stress: 4, focus: 94, lastActive: '30 min ago' },
  ];

  const performanceData = [
    { test: 'Test 1', score: 72 },
    { test: 'Test 2', score: 68 },
    { test: 'Test 3', score: 75 },
    { test: 'Test 4', score: 78 },
    { test: 'Test 5', score: 76 },
  ];

  const emotionData = [
    { time: '0min', stress: 3, confidence: 8 },
    { time: '15min', stress: 5, confidence: 7 },
    { time: '30min', stress: 7, confidence: 6 },
    { time: '45min', stress: 6, confidence: 7 },
    { time: '60min', stress: 4, confidence: 8 },
  ];

  const handleViewStudent = (student: Student) => {
    setSelectedStudent(student);
    setIsDrawerOpen(true);
  };

  const filteredStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Students</h1>
              <p className="text-sm text-gray-600">Manage and analyze individual learners</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-gray-300">
                <Download className="w-4 h-4 mr-2" />
                Import CSV
              </Button>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                <UserPlus className="w-4 h-4 mr-2" />
                Add Student
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search by name or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-white border-gray-300"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Name</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Email</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Class</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Avg Score</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Stress</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Focus</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Last Active</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredStudents.map((student) => (
                    <tr 
                      key={student.id} 
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => handleViewStudent(student)}
                    >
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white">
                            {student.name.charAt(0)}
                          </div>
                          <span className="text-gray-900">{student.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-600 text-sm">{student.email}</td>
                      <td className="py-3 px-4 text-gray-700">{student.class}</td>
                      <td className="py-3 px-4">
                        <Badge 
                          variant="outline" 
                          className={student.avgScore >= 80 ? 'border-green-500 text-green-700' : student.avgScore >= 60 ? 'border-yellow-500 text-yellow-700' : 'border-red-500 text-red-700'}
                        >
                          {student.avgScore}%
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                              <div 
                                key={i}
                                className={`w-1 h-3 rounded-full ${i <= student.stress ? 'bg-orange-500' : 'bg-gray-200'}`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">{student.stress}/10</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{student.focus}%</td>
                      <td className="py-3 px-4 text-gray-600 text-sm">{student.lastActive}</td>
                      <td className="py-3 px-4">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="border-gray-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleViewStudent(student);
                          }}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Student Profile Drawer */}
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent className="w-[600px] sm:max-w-[600px] overflow-y-auto bg-white">
          <SheetHeader>
            <SheetTitle className="text-gray-900">
              {selectedStudent && (
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl">
                    {selectedStudent.name.charAt(0)}
                  </div>
                  <div>
                    <div>{selectedStudent.name}</div>
                    <div className="text-sm text-gray-600">{selectedStudent.email}</div>
                  </div>
                </div>
              )}
            </SheetTitle>
          </SheetHeader>

          {selectedStudent && (
            <Tabs defaultValue="performance" className="mt-6">
              <TabsList className="grid w-full grid-cols-3 bg-gray-100">
                <TabsTrigger value="performance">Performance</TabsTrigger>
                <TabsTrigger value="emotional">Emotional</TabsTrigger>
                <TabsTrigger value="feedback">Feedback</TabsTrigger>
              </TabsList>

              <TabsContent value="performance" className="space-y-4">
                <Card className="border-gray-200 bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-sm text-gray-900">Performance Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="test" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                        />
                        <Line type="monotone" dataKey="score" stroke="#0891b2" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <h3 className="text-sm text-gray-700">Recent Tests</h3>
                  <div className="space-y-2">
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">Physics - Kinematics</span>
                        <Badge variant="outline" className="border-green-500 text-green-700">85%</Badge>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Oct 15, 2025</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-900">Math - Calculus</span>
                        <Badge variant="outline" className="border-yellow-500 text-yellow-700">68%</Badge>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Oct 12, 2025</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="emotional" className="space-y-4">
                <Card className="border-gray-200 bg-gray-50">
                  <CardHeader>
                    <CardTitle className="text-sm text-gray-900">Emotional Timeline</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={200}>
                      <LineChart data={emotionData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis dataKey="time" stroke="#6b7280" />
                        <YAxis stroke="#6b7280" />
                        <Tooltip 
                          contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                        />
                        <Line type="monotone" dataKey="stress" stroke="#f97316" strokeWidth={2} name="Stress" />
                        <Line type="monotone" dataKey="confidence" stroke="#0891b2" strokeWidth={2} name="Confidence" />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <div className="space-y-2">
                  <h3 className="text-sm text-gray-700">Concept Gaps</h3>
                  <div className="space-y-2">
                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center gap-2">
                        <span className="text-red-600">⚠️</span>
                        <span className="text-gray-900">Calculus - Derivatives</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Proficiency: 42% | Needs attention</p>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2">
                        <span className="text-yellow-600">💡</span>
                        <span className="text-gray-900">Thermodynamics</span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1">Proficiency: 68% | Moderate</p>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="feedback" className="space-y-4">
                <div>
                  <h3 className="text-sm text-gray-700 mb-2">Send Feedback</h3>
                  <Textarea 
                    placeholder="Write your feedback message..."
                    className="min-h-[120px] bg-white border-gray-300"
                  />
                  <Button className="mt-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Feedback
                  </Button>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm text-gray-700">AI Suggestions</h3>
                  <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <p className="text-sm text-gray-900">💡 Encourage Rithvika for improvement in Calculus. Suggest practice problems on derivatives.</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                    <p className="text-sm text-gray-900">⭐ Congratulate on recent improvement in Physics!</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
