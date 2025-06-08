
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';

const Education = () => {
  const education = [
    {
      year: '2025-2026',
      degree: 'PGCRM (Post Graduate Certificate in Relationship Management)',
      institution: 'Indian Institute of Management, Shillong',
      status: 'Current',
      description: 'Advanced program focusing on strategic relationship management and business leadership.',
      type: 'current'
    },
    {
      year: '2017-2019',
      degree: 'HND in HR Management',
      institution: 'Pearson Business School (UK)',
      status: 'Completed',
      description: 'Comprehensive program covering HR fundamentals, organizational behavior, and strategic HR management.',
      type: 'completed'
    }
  ];

  const certifications = [
    {
      name: 'SHRM Certified Professional',
      year: '2025',
      issuer: 'Society for Human Resource Management',
      badge: '🏅',
      description: 'Premier certification for HR professionals demonstrating competency and commitment to the field.'
    },
    {
      name: 'HR Transformation Certificate',
      year: '2024',
      issuer: 'LinkedIn Learning',
      badge: '📜',
      description: 'Specialized training in modern HR transformation strategies and digital HR practices.'
    },
    {
      name: 'Storytelling for Business Certificate',
      year: '2024',
      issuer: 'LinkedIn Learning',
      badge: '📖',
      description: 'Advanced skills in business communication and narrative techniques for leadership.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 hr-navy">Education & Certifications</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Continuous learning and professional development in HR management and business leadership.
            </p>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-12 hr-blue text-center">Academic Qualifications</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-2">
                          <h3 className="text-2xl font-bold hr-navy">{edu.degree}</h3>
                          <Badge className={edu.type === 'current' ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}>
                            {edu.status}
                          </Badge>
                        </div>
                        <h4 className="text-lg font-semibold hr-blue mb-2">{edu.institution}</h4>
                        <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                      </div>
                      <div className="text-right mt-4 lg:mt-0">
                        <div className="text-2xl font-bold hr-gold">{edu.year}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <h2 className="text-3xl font-bold mb-12 hr-blue text-center">Professional Certifications</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-6xl mb-6">{cert.badge}</div>
                    <h3 className="text-xl font-bold hr-navy mb-3">{cert.name}</h3>
                    <p className="text-lg hr-blue font-semibold mb-2">{cert.issuer}</p>
                    <Badge variant="outline" className="mb-4">{cert.year}</Badge>
                    <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="mt-20 text-center">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-primary/5 to-accent/5">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6 hr-navy">Commitment to Continuous Learning</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                  Education is a lifelong journey. I believe in staying current with HR trends, 
                  emerging technologies, and leadership best practices to provide the most value 
                  to organizations and professionals I work with.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Badge variant="secondary" className="px-4 py-2">HR Technology</Badge>
                  <Badge variant="secondary" className="px-4 py-2">Digital Transformation</Badge>
                  <Badge variant="secondary" className="px-4 py-2">Leadership Development</Badge>
                  <Badge variant="secondary" className="px-4 py-2">Organizational Psychology</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
