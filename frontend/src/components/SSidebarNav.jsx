import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import NavItem from "@/components/NavItem";
import { Home, Bell, BarChart2, Briefcase, Lightbulb, HelpCircle } from "lucide-react";

const SSidebarNav = ({
  userName = "User",
  userType = "user",
  activeSection,
  setActiveSection,
  typeIcon
}) => {
  return (
    <div style={{width:'330px', height:'300px', backgroundColor:'var(--bg-color)'}} className="md:block bg-gray-100 min-h-screen p-4"> {/* Sidebar अब properly दिखेगा */}
      <div style={{backgroundColor:'var(--blur-bgcolor)'}} className="glass-card p-4 rounded-xl space-y-6 shadow-lg bg-white"> {/* Styling applied */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-500 mb-2">
            {typeIcon}
          </div>
          <h3 className="font-medium text-gray-800">{userName || "User"}</h3>
          <Badge className="mt-1 capitalize text-blue-600 bg-blue-100">{userType || "user"}</Badge>
        </div>
        
        <Separator />
        
        <nav className="space-y-1">
          <NavItem 
            icon={<Home size={18} />} 
            label="Home" 
            active={activeSection === "home"}
            onClick={() => setActiveSection("home")}
          />
          <NavItem 
            icon={<Bell size={18} />} 
            label="Notifications" 
            count={3}
            active={activeSection === "notifications"} 
            onClick={() => setActiveSection("notifications")}
          />
          <NavItem 
            icon={<BarChart2 size={18} />} 
            label="Analytics"
            active={activeSection === "analytics"} 
            onClick={() => setActiveSection("analytics")}
          />
          <NavItem 
            icon={<Briefcase size={18} />} 
            label="Projects"
            active={activeSection === "projects"} 
            onClick={() => setActiveSection("projects")}
          />
          <NavItem 
            icon={<Lightbulb size={18} />} 
            label="Resources"
            active={activeSection === "resources"} 
            onClick={() => setActiveSection("resources")}
          />
          <NavItem 
            icon={<HelpCircle size={18} />} 
            label="Help"
            active={activeSection === "help"} 
            onClick={() => setActiveSection("help")}
          />
        </nav>
      </div>
    </div>
  );
};

export default SSidebarNav;
