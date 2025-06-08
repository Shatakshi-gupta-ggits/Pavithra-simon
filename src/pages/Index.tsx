
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUp, Youtube, Linkedin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center gradient-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white animate-fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering Careers & 
                <span className="block hr-gold">Advancing HR Awareness</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                HR Specialist | IIM Shillong | Pearson (UK) | Unfiltered Facts
              </p>
              <p className="text-lg mb-10 text-white/80 max-w-lg">
                Combining strategic thinking with emotional intelligence to build high-performing teams and drive organizational success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link to="/contact">Let's Connect</Link>
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="lg"
                  className="bg-white text-accent hover:bg-accent hover:text-white border-0 transition-colors"
                >
                  <Link to="/videos">Watch My Videos</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-float">
              <div className="w-80 h-80 mx-auto relative">
                <img
                  src="https://i.ibb.co/xQXRknz/Screenshot-2025-06-08-220110.png"
                  alt="Pavithra Simon - HR Specialist"
                  className="w-full h-full object-cover rounded-full border-8 border-white/20 shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold shadow-lg">
                  1.4K+ YouTube Subscribers
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-3xl font-bold hr-blue mb-2">10+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-3xl font-bold hr-blue mb-2">14K+</div>
                <div className="text-muted-foreground">YouTube Followers</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-3xl font-bold hr-blue mb-2">4</div>
                <div className="text-muted-foreground">Languages</div>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-3xl font-bold hr-blue mb-2">SHRM</div>
                <div className="text-muted-foreground">Certified</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8 hr-navy">My Mission</h2>
          <blockquote className="text-2xl italic text-muted-foreground mb-8 leading-relaxed">
            "We become what we think."
          </blockquote>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To empower professionals at every stage of their career journey through practical HR insights, 
            strategic guidance, and authentic leadership. I believe in creating workplaces where boundaries 
            are respected, potential is unleashed, and success is shared.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 hr-navy">Explore My Work</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <Youtube className="w-12 h-12 hr-blue mb-4" />
                <h3 className="text-xl font-semibold mb-4">HR Insights Videos</h3>
                <p className="text-muted-foreground mb-6">
                  Watch my latest videos on HR trends, career advice, and workplace dynamics.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/videos">Watch Videos</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <ArrowUp className="w-12 h-12 hr-blue mb-4" />
                <h3 className="text-xl font-semibold mb-4">Career Journey</h3>
                <p className="text-muted-foreground mb-6">
                  Explore my professional timeline from Customer Care to HR leadership.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/experience">View Experience</Link>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardContent className="p-8">
                <Linkedin className="w-12 h-12 hr-blue mb-4" />
                <h3 className="text-xl font-semibold mb-4">Connect & Collaborate</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss HR strategies, career opportunities, or collaboration ideas.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Pavithra Simon. Empowering careers through authentic HR leadership.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Built by Shatakshi Gupta.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
