import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Trophy, TrendingUp, Target, Zap } from 'lucide-react';
import { Badge } from './ui/badge';

interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
  subject?: string;
  change?: number;
}

export function Leaderboard() {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('week');

  const topScorers: LeaderboardEntry[] = [
    { rank: 1, name: 'Sneha Iyer', score: 94, subject: 'Overall' },
    { rank: 2, name: 'Arjun Patel', score: 91, subject: 'Overall' },
    { rank: 3, name: 'Priya Reddy', score: 88, subject: 'Overall' },
    { rank: 4, name: 'Vikram Singh', score: 86, subject: 'Overall' },
    { rank: 5, name: 'Ananya Kumar', score: 84, subject: 'Overall' },
  ];

  const mostImproved: LeaderboardEntry[] = [
    { rank: 1, name: 'Karthik Kumar', score: 71, change: 18 },
    { rank: 2, name: 'Rithvika Sharma', score: 76, change: 14 },
    { rank: 3, name: 'Deepak Rao', score: 79, change: 12 },
    { rank: 4, name: 'Meera Patel', score: 82, change: 10 },
    { rank: 5, name: 'Rahul Verma', score: 77, change: 9 },
  ];

  const focusChampions: LeaderboardEntry[] = [
    { rank: 1, name: 'Sneha Iyer', score: 94, subject: 'Focus & Balance' },
    { rank: 2, name: 'Arjun Patel', score: 91, subject: 'Focus & Balance' },
    { rank: 3, name: 'Priya Reddy', score: 88, subject: 'Focus & Balance' },
    { rank: 4, name: 'Ananya Kumar', score: 86, subject: 'Focus & Balance' },
    { rank: 5, name: 'Vikram Singh', score: 84, subject: 'Focus & Balance' },
  ];

  const transferabilityPros: LeaderboardEntry[] = [
    { rank: 1, name: 'Arjun Patel', score: 9.2 },
    { rank: 2, name: 'Sneha Iyer', score: 8.8 },
    { rank: 3, name: 'Priya Reddy', score: 8.5 },
    { rank: 4, name: 'Vikram Singh', score: 8.2 },
    { rank: 5, name: 'Ananya Kumar', score: 7.9 },
  ];

  const getRankIcon = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `${rank}`;
  };

  const LeaderboardTable = ({ data, showChange = false, scoreUnit = '%' }: { 
    data: LeaderboardEntry[]; 
    showChange?: boolean;
    scoreUnit?: string;
  }) => (
    <div className="space-y-2">
      {data.map((entry) => (
        <div 
          key={entry.rank} 
          className={`flex items-center justify-between p-4 rounded-lg border transition-all hover:shadow-md ${
            entry.rank <= 3 
              ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200' 
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 flex items-center justify-center text-xl">
              {getRankIcon(entry.rank)}
            </div>
            <div className="flex items-center gap-3 flex-1">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white">
                {entry.name.charAt(0)}
              </div>
              <div>
                <div className="text-gray-900">{entry.name}</div>
                {entry.subject && <div className="text-xs text-gray-600">{entry.subject}</div>}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {showChange && entry.change && (
              <Badge className="bg-green-500 text-white">
                <TrendingUp className="w-3 h-3 mr-1" />
                +{entry.change}%
              </Badge>
            )}
            <div className="text-right">
              <div className="text-xl text-gray-900">
                {entry.score}{scoreUnit}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl text-gray-900">Leaderboard</h1>
              <p className="text-sm text-gray-600">Encourage healthy competition</p>
            </div>
            <div className="flex items-center gap-3">
              <Select value={selectedSubject} onValueChange={setSelectedSubject}>
                <SelectTrigger className="w-[150px] bg-white border-gray-300">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Subjects</SelectItem>
                  <SelectItem value="math">Mathematics</SelectItem>
                  <SelectItem value="physics">Physics</SelectItem>
                  <SelectItem value="chemistry">Chemistry</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
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
      <div className="p-6">
        <Tabs defaultValue="top-scorers" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-gray-200 p-1">
            <TabsTrigger value="top-scorers" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              <Trophy className="w-4 h-4 mr-2" />
              Top Scorers
            </TabsTrigger>
            <TabsTrigger value="most-improved" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              <TrendingUp className="w-4 h-4 mr-2" />
              Most Improved
            </TabsTrigger>
            <TabsTrigger value="focus-champions" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              <Target className="w-4 h-4 mr-2" />
              Focus Champions
            </TabsTrigger>
            <TabsTrigger value="transferability" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-600 data-[state=active]:text-white">
              <Zap className="w-4 h-4 mr-2" />
              Transferability Pros
            </TabsTrigger>
          </TabsList>

          <TabsContent value="top-scorers">
            <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Top Scorers - Based on Accuracy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LeaderboardTable data={topScorers} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="most-improved">
            <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-green-500" />
                  Most Improved - Based on Progress
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LeaderboardTable data={mostImproved} showChange />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="focus-champions">
            <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Target className="w-5 h-5 text-purple-500" />
                  Focus Champions - Best Focus/Stress Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LeaderboardTable data={focusChampions} />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transferability">
            <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-500" />
                  Transferability Pros - Highest LTI Scores
                </CardTitle>
              </CardHeader>
              <CardContent>
                <LeaderboardTable data={transferabilityPros} scoreUnit="/10" />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
