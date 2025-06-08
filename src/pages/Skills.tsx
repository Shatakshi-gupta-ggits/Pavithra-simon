
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';

const Skills = () => {
  const skillCategories = [
    {
      title: 'HR Expertise',
      skills: [
        { name: 'HRIS Management', level: 95, endorsements: 47 },
        { name: 'Talent Management', level: 92, endorsements: 38 },
        { name: 'Training & Development', level: 90, endorsements: 42 },
        { name: 'HR Transformation', level: 88, endorsements: 23 },
        { name: 'Employee Relations', level: 93, endorsements: 51 }
      ]
    },
    {
      title: 'Leadership & Management',
      skills: [
        { name: 'Strategic Leadership', level: 89, endorsements: 34 },
        { name: 'Team Building', level: 94, endorsements: 45 },
        { name: 'Change Management', level: 87, endorsements: 28 },
        { name: 'Performance Management', level: 91, endorsements: 39 },
        { name: 'Conflict Resolution', level: 88, endorsements: 31 }
      ]
    },
    {
      title: 'Communication & Soft Skills',
      skills: [
        { name: 'Public Speaking', level: 96, endorsements: 52 },
        { name: 'Business Communication', level: 93, endorsements: 41 },
        { name: 'Cross-Cultural Communication', level: 90, endorsements: 29 },
        { name: 'Emotional Intelligence', level: 92, endorsements: 36 },
        { name: 'Storytelling', level: 89, endorsements: 24 }
      ]
    },
    {
      title: 'Technical & Analytical',
      skills: [
        { name: 'HR Analytics', level: 85, endorsements: 22 },
        { name: 'Process Improvement', level: 87, endorsements: 33 },
        { name: 'Policy Development', level: 89, endorsements: 27 },
        { name: 'Compliance Management', level: 84, endorsements: 19 },
        { name: 'Digital HR Tools', level: 82, endorsements: 15 }
      ]
    }
  ];

  const testimonials = [
    {
      quote: "Pavithra's insights transformed our team dynamics and improved our overall productivity significantly.",
      author: "Senior Manager",
      company: "Tech Startup"
    },
    {
      quote: "Her strategic approach to HR challenges and ability to connect with people at all levels is remarkable.",
      author: "HR Director",
      company: "Financial Services"
    },
    {
      quote: "Outstanding communication skills and deep understanding of modern workplace dynamics.",
      author: "CEO",
      company: "Growing Enterprise"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 hr-navy">Skills & Expertise</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive skill set built through years of hands-on experience and continuous learning.
            </p>
          </div>

          {/* Skills Categories */}
          <div className="space-y-16">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-3xl font-bold mb-8 hr-blue text-center">{category.title}</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {category.skills.map((skill, skillIndex) => (
                    <Card key={skillIndex} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-semibold hr-navy">{skill.name}</h3>
                          <span className="text-sm text-muted-foreground">
                            {skill.endorsements} endorsements
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Proficiency</span>
                            <span className="hr-blue font-semibold">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-3" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 hr-navy">What Colleagues Say</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl hr-gold mb-4">"</div>
                    <p className="text-muted-foreground italic mb-6 leading-relaxed">
                      {testimonial.quote}
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold hr-navy">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-20 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6 hr-navy">Ready to Collaborate?</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's discuss how these skills can benefit your organization and drive meaningful results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 transition-colors"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="/videos" 
                    className="inline-flex items-center justify-center px-8 py-3 border border-primary text-base font-medium rounded-md text-primary bg-transparent hover:bg-primary/5 transition-colors"
                  >
                    Watch My Content
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
