
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Youtube, ArrowUp } from 'lucide-react';

const Videos = () => {
  const featuredVideos = [
    {
      title: "Never Allow Anyone at Your Workplace to Violate Your Boundaries!",
      description: "Essential insights on maintaining professional boundaries and creating a respectful workplace culture.",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: "12K",
      duration: "8:45",
      category: "Workplace Dynamics"
    },
    {
      title: "HR Transformation: Adapting to the Future of Work",
      description: "How HR professionals can lead digital transformation and embrace new workplace trends.",
      thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: "8.5K",
      duration: "12:30",
      category: "HR Strategy"
    },
    {
      title: "Building High-Performance Teams: A Practical Guide",
      description: "Proven strategies for creating and maintaining teams that deliver exceptional results.",
      thumbnail: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: "15K",
      duration: "10:15",
      category: "Leadership"
    },
    {
      title: "Career Growth Mindset: Think Your Way to Success",
      description: "How mindset shapes career trajectory and practical steps to develop a growth-oriented approach.",
      thumbnail: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: "11K",
      duration: "9:20",
      category: "Career Development"
    },
    {
      title: "Emotional Intelligence in HR Leadership",
      description: "The role of emotional intelligence in effective HR management and team dynamics.",
      thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: "9.8K",
      duration: "11:45",
      category: "Soft Skills"
    },
    {
      title: "Navigating Workplace Conflicts with Confidence",
      description: "Proven techniques for resolving conflicts and maintaining positive workplace relationships.",
      thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      views: "13.2K",
      duration: "7:55",
      category: "Conflict Resolution"
    }
  ];

  const categories = ["All", "Workplace Dynamics", "HR Strategy", "Leadership", "Career Development", "Soft Skills", "Conflict Resolution"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 hr-navy">HR Insights & Videos</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Practical insights, unfiltered facts, and actionable advice for HR professionals and career growth.
            </p>
            
            {/* Channel Stats */}
            <div className="flex justify-center items-center gap-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold hr-blue">1.4K+</div>
                <div className="text-muted-foreground">Subscribers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold hr-blue">95+</div>
                <div className="text-muted-foreground">Videos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold hr-blue">40K+</div>
                <div className="text-muted-foreground">Total Views</div>
              </div>
            </div>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white"
              asChild
            >
              <a
              href="https://youtube.com/@pavithrasimonhr?feature=shared"
              target="_blank"
              rel="noopener noreferrer"
              >
              <Youtube className="w-5 h-5 mr-2" />
              Subscribe to My Channel
              </a>
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="outline" 
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Featured Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <ArrowUp className="w-8 h-8 text-white rotate-90" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {video.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 hr-navy line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {video.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{video.views} views</span>
                    <span>Watch now</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-12">
                <Youtube className="w-16 h-16 mx-auto mb-6 text-red-600" />
                <h2 className="text-3xl font-bold mb-6 hr-navy">Join the Community</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Subscribe to my YouTube channel for regular updates on HR trends, career advice, 
                  and practical insights that can transform your professional journey.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                    <Youtube className="w-5 h-5 mr-2" />
                    Subscribe Now
                  </Button>
                  <Button variant="outline" size="lg">
                    View All Videos
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

export default Videos;
