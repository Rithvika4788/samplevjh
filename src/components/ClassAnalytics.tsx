import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { BarChart, Bar, LineChart, Line, ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { TrendingUp, Clock, Target, Zap } from 'lucide-react';

export function ClassAnalytics() {
  // Overview Cards Data
  const overviewStats = [
    { label: 'Avg Accuracy', value: '78%', icon: Target, color: 'text-cyan-600' },
    { label: 'Avg Time/Question', value: '2.3min', icon: Clock, color: 'text-blue-600' },
    { label: 'Avg Focus Score', value: '82%', icon: Zap, color: 'text-purple-600' },
    { label: 'Avg Transferability', value: '7.2/10', icon: TrendingUp, color: 'text-green-600' },
  ];

  // Heatmap Data - Chapter vs Subject performance
  const heatmapData = [
    { chapter: 'Mechanics', Math: 85, Physics: 88, Chemistry: 72 },
    { chapter: 'Calculus', Math: 72, Physics: 68, Chemistry: 75 },
    { chapter: 'Thermodynamics', Math: 78, Physics: 82, Chemistry: 85 },
    { chapter: 'Organic', Math: 65, Physics: 70, Chemistry: 88 },
    { chapter: 'Electromagnetism', Math: 82, Physics: 91, Chemistry: 74 },
  ];

  // Scatter Plot Data - Focus vs Accuracy
  const scatterData = [
    { focus: 65, accuracy: 68, stress: 8, name: 'Student 1' },
    { focus: 78, accuracy: 82, stress: 6, name: 'Student 2' },
    { focus: 92, accuracy: 94, stress: 3, name: 'Student 3' },
    { focus: 71, accuracy: 74, stress: 7, name: 'Student 4' },
    { focus: 85, accuracy: 88, stress: 5, name: 'Student 5' },
    { focus: 58, accuracy: 62, stress: 9, name: 'Student 6' },
    { focus: 88, accuracy: 85, stress: 4, name: 'Student 7' },
    { focus: 74, accuracy: 78, stress: 6, name: 'Student 8' },
  ];

  // LTI Concept Transfer Data
  const ltiData = [
    { concept: 'Newton\'s Laws', physics: 85, math: 78, chemistry: 72 },
    { concept: 'Energy Conservation', physics: 88, math: 82, chemistry: 85 },
    { concept: 'Vector Analysis', physics: 82, math: 88, chemistry: 68 },
    { concept: 'Rate of Change', physics: 75, math: 85, chemistry: 78 },
  ];

  // Emotion Timeline Aggregated
  const emotionTimeline = [
    { time: '0-15min', stress: 4, confidence: 8, focus: 7 },
    { time: '15-30min', stress: 6, confidence: 7, focus: 8 },
    { time: '30-45min', stress: 7, confidence: 6, focus: 7 },
    { time: '45-60min', stress: 5, confidence: 7, focus: 6 },
    { time: '60-75min', stress: 4, confidence: 8, focus: 8 },
  ];

  // MicroSkill Tracker Data
  const microSkillData = [
    { skill: 'Speed', avgScore: 7.8, benchmark: 8.0 },
    { skill: 'Reasoning', avgScore: 8.2, benchmark: 7.5 },
    { skill: 'Interpretation', avgScore: 7.5, benchmark: 7.8 },
    { skill: 'Problem Solving', avgScore: 8.5, benchmark: 8.0 },
  ];

  const getHeatColor = (value: number) => {
    if (value >= 85) return '#0891b2'; // cyan-600
    if (value >= 75) return '#22d3ee'; // cyan-400
    if (value >= 65) return '#fbbf24'; // yellow-400
    return '#f87171'; // red-400
  };

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <h1 className="text-2xl text-gray-900">Class Analytics</h1>
          <p className="text-sm text-gray-600">Deep visual insights into class-level metrics</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {overviewStats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <Card key={idx} className="border-gray-200 bg-white/80 backdrop-blur shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm text-gray-600">{stat.label}</CardTitle>
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl text-gray-900">{stat.value}</div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Heatmap - Performance by Chapter and Subject */}
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">Performance Heatmap: Chapter × Subject</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left py-3 px-4 text-sm text-gray-600 border-b border-gray-200">Chapter</th>
                    <th className="text-center py-3 px-4 text-sm text-gray-600 border-b border-gray-200">Math</th>
                    <th className="text-center py-3 px-4 text-sm text-gray-600 border-b border-gray-200">Physics</th>
                    <th className="text-center py-3 px-4 text-sm text-gray-600 border-b border-gray-200">Chemistry</th>
                  </tr>
                </thead>
                <tbody>
                  {heatmapData.map((row, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-900">{row.chapter}</td>
                      <td className="py-3 px-4">
                        <div 
                          className="w-full h-12 rounded flex items-center justify-center text-white"
                          style={{ backgroundColor: getHeatColor(row.Math) }}
                        >
                          {row.Math}%
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div 
                          className="w-full h-12 rounded flex items-center justify-center text-white"
                          style={{ backgroundColor: getHeatColor(row.Physics) }}
                        >
                          {row.Physics}%
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <div 
                          className="w-full h-12 rounded flex items-center justify-center text-white"
                          style={{ backgroundColor: getHeatColor(row.Chemistry) }}
                        >
                          {row.Chemistry}%
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex items-center gap-4 mt-4 text-xs text-gray-600">
              <span>Scale:</span>
              <div className="flex items-center gap-1">
                <div className="w-6 h-4 rounded" style={{ backgroundColor: '#f87171' }}></div>
                <span>{'<'}65%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-4 rounded" style={{ backgroundColor: '#fbbf24' }}></div>
                <span>65-74%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-4 rounded" style={{ backgroundColor: '#22d3ee' }}></div>
                <span>75-84%</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-4 rounded" style={{ backgroundColor: '#0891b2' }}></div>
                <span>{'≥'}85%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Scatter Plot and LTI Graph */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900">Focus vs Accuracy Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <ScatterChart>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" dataKey="focus" name="Focus Score" unit="%" stroke="#6b7280" />
                  <YAxis type="number" dataKey="accuracy" name="Accuracy" unit="%" stroke="#6b7280" />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }}
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Scatter name="Students" data={scatterData} fill="#0891b2">
                    {scatterData.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={entry.stress > 7 ? '#f87171' : entry.stress > 5 ? '#fbbf24' : '#0891b2'}
                      />
                    ))}
                  </Scatter>
                </ScatterChart>
              </ResponsiveContainer>
              <p className="text-xs text-gray-600 mt-2">
                Bubble color indicates stress level: 
                <span className="text-red-500 ml-2">High (7-10)</span>
                <span className="text-yellow-500 ml-2">Medium (5-6)</span>
                <span className="text-cyan-600 ml-2">Low (1-4)</span>
              </p>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900">Learning Transfer Index (LTI)</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={ltiData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="concept" stroke="#6b7280" />
                  <YAxis stroke="#6b7280" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="physics" fill="#0891b2" name="Physics" />
                  <Bar dataKey="math" fill="#3b82f6" name="Math" />
                  <Bar dataKey="chemistry" fill="#8b5cf6" name="Chemistry" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Emotion Timeline */}
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">Aggregated Emotion Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={emotionTimeline}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'white', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                />
                <Legend />
                <Line type="monotone" dataKey="stress" stroke="#f97316" strokeWidth={2} name="Stress Level" />
                <Line type="monotone" dataKey="confidence" stroke="#0891b2" strokeWidth={2} name="Confidence" />
                <Line type="monotone" dataKey="focus" stroke="#8b5cf6" strokeWidth={2} name="Focus" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* MicroSkill Tracker */}
        <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
          <CardHeader>
            <CardTitle className="text-gray-900">MicroSkill Tracker Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Skill</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Class Average</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Benchmark</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm text-gray-600">Progress</th>
                  </tr>
                </thead>
                <tbody>
                  {microSkillData.map((skill, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-3 px-4 text-gray-900">{skill.skill}</td>
                      <td className="py-3 px-4 text-gray-700">{skill.avgScore}/10</td>
                      <td className="py-3 px-4 text-gray-700">{skill.benchmark}/10</td>
                      <td className="py-3 px-4">
                        {skill.avgScore >= skill.benchmark ? (
                          <span className="text-green-600">✓ Above Benchmark</span>
                        ) : (
                          <span className="text-orange-600">⚠ Below Benchmark</span>
                        )}
                      </td>
                      <td className="py-3 px-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-full rounded-full ${skill.avgScore >= skill.benchmark ? 'bg-green-500' : 'bg-orange-500'}`}
                            style={{ width: `${(skill.avgScore / 10) * 100}%` }}
                          />
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
