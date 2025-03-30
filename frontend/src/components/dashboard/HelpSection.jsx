import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { SlideIn } from "@/components/Animations";
import { BookMarked, Home, MessagesSquare, Users, Briefcase, PlayCircle, ExternalLink, Mail } from "lucide-react";

const HelpSection = ({ isHelpOpen, setIsHelpOpen, handleContactSupport }) => {
  return (
    <SlideIn>
      <Card className="glass-card">
        <CardHeader>
          <CardTitle>Help Center</CardTitle>
          <CardDescription>Get support and answers to your questions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted/50 p-4 rounded-lg">
            <h3 className="font-medium mb-2">Frequently Asked Questions</h3>
            <div className="space-y-3">
              {[
                { question: "How do I change my user type?", answer: "Go to your profile settings and select 'Change User Type' from the dropdown menu." },
                { question: "Can I connect my account to other platforms?", answer: "Yes! Go to Settings → Integrations to connect your account with other platforms." },
                { question: "How can I report inappropriate content?", answer: "Click the three dots menu on any post or comment and select 'Report' to notify our moderation team." },
              ].map((faq, index) => (
                <details className="group" key={index}>
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">▼</span>
                  </summary>
                  <p className="text-sm text-muted-foreground mt-2 pl-4">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="flex-1 flex items-center gap-2">
                  <BookMarked size={16} />
                  <span>User Guide</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle>User Guide</DialogTitle>
                  <DialogDescription>Comprehensive guide to using the platform</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 my-4">
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                      { icon: <Home size={24} className="text-primary" />, title: "Getting Started", desc: "Learn the basics of navigating the platform" },
                      { icon: <MessagesSquare size={24} className="text-primary" />, title: "Communication Tools", desc: "Posting, commenting and messaging" },
                      { icon: <Users size={24} className="text-primary" />, title: "Building Your Network", desc: "Connecting with peers and collaborators" },
                      { icon: <Briefcase size={24} className="text-primary" />, title: "Project Management", desc: "Creating and managing your projects" },
                    ].map((item, index) => (
                      <Button key={index} variant="outline" className="h-auto p-4 justify-start text-left">
                        <div className="mr-4">{item.icon}</div>
                        <div>
                          <h3 className="font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
              </DialogContent>
            </Dialog>
            <Button 
              variant="outline" 
              className="flex-1 flex items-center gap-2"
              onClick={handleContactSupport}
            >
              <MessagesSquare size={16} />
              <span>Contact Support</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </SlideIn>
  );
};

export default HelpSection;