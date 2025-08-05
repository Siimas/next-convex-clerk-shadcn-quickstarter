"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import {
  Building2,
  Users,
  Calendar,
  FileText,
  TrendingUp,
  DollarSign,
  CheckCircle,
  Plus,
  Search,
  Bell,
  Settings,
  Home,
  Briefcase,
  UserCheck,
  BarChart3,
  MapPin,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 border-r flex flex-col">
        <div className="p-6 border-b">
          <div className="flex items-center gap-2">
            <Building2 className="h-8 w-8" />
            <span className="text-xl font-bold ">BuildCRM</span>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-2">
          <Button variant="default" className="w-full justify-start">
            <Home className="mr-3 h-4 w-4" />
            Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Briefcase className="mr-3 h-4 w-4" />
            Projects
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Users className="mr-3 h-4 w-4" />
            Clients
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <UserCheck className="mr-3 h-4 w-4" />
            Leads
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Calendar className="mr-3 h-4 w-4" />
            Schedule
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <FileText className="mr-3 h-4 w-4" />
            Documents
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <BarChart3 className="mr-3 h-4 w-4" />
            Reports
          </Button>
        </nav>

        <div className="p-4 border-t ">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-3 h-4 w-4" />
            Settings
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className=" border-b  px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold ">Dashboard</h1>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search projects, clients..."
                  className="pl-10 w-80"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                New Project
              </Button>
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Active Projects
                </CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24</div>
                <p className="text-xs text-muted-foreground">
                  +2 from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$2.4M</div>
                <p className="text-xs text-muted-foreground">
                  +15% from last month
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">New Leads</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18</div>
                <p className="text-xs text-muted-foreground">+8 this week</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Completion Rate
                </CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">94%</div>
                <p className="text-xs text-muted-foreground">
                  +2% from last month
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Projects */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Projects</CardTitle>
                  <CardDescription>
                    Your latest construction projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            Downtown Office Complex
                          </h4>
                          <p className="text-sm text-gray-600">
                            Meridian Construction Co.
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-500">
                              Seattle, WA
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800">
                          In Progress
                        </Badge>
                        <div className="mt-2">
                          <div className="text-sm text-gray-600">Progress</div>
                          <Progress value={75} className="w-24 mt-1" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            Residential Complex Phase 2
                          </h4>
                          <p className="text-sm text-gray-600">
                            Sunset Homes LLC
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-500">
                              Portland, OR
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-yellow-100 text-yellow-800">
                          Planning
                        </Badge>
                        <div className="mt-2">
                          <div className="text-sm text-gray-600">Progress</div>
                          <Progress value={25} className="w-24 mt-1" />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Building2 className="h-6 w-6 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold">
                            Highway Bridge Renovation
                          </h4>
                          <p className="text-sm text-gray-600">
                            State Infrastructure Dept.
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <MapPin className="h-3 w-3 text-gray-400" />
                            <span className="text-xs text-gray-500">
                              Tacoma, WA
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className="bg-green-100 text-green-800">
                          Completed
                        </Badge>
                        <div className="mt-2">
                          <div className="text-sm text-gray-600">Progress</div>
                          <Progress value={100} className="w-24 mt-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Upcoming Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tasks</CardTitle>
                  <CardDescription>Your schedule for today</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Site inspection - Downtown Office
                        </p>
                        <p className="text-xs text-gray-500">9:00 AM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Client meeting - Sunset Homes
                        </p>
                        <p className="text-xs text-gray-500">2:00 PM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">
                          Material delivery coordination
                        </p>
                        <p className="text-xs text-gray-500">4:30 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Leads */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Leads</CardTitle>
                  <CardDescription>New potential clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>TC</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Tech Corp Inc.</p>
                          <p className="text-xs text-gray-500">
                            Office renovation
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">New</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>GH</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">Green Homes LLC</p>
                          <p className="text-xs text-gray-500">
                            Residential project
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">Contacted</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>RS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-sm font-medium">
                            Retail Solutions
                          </p>
                          <p className="text-xs text-gray-500">
                            Store buildout
                          </p>
                        </div>
                      </div>
                      <Badge variant="outline">Qualified</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-auto p-3 flex flex-col gap-1 bg-transparent"
                    >
                      <Plus className="h-4 w-4" />
                      <span className="text-xs">New Lead</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-auto p-3 flex flex-col gap-1 bg-transparent"
                    >
                      <Calendar className="h-4 w-4" />
                      <span className="text-xs">Schedule</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-auto p-3 flex flex-col gap-1 bg-transparent"
                    >
                      <FileText className="h-4 w-4" />
                      <span className="text-xs">Documents</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-auto p-3 flex flex-col gap-1 bg-transparent"
                    >
                      <BarChart3 className="h-4 w-4" />
                      <span className="text-xs">Reports</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
