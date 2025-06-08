
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const Experience = () => {
  const experiences = [
    {
      year: '2023-2024',
      title: 'HR Business Partner',
      company: 'VM SIGMA FINSERV',
      description: 'Led strategic HR initiatives, talent management, and organizational development for a growing fintech company.',
      skills: ['Strategic HR', 'Talent Management', 'Business Partnership'],
      type: 'current'
    },
    {
      year: '2024',
      title: 'LO Vice President Public Relations',
      company: 'JCI India',
      description: 'Spearheaded public relations strategies and community engagement initiatives for Junior Chamber International.',
      skills: ['Public Relations', 'Community Engagement', 'Leadership'],
      type: 'leadership'
    },
    {
      year: '2021-2023',
      title: 'HR Manager',
      company: 'HappycoinFinTech',
      description: 'Managed end-to-end HR operations for a cryptocurrency startup, including recruitment, employee relations, and policy development.',
      skills: ['HR Operations', 'Recruitment', 'Policy Development'],
      type: 'management'
    },
    {
      year: '2020-2023',
      title: 'Associate Manager',
      company: 'Various Organizations',
      description: 'Led cross-functional teams and managed operational excellence across multiple business verticals.',
      skills: ['Team Leadership', 'Operations', 'Process Improvement'],
      type: 'operations'
    },
    {
      year: '2019-2020',
      title: 'HR Executive',
      company: 'Corporate Sector',
      description: 'Supported HR functions including recruitment, training coordination, and employee engagement initiatives.',
      skills: ['Recruitment', 'Training', 'Employee Engagement'],
      type: 'hr'
    },
    {
      year: '2018-2019',
      title: 'Teacher',
      company: 'Educational Institution',
      description: 'Developed curriculum and mentored students, building strong communication and leadership skills.',
      skills: ['Curriculum Development', 'Mentoring', 'Communication'],
      type: 'education'
    },
    {
      year: '2017-2018',
      title: 'Underwriter',
      company: 'Insurance Sector',
      description: 'Assessed risk and processed insurance applications, developing analytical and decision-making capabilities.',
      skills: ['Risk Assessment', 'Analytics', 'Decision Making'],
      type: 'finance'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      current: 'bg-primary text-primary-foreground',
      leadership: 'bg-accent text-accent-foreground',
      management: 'bg-purple-100 text-purple-700',
      operations: 'bg-blue-100 text-blue-700',
      hr: 'bg-green-100 text-green-700',
      education: 'bg-orange-100 text-orange-700',
      finance: 'bg-red-100 text-red-700'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 hr-navy">Professional Journey</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A decade of growth from Customer Care to HR Leadership, 
              building expertise across diverse industries and functions.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex flex-col md:flex-row gap-8 items-start">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full ring-4 ring-background shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="md:ml-20 w-full">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                      <CardContent className="p-8">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold hr-blue mb-2">{exp.title}</h3>
                            <h4 className="text-lg font-semibold text-muted-foreground mb-2">{exp.company}</h4>
                          </div>
                          <div className="flex flex-col sm:items-end gap-2">
                            <Badge className={`${getTypeColor(exp.type)} px-3 py-1`}>
                              {exp.year}
                            </Badge>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {exp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge 
                              key={skill} 
                              variant="outline" 
                              className="border-primary/20 text-primary bg-primary/5"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 hr-navy">Key Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-xl font-semibold mb-4 hr-blue">Leadership Excellence</h3>
                  <p className="text-muted-foreground">
                    Successfully led diverse teams across startups and established organizations.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="text-xl font-semibold mb-4 hr-blue">Strategic Impact</h3>
                  <p className="text-muted-foreground">
                    Implemented HR strategies that improved employee engagement and retention.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">🌍</div>
                  <h3 className="text-xl font-semibold mb-4 hr-blue">Cross-Industry Expertise</h3>
                  <p className="text-muted-foreground">
                    Gained valuable insights across finance, education, and technology sectors.
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

export default Experience;
