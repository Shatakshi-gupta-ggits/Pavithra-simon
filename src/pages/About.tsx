
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const languages = ['English', 'Tamil', 'Sinhala', 'Telugu'];
  const strengths = [
    'Creative Problem-Solving',
    'Strategic Communication',
    'Leadership & Team-Building',
    'Emotional Intelligence',
    'Cross-Cultural Competency'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 hr-navy">About Pavithra</h1>
            <p className="text-2xl hr-gold italic">"We become what we think."</p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Image and Quote */}
            <div className="space-y-8">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Pavithra Simon at work"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                  <p className="text-sm italic text-muted-foreground">
                    "Building high-performing teams through strategic thinking and emotional intelligence."
                  </p>
                </div>
              </div>
            </div>

            {/* Bio and Details */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold mb-6 hr-blue">My Journey</h2>
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                    With over a decade of experience spanning corporate environments and startups, 
                    I've cultivated expertise in HR and Operations. My journey began in Customer Care, 
                    evolved through Operations, and now thrives in HR leadership.
                  </p>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    I combine strategic thinking with emotional intelligence to build high-performing 
                    teams and drive organizational success. My approach is rooted in authenticity, 
                    practical insights, and a deep understanding of human potential.
                  </p>
                </CardContent>
              </Card>

              {/* Key Strengths */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 hr-blue">Key Strengths</h3>
                  <div className="flex flex-wrap gap-3">
                    {strengths.map((strength) => (
                      <Badge 
                        key={strength} 
                        variant="secondary" 
                        className="px-4 py-2 text-sm bg-primary/10 text-primary border border-primary/20"
                      >
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6 hr-blue">Languages</h3>
                  <div className="flex flex-wrap gap-3">
                    {languages.map((language) => (
                      <Badge 
                        key={language} 
                        variant="outline" 
                        className="px-4 py-2 text-sm border-accent text-accent"
                      >
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Vision & Values */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 hr-navy">Vision & Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 hr-blue">Purpose-Driven</h3>
                  <p className="text-muted-foreground">
                    Empowering professionals to reach their full potential through strategic HR guidance and authentic leadership.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 hr-blue">Collaborative</h3>
                  <p className="text-muted-foreground">
                    Building bridges between teams, cultures, and ideas to create inclusive and thriving workplaces.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">💡</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 hr-blue">Innovative</h3>
                  <p className="text-muted-foreground">
                    Bringing fresh perspectives to HR challenges through creative problem-solving and continuous learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
