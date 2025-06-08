import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Navigation from '@/components/Navigation';
import { Youtube, Linkedin, ArrowUp } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 hr-navy">Let's Connect</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to discuss HR strategies, career opportunities, or collaboration ideas? 
              I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 hr-blue">Send a Message</h2>
                <form
                  action="https://formsubmit.co/shatakshig2005@gmail.com"
                  method="POST"
                  className="space-y-6"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="Full Name"
                        required
                        className="mt-2"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="Email"
                        type="email"
                        required
                        className="mt-2"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="Subject"
                      required
                      className="mt-2"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="Message"
                      required
                      className="mt-2 min-h-32"
                      placeholder="Tell me more about your inquiry..."
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                    <ArrowUp className="w-4 h-4 ml-2 rotate-45" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Location & Availability */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 hr-blue">Location & Availability</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold hr-navy">Primary Location</h4>
                      <p className="text-muted-foreground">Colombo, Sri Lanka</p>
                    </div>
                    <div>
                      <h4 className="font-semibold hr-navy">Secondary Location</h4>
                      <p className="text-muted-foreground">Hyderabad, India</p>
                    </div>
                    <div>
                      <h4 className="font-semibold hr-navy">Availability</h4>
                      <p className="text-muted-foreground">
                        Open to remote consultations and virtual meetings worldwide
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 hr-blue">Connect on Social Media</h3>
                    <div className="space-y-4">
                    <a 
                      href="https://www.linkedin.com/in/pavithra-simon-%E2%9C%8D%F0%9F%8F%BC-906059180?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <Linkedin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <p className="text-sm text-muted-foreground">Professional network & insights</p>
                      </div>

                    </a>
                    
                    <a 
                      href="https://youtube.com/@pavithrasimonhr?feature=shared"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <Youtube className="w-6 h-6 text-white" />
                      </div>
                      <div>
                      <h4 className="font-semibold">YouTube Channel</h4>
                      <p className="text-sm text-muted-foreground">14K+ subscribers • HR insights & advice</p>
                      </div>
                      
                    </a>
                    </div>
                </CardContent>
              </Card>

              {/* Collaboration Opportunities */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 hr-blue">Collaboration Opportunities</h3>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>HR Consulting & Strategy Development</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Speaking Engagements & Workshops</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Content Collaboration & Guest Appearances</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Career Mentoring & Coaching</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Organizational Development Projects</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6 hr-navy">Ready to Get Started?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Whether you're looking to transform your HR practices, advance your career, 
                  or explore collaboration opportunities, I'm here to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg">
                    Schedule a Call
                  </Button>
                  <Button variant="outline" size="lg">
                    Download My Resume
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
