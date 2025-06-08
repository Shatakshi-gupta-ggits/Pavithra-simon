
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import { ArrowUp } from 'lucide-react';

const Blog = () => {
  // Featured Post Data
  const featuredPost = {
    title: "The Future of HR: Embracing Digital Transformation",
    excerpt: "How HR professionals can lead organizational change and embrace emerging technologies to create more efficient and human-centered workplaces.",
    date: "November 2024",
    readTime: "7 min read",
    category: "HR Technology",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  const blogPosts = [
    {
      title: "The Future of HR: Embracing Digital Transformation",
      excerpt: "How HR professionals can lead organizational change and embrace emerging technologies to create more efficient and human-centered workplaces.",
      date: "November 2024",
      readTime: "7 min read",
      category: "HR Technology",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building Resilient Teams in Uncertain Times",
      excerpt: "Strategies for creating teams that not only survive challenges but thrive and grow stronger through adversity.",
      date: "October 2024",
      readTime: "6 min read",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Art of Giving Constructive Feedback",
      excerpt: "Master the delicate balance of providing honest, helpful feedback while maintaining trust and motivation in your team.",
      date: "September 2024",
      readTime: "4 min read",
      category: "Management",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Career Transitions: Navigating Change with Confidence",
      excerpt: "Whether you're switching industries or climbing the ladder, here's how to make career transitions smooth and successful.",
      date: "August 2024",
      readTime: "8 min read",
      category: "Career Development",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Emotional Intelligence: Your Secret Weapon in HR",
      excerpt: "Why emotional intelligence is becoming the most valuable skill for HR professionals and how to develop it.",
      date: "July 2024",
      readTime: "6 min read",
      category: "Soft Skills",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Creating Inclusive Workplaces: Beyond Diversity Hiring",
      excerpt: "True inclusion goes beyond hiring diverse talent. Learn how to create environments where everyone can thrive.",
      date: "June 2024",
      readTime: "9 min read",
      category: "Diversity & Inclusion",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const categories = ["All", "Workplace Dynamics", "HR Technology", "Leadership", "Management", "Career Development", "Soft Skills", "Diversity & Inclusion"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 hr-navy">Insights & Articles</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Practical insights, thought leadership, and actionable advice for modern HR professionals and career growth.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 hr-blue">Featured Article</h2>
            <Card className="border-0 shadow-2xl hover:shadow-3xl transition-shadow duration-300 overflow-hidden">
              <div className="lg:flex">
                <div className="lg:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <Badge className="mb-4 bg-primary/10 text-primary">
                    {featuredPost.category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 hr-navy leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="w-full lg:w-auto">
                    Read Full Article
                    <ArrowUp className="w-4 h-4 ml-2 rotate-45" />
                  </Button>
                </div>
              </div>
            </Card>
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

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <ArrowUp className="w-6 h-6 text-primary rotate-45" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3 text-xs">
                    {post.category}
                  </Badge>
                  <h3 className="text-lg font-semibold mb-3 hr-navy leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* LinkedIn Embedded Post */}
          <div className="flex justify-center my-12">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7333044618525122561?collapsed=1"
              height="670"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post"
              style={{ maxWidth: "100%" }}
            ></iframe>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-20">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold mb-6 hr-navy">Stay Updated</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Get the latest insights on HR trends, career development, and leadership 
                  strategies delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="px-8">
                    Subscribe
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

export default Blog;
