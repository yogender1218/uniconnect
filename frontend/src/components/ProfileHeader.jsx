import React, { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Input from "@/components/ui/input";
import { toast } from "sonner";
import { GraduationCap, Briefcase, DollarSign } from "lucide-react";

const ProfileHeader = () => {
  const { user = {
    name: "Demo User",
    email: "demo@example.com",
    avatarUrl: "/placeholder.svg",
    coverUrl: "/placeholder.svg",
    type: "student",
    profile: {
      university: "Demo University",
      degree: "BCA",
      graduation_year: "2025",
    }
  }, updateProfileImage } = useAuth() || {};  // <-- अगर useAuth null हो तो empty object assign होगा
  
  const [isEditingAvatar, setIsEditingAvatar] = useState(false);
  const [isEditingCover, setIsEditingCover] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");

  const handleUpdateImage = (type) => {
    const url = type === "avatar" ? avatarUrl : coverUrl;

    if (!url) {
      toast.error(`Please enter a valid ${type} URL`);
      return;
    }

    updateProfileImage?.(type, url); // <-- अगर updateProfileImage null हो तो error न आए
    
    if (type === "avatar") {
      setIsEditingAvatar(false);
      setAvatarUrl("");
    } else {
      setIsEditingCover(false);
      setCoverUrl("");
    }
  };

  // Helper to determine primary info
  const getPrimaryInfo = () => {
    if (!user?.profile) return null; // <-- Safe check

    switch (user?.type || "student") {
      case "student":
      case "professor":
        return user?.profile?.university ? (
          <div className="flex items-center gap-2 text-md">
            <GraduationCap size={16} />
            <span>{user.profile.university}</span>
          </div>
        ) : null;
      case "investor":
        return user?.profile?.company ? (
          <div className="flex items-center gap-2 text-md">
            <DollarSign size={16} />
            <span>{user.profile.company}</span>
          </div>
        ) : null;
      default:
        return null;
    }
  };

  return (
    <div className="w-full" style={{backgroundColor:'var(--bg-color)',width:'80%',margin:'2px 2px 2vw 15.3vw',border:'1px solid transparent'}}>
      {/* Cover Photo */}
      <div className="relative rounded-t-xl h-40 md:h-60 overflow-hidden" style={{backgroundColor:'var(--bg-color)',border:'1px solid var(--border-color)'}}>
        <img 
          src={coverUrl || user?.coverUrl || "/placeholder.svg"} 
          onError={(e) => (e.target.src = "/placeholder.svg")} 
          alt="Cover" 
          className="w-full h-full object-cover"
        />
        <Button 
          variant="secondary" 
          size="sm" 
          className="absolute bottom-4 right-4"
          onClick={() => setIsEditingCover(!isEditingCover)}
          style={{backgroundColor:'var(--bg-color)',border:'1px solid var(--border-color)',borderRadius:'10px'}}
        >
          {isEditingCover ? "Cancel" : "Change Cover"}
        </Button>
        
        {isEditingCover && (
          <div className="absolute bottom-4 left-4 right-20 flex gap-2">
            <Input
              type="text"
              placeholder="Enter image URL"
              value={coverUrl}
              onChange={(e) => setCoverUrl(e.target.value)}
              className="bg-white/90"
              style={{border:'1px solid var(--border-color)',borderRadius:'10px',backgroundColor:'var(--blur-bgcolor)'}}
            />
            <Button onClick={() => handleUpdateImage("cover")}>Update</Button>
          </div>
        )}
      </div>
      
      {/* Profile Info & Avatar */}
      <Card className="shadow-lg" style={{border:'1px solid var(--border-color)', backgroundColor:'var(--card-bgcolor)'}}>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Avatar */}
            <div className="relative -mt-16 md:-mt-20">
              <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-background shadow-md">
                <AvatarImage src={user?.avatarUrl || "/placeholder.svg"} alt={user?.name || "User Photo"} />
                <AvatarFallback className="text-2xl">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </AvatarFallback>
              </Avatar>
              
              <Button 
                variant="outline" 
                size="sm" 
                className="absolute bottom-0 right-0"
                onClick={() => setIsEditingAvatar(!isEditingAvatar)}
                style={{backgroundColor:'var(--bg-color)',border:'1px solid var(--border-color)',borderRadius:'10px',marginTop:'5vw'}}
              >
                {isEditingAvatar ? "Cancel" : "Change"}
              </Button>
              
              {isEditingAvatar && (
                <div className="absolute top-full left-0 right-0 mt-2 flex gap-2 z-10 bg-background p-2 rounded-md shadow-md">
                  <Input
                    type="text"
                    placeholder="Enter image URL"
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    className="text-xs"
                  />
                  <Button size="sm" onClick={() => handleUpdateImage("avatar")}>Update</Button>
                </div>
              )}
            </div>

            {/* User Details */}
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold">{user?.name || "Demo User"}</h2>
              <p className="text-gray-500">{user?.email || "demo@example.com"}</p>
              {getPrimaryInfo()}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileHeader;
