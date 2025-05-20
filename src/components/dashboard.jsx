import { useState } from "react";
import { Bell, ChevronDown, Download, Home, Menu, PlusCircle, Search, Settings, Users } from "lucide-react";

// Main App Component
export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Dummy data for the articles table
  const articlesData = [
    {
      id: 1,
      title: "Impact of cigarette advertising on teenagers",
      keywordProfile: "Impact of cigarette advertising",
      words: 4570,
      createdOn: "24 hours ago",
      status: "published"
    },
    {
      id: 2,
      title: "How to Market Juul among teenagers of cigarette",
      keywordProfile: "Impact of cigarette advertising",
      words: 2385,
      createdOn: "48 hours ago",
      status: "published"
    },
    {
      id: 3,
      title: "Marlboro Brands Popularity in market of cigarette",
      keywordProfile: "Impact of cigarette advertising",
      words: 3090,
      createdOn: "5 days ago",
      status: "draft"
    },
    {
      id: 4,
      title: "Top virtual blockchain ecosystem services using",
      keywordProfile: "Virtual blockchain ecosystem services",
      words: 2757,
      createdOn: "1 day ago",
      status: "published"
    },
    {
      id: 5,
      title: "Virtual ecosystem impacts through blockchain",
      keywordProfile: "Virtual blockchain ecosystem services",
      words: 3165,
      createdOn: "3 days ago",
      status: "draft"
    },
    {
      id: 6,
      title: "Blockchain for Web3 are blockchain and why they're important",
      keywordProfile: "Blockchain for Web3",
      words: 2530,
      createdOn: "4 days ago",
      status: "published"
    },
    {
      id: 7,
      title: "Investing in NFT Tokens in Global Recession is Impossible",
      keywordProfile: "NFT Tokens in Global Recession",
      words: 4678,
      createdOn: "2 days ago",
      status: "published"
    }
  ];

  // Dummy data for navigation
  const sidebarNavigation = [
    { icon: <Home size={18} />, name: "Dashboard", active: true },
    { icon: <Users size={18} />, name: "Articles", active: false },
    { icon: <Settings size={18} />, name: "Analytics", active: false },
    { icon: <PlusCircle size={18} />, name: "New Article", active: false },
    { icon: <Search size={18} />, name: "Integrations", active: false },
    { icon: <Bell size={18} />, name: "Notifications", active: false },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white ${isSidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 border-r border-gray-200 flex flex-col`}>
        {/* Logo */}
        <div className="p-4 border-b flex items-center">
          <div className="flex-shrink-0">
            <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">a</div>
          </div>
          {isSidebarOpen && <span className="ml-3 font-medium">abun</span>}
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto pt-3">
          <nav className="px-2 space-y-1">
            {sidebarNavigation.map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className={`flex items-center px-3 py-2 text-sm rounded-md ${item.active ? 'bg-gray-100 text-black' : 'text-gray-500 hover:bg-gray-100'}`}
              >
                <div className="mr-3 text-gray-500">{item.icon}</div>
                {isSidebarOpen && <span>{item.name}</span>}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between p-4">
          <button 
            onClick={toggleSidebar} 
            className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100">
              <Bell size={20} />
            </button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <span className="ml-2 text-sm text-gray-700">Admin</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
          <div className="bg-white rounded-lg shadow">
            {/* Articles Header */}
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Articles</h2>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                  + Create Article
                </button>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search for keywords..." 
                    className="block w-64 rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm"
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Search size={18} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            {isLoading ? (
              <TableSkeleton />
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" />
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Article Title
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center">
                        <span>Keyword Profile</span>
                        <ChevronDown size={16} className="ml-1" />
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Words
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created On
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Publish
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {articlesData.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{article.title}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{article.keywordProfile}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{article.words}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{article.createdOn}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Download size={18} />
                          </button>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            article.status === 'published' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {article.status === 'published' ? 'Published' : 'Draft'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Pagination */}
            <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-sm text-gray-700">
                <span>Total: 7 Articles | Show:</span>
                <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                  <option>10</option>
                  <option>25</option>
                  <option>50</option>
                </select>
                <span>entries per page</span>
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Previous</button>
                <button className="px-3 py-1 bg-blue-600 text-white rounded-md text-sm">1</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">2</button>
                <button className="px-3 py-1 border border-gray-300 rounded-md text-sm">Next</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

// Loading skeleton component
function TableSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {Array(7).fill(0).map((_, i) => (
                <th key={i} scope="col" className="px-6 py-3">
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array(7).fill(0).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array(7).fill(0).map((_, colIndex) => (
                  <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                    <div className={`h-4 bg-gray-200 rounded ${colIndex === 1 ? 'w-40' : 'w-20'}`}></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}