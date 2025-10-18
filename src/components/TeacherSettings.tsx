import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Switch } from './ui/switch';
import { Separator } from './ui/separator';
import { User, Mail, Phone, Book, Bell, Download, Moon, Sun } from 'lucide-react';
import { Badge } from './ui/badge';

export function TeacherSettings() {
  const [name, setName] = useState('Dr. Sharma');
  const [email, setEmail] = useState('sharma@neetjeet.com');
  const [phone, setPhone] = useState('+91 9876543210');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [inAppNotifications, setInAppNotifications] = useState(true);
  const [selectedSubjects, setSelectedSubjects] = useState(['Math', 'Physics']);

  const subjects = ['Math', 'Physics', 'Chemistry', 'Biology'];

  const toggleSubject = (subject: string) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  return (
    <div className="flex-1 overflow-auto bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      {/* Top Bar */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="px-6 py-4">
          <h1 className="text-2xl text-gray-900">Settings</h1>
          <p className="text-sm text-gray-600">Manage your profile and preferences</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 max-w-4xl">
        <div className="space-y-6">
          {/* Profile Settings */}
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-cyan-600" />
                Profile Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl">
                  DS
                </div>
                <div className="flex-1">
                  <Button variant="outline" className="border-gray-300">
                    Upload Photo
                  </Button>
                  <p className="text-xs text-gray-600 mt-2">JPG, PNG or GIF (max. 2MB)</p>
                </div>
              </div>

              <Separator className="bg-gray-200" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Full Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="bg-white border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-700">Phone</Label>
                  <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-white border-gray-300"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-gray-700">Contact</Label>
                  <Input
                    id="contact"
                    placeholder="Additional contact"
                    className="bg-white border-gray-300"
                  />
                </div>
              </div>

              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white">
                Save Profile
              </Button>
            </CardContent>
          </Card>

          {/* Subjects Handled */}
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Book className="w-5 h-5 text-blue-600" />
                Subjects Handled
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => toggleSubject(subject)}
                    className={`px-4 py-2 rounded-lg border transition-all ${
                      selectedSubjects.includes(subject)
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-md'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Notification Preferences */}
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Bell className="w-5 h-5 text-yellow-600" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <Label htmlFor="email-notif" className="text-gray-900">Email Notifications</Label>
                  <p className="text-xs text-gray-600">Receive alerts via email</p>
                </div>
                <Switch
                  id="email-notif"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>

              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div>
                  <Label htmlFor="app-notif" className="text-gray-900">In-App Notifications</Label>
                  <p className="text-xs text-gray-600">Receive alerts within the app</p>
                </div>
                <Switch
                  id="app-notif"
                  checked={inAppNotifications}
                  onCheckedChange={setInAppNotifications}
                />
              </div>

              <Separator className="bg-gray-200" />

              <div className="space-y-2">
                <h4 className="text-sm text-gray-900">Notify me about:</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                    <span>Student performance alerts</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                    <span>Test completion updates</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" defaultChecked className="rounded border-gray-300" />
                    <span>AI-generated insights</span>
                  </label>
                  <label className="flex items-center gap-2 text-sm text-gray-700">
                    <input type="checkbox" className="rounded border-gray-300" />
                    <span>Weekly performance summary</span>
                  </label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Theme Settings */}
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900">Theme</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
                <div className="flex items-center gap-3">
                  {isDarkMode ? <Moon className="w-5 h-5 text-gray-700" /> : <Sun className="w-5 h-5 text-gray-700" />}
                  <div>
                    <Label htmlFor="theme" className="text-gray-900">Dark Mode</Label>
                    <p className="text-xs text-gray-600">Switch between light and dark theme</p>
                  </div>
                </div>
                <Switch
                  id="theme"
                  checked={isDarkMode}
                  onCheckedChange={setIsDarkMode}
                />
              </div>
            </CardContent>
          </Card>

          {/* Export Data */}
          <Card className="border-gray-200 bg-white/80 backdrop-blur shadow-lg">
            <CardHeader>
              <CardTitle className="text-gray-900 flex items-center gap-2">
                <Download className="w-5 h-5 text-green-600" />
                Export Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-gray-700">Download your class data and reports</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="border-gray-300">
                  <Download className="w-4 h-4 mr-2" />
                  Export as CSV
                </Button>
                <Button variant="outline" className="border-gray-300">
                  <Download className="w-4 h-4 mr-2" />
                  Export as PDF
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
