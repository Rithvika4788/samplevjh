import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { PieChart, Pie, BarChart, Bar, LineChart, Line, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Brain, AlertTriangle, TrendingDown, Lightbulb } from 'lucide-react';
import { Badge } from './ui/badge';

export function AIInsights() {
  // Strategy Distribution Data
  const strategyData = [
    { name: 'Analytical', value: 65, color: '#0891b2' },
    { name: 'Trial-Error', value: 25, color: '#fbbf24' },
    { name: 'Guessing', value: 10, color: '#f87171' },
  ];

  // Stress Distribution by Subject
  const stressData = [
    { subject: 'Math', stress: 6.5 },
    { subject: 'Physics', stress: 5.8 },
    { subject: 'Chemistry', stress: 7.2 },
  ];

  // Focus Consistency Ranking
  const focusRanking = [
    { name: 'Sneha Iyer', consistency: 94 },
    { name: 'Arjun Patel', consistency: 91 },
    { name: 'Priya Reddy', consistency: 88 },
    { name: 'Vikram Singh', consistency: 85 },
    { name: 'Ananya Kumar', consistency: 82 },
    { name: 'Rithvika Sharma', consistency: 78 },
    { name: 'Karthik Kumar', consistency: 74 },
  ];

  // Skill Decay Detection
  const skillDecayData = [
    { chapter: 'Rotational Dynamics', decay: -12, subject: 'Physics' },
    { chapter: 'Calculus Derivatives', decay: -8, subject: 'Math' },
    { chapter: 'Organic Reactions', decay: -15, subject: 'Chemistry' },
  ];

  // AI Recommendations
  const recommendations = [
    {
      id: '1',
      type: 'revision',
      priority: 'high',
      message: 'Assign a Concept Revision Test on "Rotational Dynamics". Class performance dropped 12%.',
      action: 'Create Test'
    },
    {
      id: '2',
      type: 'stress',
      priority: 'medium',
      message: 'Chemistry shows highest stress levels (7.2/10). Consider breaking topics into smaller modules.',
      action: 'View Details'
    },
    {
      id: '3',
      type: 'improvement',
      priority: 'low',
      message: '65% of students using analytical strategies. Encourage this pattern with more problem-solving exercises.',
      action: 'View Analytics'
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <h1 className="text-2xl text-gray-900 flex items-center gap-2">
            <Brain className="w-6 h-6 text-purple-600" />
            AI Insights
          </h1>
          <p className="text-sm text-gray-600">Cognitive and emotional analytics summary</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* AI Recommendations */}
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              AI Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recommendations.map((rec) => (
                <div 
                  key={rec.id} 
                  className={`p-4 rounded-lg border ${
                    rec.priority === 'high' 
                      ? 'bg-red-50 border-red-200' 
                      : rec.priority === 'medium' 
                        ? 'bg-yellow-50 border-yellow-200' 
                        : 'bg-blue-50 border-blue-200'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge 
                          className={
                            rec.priority === 'high' 
                              ? 'bg-red-500 text-white' 
                              : rec.priority === 'medium' 
                                ? 'bg-yellow-500 text-white' 
                                : 'bg-blue-500 text-white'
                          }
                        >
                          {rec.priority.toUpperCase()}
                        </Badge>
                        <span className="text-xs text-gray-600 capitalize">{rec.type}</span>
                      </div>
                      <p className="text-sm text-gray-900">{rec.message}</p>
                    </div>
                    <button className="ml-4 px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      {rec.action}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategy Distribution and Stress Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900">Strategy Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={strategyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {strategyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-cyan-600"></div>
                  <span className="text-gray-700">Analytical</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  <span className="text-gray-700">Trial-Error</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-400"></div>
                  <span className="text-gray-700">Guessing</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900">Stress Distribution by Subject</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stressData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="subject" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" domain={[0, 10]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="stress" fill="#f97316" name="Stress Level (out of 10)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Focus Consistency Ranking */}
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">Focus Consistency Ranking</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={focusRanking} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis type="number" stroke="#6b7280" domain={[0, 100]} />
                <YAxis dataKey="name" type="category" stroke="#6b7280" width={120} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Bar dataKey="consistency" fill="#0891b2" name="Consistency Score %" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Skill Decay Detector */}
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              Skill Decay Detector
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {skillDecayData.map((item, idx) => (
                <div key={idx} className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span className="text-gray-900">{item.chapter}</span>
                        <Badge variant="outline" className="border-blue-300 text-blue-700 text-xs">
                          {item.subject}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-700">
                        Performance decreased by <span className="text-red-600">{Math.abs(item.decay)}%</span> since last assessment
                      </p>
                    </div>
                    <button className="ml-4 px-3 py-1.5 bg-white border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Assign Revision
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-gray-900">
                💡 <span className="text-gray-700">Tip: Consider scheduling revision sessions for these topics before they become critical knowledge gaps.</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
