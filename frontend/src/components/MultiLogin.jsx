import { useNavigate } from 'react-router-dom';
import { IconSchool, IconUser, IconCurrencyDollar } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './MultiLogin.module.css';

export function MultiLogin() {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  const mockdata = [
    {
      title: 'Student Login',
      description:
        'Access your courses, submit assignments, check grades, and stay updated with latest announcements. A dedicated space for curious minds.',
      icon: IconSchool,
      link :'slogin'
    },
    {
      title: 'Professor Login',
      description:
        'Manage classes, upload study material, evaluate students, and stay connected with your academic community.',
      icon: IconUser,
      link :'pplogin'
      
    },
    {
      title: 'Investor Login',
      description:
        'Monitor your investments, review growth reports, access exclusive financial insights and strategic opportunities.',
      icon: IconCurrencyDollar,
      link :'ilogin'
    },
  ];
  const features = mockdata.map((feature) => (
    <Card
      onClick={() => navigate(`/${feature.link}`)}  // 👈 Navigate function use kiya
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
      style={{ cursor: 'pointer' }}
    >
      <feature.icon size={50} stroke={2} color={theme.colors.blue[6]} />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Secure Multi-User Access
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Seamless Login for Every Role
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Whether you're a student, professor, or investor — log in to access tailored services crafted just for you.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}
