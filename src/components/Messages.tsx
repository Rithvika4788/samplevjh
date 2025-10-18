import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Mail, Send, Lightbulb } from 'lucide-react';
import { Badge } from './ui/badge';

interface Message {
  id: string;
  from: string;
  to: string;
  content: string;
  date: string;
  type: 'ai' | 'manual';
}

export function Messages() {
  const [messageContent, setMessageContent] = useState('');
  const [selectedRecipient, setSelectedRecipient] = useState('');

  const messages: Message[] = [
    {
      id: '1',
      from: 'AI System',
      to: 'You',
      content: 'Alert: Rithvika needs additional support in Calculus. Performance dropped 15% in last test.',
      date: '2 hours ago',
      type: 'ai'
    },
    {
      id: '2',
      from: 'You',
      to: 'Arjun Patel',
      content: 'Great work on the Physics test! Your problem-solving approach has improved significantly.',
      date: '1 day ago',
      type: 'manual'
    },
    {
      id: '3',
      from: 'AI System',
      to: 'You',
      content: 'Suggestion: Class shows high stress in Thermodynamics. Consider a revision session.',
      date: '2 days ago',
      type: 'ai'
    },
  ];

  const aiSuggestions = [
    {
      id: '1',
      title: 'Encourage after low score',
      template: 'I noticed your recent performance in [subject]. Don\'t worry - everyone has challenging topics. Let\'s work together to improve your understanding. I recommend focusing on [specific concepts].'
    },
    {
      id: '2',
      title: 'Congratulate for improvement',
      template: 'Excellent progress on your recent [subject] test! Your score improved by [X]%. Keep up the great work! Your dedication is paying off.'
    },
    {
      id: '3',
      title: 'Address high stress',
      template: 'I noticed the recent test may have been stressful. Remember, it\'s okay to take breaks and practice mindfulness. If you need any support or want to discuss study strategies, I\'m here to help.'
    },
  ];

  const handleSendMessage = () => {
    // Handle sending message
    setMessageContent('');
  };

  const handleUseTemplate = (template: string) => {
    setMessageContent(template);
  };

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <h1 className="text-2xl text-gray-900">Messages</h1>
          <p className="text-sm text-gray-600">Direct communication & alerts</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Inbox */}
          <div className="lg:col-span-2">
            <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-600" />
                  Inbox
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`p-4 rounded-lg border transition-colors hover:shadow-md ${
                        message.type === 'ai' 
                          ? 'bg-blue-50 border-blue-200' 
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-900">{message.from}</span>
                          {message.type === 'ai' && (
                            <Badge variant="outline" className="border-blue-400 text-blue-700 text-xs">
                              AI
                            </Badge>
                          )}
                        </div>
                        <span className="text-xs text-gray-600">{message.date}</span>
                      </div>
                      <p className="text-sm text-gray-700">{message.content}</p>
                      <div className="mt-2 text-xs text-gray-600">
                        To: <span className="text-gray-900">{message.to}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Compose Message */}
            <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg mt-6">
              <CardHeader>
                <CardTitle className="text-gray-900">Compose Message</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm text-gray-700">To</label>
                  <Select value={selectedRecipient} onValueChange={setSelectedRecipient}>
                    <SelectTrigger className="bg-white border-gray-300">
                      <SelectValue placeholder="Select recipient" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Students</SelectItem>
                      <SelectItem value="rithvika">Rithvika Sharma</SelectItem>
                      <SelectItem value="arjun">Arjun Patel</SelectItem>
                      <SelectItem value="priya">Priya Reddy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm text-gray-700">Message</label>
                  <Textarea
                    placeholder="Write your message..."
                    value={messageContent}
                    onChange={(e) => setMessageContent(e.target.value)}
                    className="min-h-[120px] bg-white border-gray-300"
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                  onClick={handleSendMessage}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* AI Suggestions Panel */}
          <div>
            <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg sticky top-24">
              <CardHeader>
                <CardTitle className="text-gray-900 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-yellow-500" />
                  AI Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {aiSuggestions.map((suggestion) => (
                    <div key={suggestion.id} className="p-3 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-lg border border-yellow-200">
                      <h4 className="text-sm text-gray-900 mb-2">{suggestion.title}</h4>
                      <p className="text-xs text-gray-700 mb-3">{suggestion.template}</p>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full border-yellow-300 hover:bg-yellow-100"
                        onClick={() => handleUseTemplate(suggestion.template)}
                      >
                        Use Template
                      </Button>
                    </div>
                  ))}
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-sm text-gray-900 mb-2">💡 Quick Tips</h4>
                  <ul className="text-xs text-gray-700 space-y-1 list-disc list-inside">
                    <li>Be specific with feedback</li>
                    <li>Highlight strengths first</li>
                    <li>Suggest actionable next steps</li>
                    <li>Maintain encouraging tone</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
