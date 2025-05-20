import { useState, useEffect } from "react";
import { Bell, ChevronDown, Download, Home, Menu, PlusCircle, Search, Settings, Users, X, Filter } from "lucide-react";

// Main App Component
export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false);
      } else if (window.innerWidth > 1024) {
        setIsSidebarOpen(true);
      }
    };

    // Set initial state
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    if (isMobileView) {
      setShowMobileMenu(!showMobileMenu);
    }
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
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile Menu Overlay */}
      {isMobileView && showMobileMenu && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setShowMobileMenu(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`bg-white border-r border-gray-200 flex flex-col fixed lg:relative z-50 h-full
        ${isMobileView 
          ? showMobileMenu 
            ? 'w-64 left-0' 
            : 'w-0 -left-64' 
          : isSidebarOpen 
            ? 'w-64' 
            : 'w-20'
        } transition-all duration-300`}
      >
        {/* Logo */}
        <div className="p-4 border-b flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">a</div>
            </div>
            {(isSidebarOpen || (isMobileView && showMobileMenu)) && <span className="ml-3 font-medium">abun</span>}
          </div>
          {isMobileView && showMobileMenu && (
            <button onClick={() => setShowMobileMenu(false)} className="text-gray-500">
              <X size={20} />
            </button>
          )}
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
                <div className="text-gray-500">{item.icon}</div>
                {(isSidebarOpen || (isMobileView && showMobileMenu)) && <span className="ml-3">{item.name}</span>}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 flex items-center justify-between p-4 sticky top-0 z-30">
          <div className="flex items-center">
            <button 
              onClick={toggleSidebar} 
              className="p-2 rounded-md text-gray-500 hover:bg-gray-100"
              aria-label="Toggle sidebar"
            >
              <Menu size={20} />
            </button>
            <h1 className="ml-2 text-lg font-semibold text-gray-800 hidden sm:block">Articles Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-500 hover:bg-gray-100">
              <Bell size={20} />
            </button>
            <div className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-300"></div>
              <span className="ml-2 text-sm text-gray-700 hidden sm:inline">Admin</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-2 sm:p-4 bg-gray-100">
          <div className="bg-white rounded-lg shadow">
            {/* Articles Header */}
            <div className="p-3 sm:px-6 sm:py-4 border-b border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <h2 className="text-lg font-medium text-gray-900">Articles</h2>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  {/* Mobile Filter Button */}
                  <div className="sm:hidden w-full flex justify-between">
                    <button 
                      onClick={() => setShowMobileFilters(!showMobileFilters)}
                      className="px-3 py-2 border border-gray-300 rounded-md text-sm flex items-center"
                    >
                      <Filter size={16} className="mr-1" />
                      Filters
                    </button>
                    
                    <button className="px-3 py-2 bg-blue-600 text-white rounded-md text-sm">
                      + Create
                    </button>
                  </div>
                  
                  {/* Desktop buttons */}
                  <button className="hidden sm:block px-4 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    + Create Article
                  </button>
                  
                  {/* Search - always visible but responsive */}
                  <div className={`relative w-full sm:w-auto ${showMobileFilters ? 'block' : 'hidden sm:block'}`}>
                    <input 
                      type="text" 
                      placeholder="Search for keywords..." 
                      className="block w-full sm:w-64 rounded-md border border-gray-300 py-2 pl-3 pr-10 text-sm"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                      <Search size={18} className="text-gray-400" />
                    </div>
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
                      {/* Checkbox column - hidden on mobile */}
                      <th scope="col" className="hidden sm:table-cell px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" />
                      </th>
                      
                      {/* Article Title - always visible */}
                      <th scope="col" className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Article Title
                      </th>
                      
                      {/* Keyword Profile - hidden on small mobile */}
                      <th scope="col" className="hidden md:table-cell px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        <div className="flex items-center">
                          <span>Keyword Profile</span>
                          <ChevronDown size={16} className="ml-1" />
                        </div>
                      </th>
                      
                      {/* Words - hidden on smaller screens */}
                      <th scope="col" className="hidden lg:table-cell px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Words
                      </th>
                      
                      {/* Created On - hidden on small mobile */}
                      <th scope="col" className="hidden sm:table-cell px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created On
                      </th>
                      
                      {/* Actions - always visible */}
                      <th scope="col" className="px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                      
                      {/* Publish - visible on tablet and up */}
                      <th scope="col" className="hidden sm:table-cell px-2 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Publish
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {articlesData.map((article) => (
                      <tr key={article.id} className="hover:bg-gray-50">
                        {/* Checkbox - hidden on mobile */}
                        <td className="hidden sm:table-cell px-2 sm:px-6 py-4 whitespace-nowrap">
                          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600" />
                        </td>
                        
                        {/* Title - always visible */}
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900 truncate max-w-xs">{article.title}</div>
                          {/* Mobile-only indicators */}
                          <div className="sm:hidden flex items-center space-x-2 mt-1 text-xs text-gray-500">
                            <span className={`px-2 py-0.5 rounded-full ${
                              article.status === 'published' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                              {article.status === 'published' ? 'Published' : 'Draft'}
                            </span>
                            <span>{article.createdOn}</span>
                          </div>
                        </td>
                        
                        {/* Keyword Profile - hidden on small mobile */}
                        <td className="hidden md:table-cell px-2 sm:px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500 truncate max-w-xs">{article.keywordProfile}</div>
                        </td>
                        
                        {/* Words - hidden on smaller screens */}
                        <td className="hidden lg:table-cell px-2 sm:px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{article.words}</div>
                        </td>
                        
                        {/* Created On - hidden on small mobile */}
                        <td className="hidden sm:table-cell px-2 sm:px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">{article.createdOn}</div>
                        </td>
                        
                        {/* Actions - always visible */}
                        <td className="px-2 sm:px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-900">
                            <Download size={18} />
                          </button>
                        </td>
                        
                        {/* Publish - visible on tablet and up */}
                        <td className="hidden sm:table-cell px-2 sm:px-6 py-4 whitespace-nowrap">
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
            <div className="px-3 py-3 sm:px-6 sm:py-4 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                <div className="flex flex-wrap items-center text-sm text-gray-700 gap-2">
                  <span>Total: 7 Articles</span>
                  <div className="flex items-center space-x-1">
                    <span className="hidden sm:inline">| Show:</span>
                    <select className="border border-gray-300 rounded px-2 py-1 text-sm">
                      <option>10</option>
                      <option>25</option>
                      <option>50</option>
                    </select>
                    <span className="hidden sm:inline">entries per page</span>
                  </div>
                </div>
                <div className="flex items-center justify-center sm:justify-end space-x-1 sm:space-x-2">
                  <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm">Prev</button>
                  <button className="px-2 sm:px-3 py-1 bg-blue-600 text-white rounded-md text-xs sm:text-sm">1</button>
                  <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm">2</button>
                  <button className="px-2 sm:px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm">Next</button>
                </div>
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
  const isMobile = window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  
  // Determine number of columns to show based on screen size
  const numColumns = isMobile ? 3 : isTablet ? 5 : 7;
  
  return (
    <div className="animate-pulse">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {Array(numColumns).fill(0).map((_, i) => (
                <th key={i} scope="col" className="px-2 sm:px-6 py-3">
                  <div className="h-4 bg-gray-200 rounded w-16 sm:w-20"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array(5).fill(0).map((_, rowIndex) => (
              <tr key={rowIndex}>
                {Array(numColumns).fill(0).map((_, colIndex) => (
                  <td key={colIndex} className="px-2 sm:px-6 py-4 whitespace-nowrap">
                    <div className={`h-4 bg-gray-200 rounded ${colIndex === 1 ? 'w-24 sm:w-40' : 'w-16 sm:w-20'}`}></div>
                    {/* Add mobile indicators for first column */}
                    {isMobile && colIndex === 0 && (
                      <div className="flex mt-2 space-x-2">
                        <div className="h-3 bg-gray-200 rounded w-12"></div>
                        <div className="h-3 bg-gray-200 rounded w-16"></div>
                      </div>
                    )}
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