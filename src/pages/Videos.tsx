
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import { Youtube, ArrowUp } from 'lucide-react';

const Videos = () => {
  const featuredVideos = [
    {
      title: "What is OCI ?",
      description: "",
      youtubeId: "iHozN_n2mFg",
      views: "130",
      duration: "4:10",
      category: "Now playing",
      thumbnail: "https://img.youtube.com/vi/iHozN_n2mFg/hqdefault.jpg"
    },
    {
      title: "Who is a COACH??",
      description: "",
      youtubeId: "SUzRmowhQnk",
      views: "130",
      duration: "4:10",
      category: "Now playing",
      thumbnail: "https://img.youtube.com/vi/SUzRmowhQnk/hqdefault.jpg"  
    },
    {
      title: "Why mental models are imp in the execution ?",
      description: "",
      youtubeId: "hBlGC_wLvoM",
      views: "130",
      duration: "4:10",
      category: "Now playing",
      thumbnail: "https://img.youtube.com/vi/hBlGC_wLvoM/hqdefault.jpg"  
    },
    {
      title: "How to make ATS friendly resume in 5 mins ?",
      description: "",
      youtubeId: "DTSZ12m75XI",
      views: "130",
      duration: "4:10",
      category: "Now playing",
      thumbnail: "https://img.youtube.com/vi/DTSZ12m75XI/hqdefault.jpg"  
    },
    {
      title: "Indian work visa process explained in- detailed.",
      description: "",
      youtubeId: "FLZAufDXqqU",
      views: "130",
      duration: "4:10",
      category: "Now playing",
      thumbnail: "https://img.youtube.com/vi/FLZAufDXqqU/hqdefault.jpg"  
    },
    {
      title: "It is completely okay to fail and take a pause! Don’t try to be perfect , no one is.",
      description: "",
      youtubeId: "M-mfgUDHsLk",
      views: "130",
      duration: "4:10",
      category: "Now playing",
      thumbnail: "https://img.youtube.com/vi/M-mfgUDHsLk/hqdefault.jpg"  
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
