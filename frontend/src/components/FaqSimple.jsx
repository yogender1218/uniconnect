import { Accordion, Container, Title } from '@mantine/core';
import classes from './FaqSimple.module.css';

export function FaqSimple() {
  return (
    <Container size="sm" style={{ maxWidth: 1110, marginTop: '80px', marginBottom: '80px' }}>
      <Title align="center" style={{ marginBottom: '50px' }}>
        Frequently Asked Questions
      </Title>

      <Accordion variant="separated" multiple>
        
        {/* User Roles & Profiles */}
        <Accordion.Item
          value="user-roles"
          style={{
            backdropFilter: 'var(--backdrop-blur)',
            backgroundColor: 'var(--bg-color)',
            borderRadius: '15px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-color)',
          }}
        >
          <Accordion.Control style={{ color: 'var(--ftext-color)' }}>
            What are the User Roles & Profiles?
          </Accordion.Control>
          <Accordion.Panel style={{ color: 'var(--fcontent-color)', fontSize: '14px' }}>
            In our community, every role is a lyrical blend of timeless tradition and cutting‐edge vision. 
            <br /><br />
            <strong>Students</strong> are the seekers of wisdom and daring dreamers—sharing their basic info, academic journey, and startup pitches to learn, network, and spark change. 
            <br /><br />
            <strong>Mentors</strong> stand as modern-day sages; their seasoned experience meets youthful zest as they guide, create engaging groups, and host sessions that honor both legacy and innovation.
            <br /><br />
            <strong>Investors</strong> navigate with a discerning eye, bridging heritage with the pulse of tomorrow by scouting and empowering the next wave of transformative ideas.
          </Accordion.Panel>
        </Accordion.Item>
        
        {/* Platform Features */}
        <Accordion.Item
          value="platform-features"
          style={{
            backdropFilter: 'var(--backdrop-blur)',
            backgroundColor: 'var(--bg-color)',
            borderRadius: '15px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-color)',
          }}
        >
          <Accordion.Control style={{ color: 'var(--ftext-color)' }}>
            What platform features are available?
          </Accordion.Control>
          <Accordion.Panel style={{ color: 'var(--fcontent-color)', fontSize: '14px' }}>
            Our platform is where classic community values meet futuristic tech. 
            <br /><br />
            Engage in tweet-like posts that capture fleeting sparks of genius, 
            join public or private groups for deep, meaningful discussions, and cast your vote on inspiring startup ideas. 
            <br /><br />
            With AI-powered matchmaking and curated expert insights, every interaction is designed to nurture growth—honoring the past while sprinting into the future.
          </Accordion.Panel>
        </Accordion.Item>
        
        {/* Startup Categories */}
        <Accordion.Item
          value="startup-categories"
          style={{
            backdropFilter: 'var(--backdrop-blur)',
            backgroundColor: 'var(--bg-color)',
            borderRadius: '15px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-color)',
          }}
        >
          <Accordion.Control style={{ color: 'var(--ftext-color)' }}>
            What are the Startup Categories?
          </Accordion.Control>
          <Accordion.Panel style={{ color: 'var(--fcontent-color)', fontSize: '14px' }}>
            Every visionary idea finds its niche. Our startup universe is divided into thoughtfully curated categories:
            <br /><br />
            • <strong>Technology & AI</strong> – where digital dreams take flight.
            <br />
            • <strong>Healthcare & Biotech</strong> – melding care with innovation.
            <br />
            • <strong>Fintech & Blockchain</strong> – reinventing finance with modern magic.
            <br />
            • <strong>EdTech & E-Learning</strong> – transforming how we learn and grow.
            <br />
            • <strong>SaaS & Cloud Computing</strong> – powering scalable, smart solutions.
            <br />
            • <strong>E-commerce & Retail</strong> – redefining the marketplace.
            <br />
            • <strong>Social Impact & Sustainability</strong> – driving change with purpose.
            <br />
            • <strong>Consumer Products & Services</strong> – where everyday life meets creative innovation.
          </Accordion.Panel>
        </Accordion.Item>
        
        {/* Development Roadmap */}
        <Accordion.Item
          value="development-roadmap"
          style={{
            backdropFilter: 'var(--backdrop-blur)',
            backgroundColor: 'var(--bg-color)',
            borderRadius: '15px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--border-color)',
          }}
        >
          <Accordion.Control style={{ color: 'var(--ftext-color)' }}>
            What is the Development Roadmap?
          </Accordion.Control>
          <Accordion.Panel style={{ color: 'var(--fcontent-color)', fontSize: '14px' }}>
            Our journey is penned like a timeless ballad, evolving in vibrant acts:
            <br /><br />
            <strong>Phase 1 (MVP – 3-6 Months):</strong> Laying the foundational notes with user registration, profile systems, basic interactions, and a dynamic startup submission and voting environment.
            <br /><br />
            <strong>Phase 2 (6-12 Months):</strong> The crescendo of innovation, unveiling AI-based matchmaking, live video pitches, gamified experiences, and comprehensive tracking tools that transform potential into performance.
          </Accordion.Panel>
        </Accordion.Item>

      </Accordion>
    </Container>
  );
}
