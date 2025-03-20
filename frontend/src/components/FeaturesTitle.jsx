import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import classes from './FeaturesTitle.module.css';

import { IconUsers, IconChartLine, IconBrain, IconHandGrab, IconUserPlus, IconTrendingUp, IconCertificate, IconShieldLock, IconBell, IconCube, IconCalculator, IconDatabase, IconGlobe, IconMessageCircle, IconHistory, IconTrophy, IconRocket } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import { StyledGetStarted } from './StylesGetStarted';

const features = [
  {
    icon: IconUsers,
    title: 'Student-Mentor-Investor Network',
    description: 'Connect seamlessly with industry mentors, potential investors, and fellow innovators to amplify your startup’s growth.',
  },
  {
    icon: IconChartLine,
    title: 'Real-Time Startup Progress Tracker',
    description: 'Monitor key metrics, funding milestones, and user growth live, ensuring you stay on top of every development.',
  },
  {
    icon: IconBrain,
    title: 'AI-Powered Startup Insights',
    description: 'Leverage AI analytics to predict trends, optimize strategies, and gain a competitive edge in the entrepreneurial ecosystem.',
  },
  {
    icon: IconHandGrab,
    title: 'Investor Matchmaking',
    description: 'Smart algorithm matches promising startups with relevant investors, simplifying the fundraising journey.',
  },
  {
    icon: IconUserPlus,
    title: 'Talent Pool Integration',
    description: 'Access a curated pool of skilled individuals ready to join your vision and scale up your venture.',
  },
  {
    icon: IconTrendingUp,
    title: 'Market Overview & Trends',
    description: 'Stay informed about industry trends, competitor analysis, and emerging market shifts to fine-tune your strategies.',
  },
  {
    icon: IconCertificate,
    title: 'Learning & Certification Hub',
    description: 'Upskill with curated courses, workshops, and certifications designed specifically for startup founders and teams.',
  },
  {
    icon: IconShieldLock,
    title: 'Advanced Security & Compliance',
    description: 'Ensure your startup’s data integrity with encryption protocols, regulatory compliance, and 2FA authentication.',
  },
  {
    icon: IconBell,
    title: 'Custom Alerts & Notifications',
    description: 'Get real-time alerts on investor interest, funding updates, and important startup milestones.',
  },
  {
    icon: IconCube,
    title: 'AR/VR-Based Startup Demos',
    description: 'Showcase immersive startup pitches and product demos in 3D, offering investors a next-level experience.',
  },
  {
    icon: IconCalculator,
    title: 'Startup Valuation Calculator',
    description: 'Accurately evaluate your startup’s worth based on key financial and market factors.',
  },
  {
    icon: IconDatabase,
    title: 'Investor & Startup Database',
    description: 'Access an extensive database of verified investors, startups, mentors, and accelerators all in one place.',
  },
  {
    icon: IconGlobe,
    title: 'Global Startup News Integration',
    description: 'Stay updated with real-time startup news, investment rounds, and entrepreneurial breakthroughs worldwide.',
  },
  {
    icon: IconMessageCircle,
    title: 'Integrated AI Chat Support',
    description: 'Get instant guidance and answers to your startup queries through our AI-powered chatbot support.',
  },
  {
    icon: IconHistory,
    title: 'Funding History Visualization',
    description: 'Analyze past funding rounds and investor participation through interactive charts and data visualizations.',
  },
  {
    icon: IconTrophy,
    title: 'Leaderboard & Recognition',
    description: 'Highlight top-performing startups, most active mentors, and successful investments to inspire community excellence.',
  },
];

export function FeaturesTitle() {
  const items = features.map(({ icon: Icon, title, description }) => (
    <div key={title}>
      <ThemeIcon
        size={44}
        radius="md"
        variant="gradient"
        gradient={{ deg: 133, from: 'indigo', to: 'cyan' }}
      >
        <Icon size={26} stroke={1.5} />
      </ThemeIcon>
      <Text fz="lg" mt="sm" fw={500}>
        {title}
      </Text>
      <Text c="dimmed" fz="sm">
        {description}
      </Text>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
      <Grid gutter={80}>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Title className={classes.title} order={2}>
          The Ultimate Startup Ecosystem Engineered for Visionaries 🚀
          </Title>
          <Text c="dimmed">
          Transform ideas into impact—UniConnect offers AI-driven tools, real-time progress tracking, and a vibrant community of mentors, investors, and innovators to accelerate your journey.
          </Text>

         <Link to="/login">
         <Button
            variant="gradient"
            gradient={{ deg: 133, from: 'indigo', to: 'cyan' }}
            size="lg"
            radius="md"
            mt="xl"
          >
           <StyledGetStarted></StyledGetStarted>
          </Button>
         </Link>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
            {items}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </div>
  );
}
