import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Badge } from './ui/badge';
import { Plus, FileEdit, Eye, Trash2, Calendar, Play } from 'lucide-react';

interface Test {
  id: string;
  name: string;
  subject: string;
  assignedTo: string;
  date: string;
  avgScore: number;
  status: 'Active' | 'Completed' | 'Scheduled';
  studentsAttempted: number;
  totalStudents: number;
}

export function TestManagement() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [testName, setTestName] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [numQuestions, setNumQuestions] = useState('30');
  const [isAdaptive, setIsAdaptive] = useState(true);

  const tests: Test[] = [
    { 
      id: '1', 
      name: 'Physics - Newton\'s Laws', 
      subject: 'Physics', 
      assignedTo: 'Class 12 PCM', 
      date: '2025-10-15', 
      avgScore: 76, 
      status: 'Completed',
      studentsAttempted: 40,
      totalStudents: 42
    },
    { 
      id: '2', 
      name: 'Math - Calculus Advanced', 
      subject: 'Math', 
      assignedTo: 'Class 12 PCM', 
      date: '2025-10-20', 
      avgScore: 0, 
      status: 'Scheduled',
      studentsAttempted: 0,
      totalStudents: 42
    },
    { 
      id: '3', 
      name: 'Chemistry - Equilibrium', 
      subject: 'Chemistry', 
      assignedTo: 'Class 12 PCM', 
      date: '2025-10-18', 
      avgScore: 0, 
      status: 'Active',
      studentsAttempted: 18,
      totalStudents: 42
    },
  ];

  const liveTests = tests.filter(t => t.status === 'Active');

  const handleCreateTest = () => {
    // Handle test creation
    setIsCreateModalOpen(false);
  };

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Test Management</h1>
              <p className="text-sm text-gray-600">Create, assign, and analyze assessments</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="border-gray-300">
                <FileEdit className="w-4 h-4 mr-2" />
                View All Tests
              </Button>
              <Button variant="outline" className="border-gray-300">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Test
              </Button>
              <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Create New Test
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px] bg-white">
                  <DialogHeader>
                    <DialogTitle className="text-gray-900">Create New Test</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4 py-4">
                    <div className="space-y-2">
                      <Label htmlFor="test-name" className="text-gray-700">Test Name</Label>
                      <Input
                        id="test-name"
                        placeholder="e.g., Physics - Kinematics"
                        value={testName}
                        onChange={(e) => setTestName(e.target.value)}
                        className="bg-white border-gray-300"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-gray-700">Subject</Label>
                      <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Select subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="math">Mathematics</SelectItem>
                          <SelectItem value="physics">Physics</SelectItem>
                          <SelectItem value="chemistry">Chemistry</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="chapter" className="text-gray-700">Chapter</Label>
                      <Select value={selectedChapter} onValueChange={setSelectedChapter}>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Select chapter" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kinematics">Kinematics</SelectItem>
                          <SelectItem value="calculus">Calculus</SelectItem>
                          <SelectItem value="thermodynamics">Thermodynamics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="num-questions" className="text-gray-700">Number of Questions</Label>
                      <Input
                        id="num-questions"
                        type="number"
                        value={numQuestions}
                        onChange={(e) => setNumQuestions(e.target.value)}
                        className="bg-white border-gray-300"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                      <div>
                        <Label htmlFor="adaptive" className="text-gray-900">Adaptive Difficulty</Label>
                        <p className="text-xs text-gray-600">Adjust question difficulty based on student performance</p>
                      </div>
                      <Switch
                        id="adaptive"
                        checked={isAdaptive}
                        onCheckedChange={setIsAdaptive}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="assign-to" className="text-gray-700">Assign To</Label>
                      <Select>
                        <SelectTrigger className="bg-white border-gray-300">
                          <SelectValue placeholder="Select class or students" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="class-12">Class 12 PCM</SelectItem>
                          <SelectItem value="class-11">Class 11 PCM</SelectItem>
                          <SelectItem value="custom">Custom Selection</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button 
                      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                      onClick={handleCreateTest}
                    >
                      Generate Test
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Live Test Monitor */}
        {liveTests.length > 0 && (
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Play className="w-5 h-5 text-green-500" />
                Live Test Monitor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {liveTests.map((test) => (
                  <div key={test.id} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <h3 className="text-gray-900">{test.name}</h3>
                        <p className="text-sm text-gray-600">{test.assignedTo}</p>
                      </div>
                      <Badge className="bg-green-500 text-white">Live</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">Progress</span>
                        <span className="text-gray-900">{test.studentsAttempted}/{test.totalStudents} students</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 h-full rounded-full transition-all"
                          style={{ width: `${(test.studentsAttempted / test.totalStudents) * 100}%` }}
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-2 mt-3">
                        <div className="text-center p-2 bg-white rounded border border-gray-200">
                          <div className="text-xs text-gray-600">Active</div>
                          <div className="text-sm text-green-600">12</div>
                        </div>
                        <div className="text-center p-2 bg-white rounded border border-gray-200">
                          <div className="text-xs text-gray-600">Completed</div>
                          <div className="text-sm text-blue-600">6</div>
                        </div>
                        <div className="text-center p-2 bg-white rounded border border-gray-200">
                          <div className="text-xs text-gray-600">Not Started</div>
                          <div className="text-sm text-gray-600">24</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Test List */}
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">All Tests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Test Name</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Subject</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Assigned To</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Date</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Avg Score</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.map((test) => (
                    <tr key={test.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 text-gray-900">{test.name}</td>
                      <td className="py-3 px-4">
                        <Badge variant="outline" className="border-blue-200 text-blue-700">
                          {test.subject}
                        </Badge>
                      </td>
                      <td className="py-3 px-4 text-gray-700">{test.assignedTo}</td>
                      <td className="py-3 px-4 text-gray-600 text-sm">{test.date}</td>
                      <td className="py-3 px-4 text-gray-700">
                        {test.status === 'Completed' ? `${test.avgScore}%` : '-'}
                      </td>
                      <td className="py-3 px-4">
                        <Badge 
                          className={
                            test.status === 'Active' ? 'bg-green-500 text-white' :
                            test.status === 'Completed' ? 'bg-blue-500 text-white' :
                            'bg-gray-500 text-white'
                          }
                        >
                          {test.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" className="border-gray-300">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-gray-300">
                            <FileEdit className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-300 text-red-600 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
