
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Users } from "lucide-react";

function SRightCard() {
  return (
    <>
    <div style={{display: "flex",flexDirection: "column",gap:'1rem',width:'30%',margin:'2px 2vw 1vw 1vw'}}>
      <Card className="glass-card" style={{border:'1px solid var(--border-color)', borderRadius:'10px', backgroundColor:'var(--blur-bgcolor)'}}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Your Courses</CardTitle>
          <CardDescription>Manage your current courses and assignments</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>Advanced Machine Learning</span>
              </div>
              <Badge style={{border:'1px solid var(--border-color)'}}  variant="outline">Assignment due</Badge>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span>Data Structures & Algorithms</span>
              </div>
              <Badge style={{border:'1px solid var(--border-color)'}}  variant="outline">New material</Badge>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                <span>Web Development</span>
              </div>
              <Badge style={{border:'1px solid var(--border-color)'}} variant="outline">Quiz tomorrow</Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter className="pt-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full"
            onClick={() => setIsCoursesOpen(true)}
            style={{border:'1px solid var(--border-color)',borderRadius:'10px', backgroundColor:'var(--blur-bgcolor)'}} 
          >
            View all courses
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="glass-card" style={{border:'1px solid var(--border-color)', borderRadius:'10px', backgroundColor:'var(--blur-bgcolor)'}}>
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Study Groups</CardTitle>
          <CardDescription>Connect with peers for collaborative learning</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Users style={{color:'blue',backgroundColor:'var(--blur-bgcolor)',border:'1px solid var(--border-color)',borderRadius:'10px',padding:'5px'}} size={30} />
              </div>
              <div>
                <p className="font-medium">Algorithm Study Group</p>
                <p className="text-xs text-muted-foreground">8 members • Meeting tomorrow</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Users style={{color:'blue',backgroundColor:'var(--blur-bgcolor)',border:'1px solid var(--border-color)',borderRadius:'10px',padding:'5px'}} size={30} />
              </div>
              <div>
                <p className="font-medium">ML Research Team</p>
                <p className="text-xs text-muted-foreground">12 members • New discussion</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      </div>
    </>
  );
}

export default SRightCard;