import Navigation from '@/components/Navigation';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 hr-navy">LinkedIn Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my latest LinkedIn posts on HR, leadership, and career growth.
            </p>
          </div>

          {/* LinkedIn Embedded Posts */}
          <div className="flex flex-col items-center gap-12">
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7333044618525122561?collapsed=1"
              height="670"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 1"
              style={{ maxWidth: "100%" }}
            ></iframe>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7337090167360339968?collapsed=1"
              height="670"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 2"
              style={{ maxWidth: "100%" }}
            ></iframe>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7336346915837489152?collapsed=1"
              height="593"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 3"
              style={{ maxWidth: "100%" }}
            ></iframe>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7335208783779942401?collapsed=1"
              height="670"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 4"
              style={{ maxWidth: "100%" }}
            ></iframe>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7333845643213320193?collapsed=1"
              height="586"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 5"
              style={{ maxWidth: "100%" }}
            ></iframe>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7333829206155444224?collapsed=1"
              height="542"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 6"
              style={{ maxWidth: "100%" }}
            ></iframe>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7333374367625617408?collapsed=1"
              height="481"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 7"
              style={{ maxWidth: "100%" }}
            ></iframe>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7332347225148166144?collapsed=1"
              height="670"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 8"
              style={{ maxWidth: "100%" }}
            ></iframe>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7331961389143482368?collapsed=1"
              height="670"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 9"
              style={{ maxWidth: "100%" }}
            ></iframe>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:7330253101460869121?collapsed=1"
              height="670"
              width="504"
              frameBorder="0"
              allowFullScreen
              title="Embedded LinkedIn post 10"
              style={{ maxWidth: "100%" }}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
