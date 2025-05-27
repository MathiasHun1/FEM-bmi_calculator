import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { styled, Typography } from '@mui/material';
import { useIntersectionObserver } from '../hooks/useIntersectoinObserver';
import { useRef } from 'react';

const data = [
  {
    icon: '/images/icon-eating.svg',
    title: 'Healthy eating',
    description:
      'Healthy eating promotes weight control, disease prevention, better digestion, immunity, mental clarity, and mood.',
  },
  {
    icon: '/images/icon-exercise.svg',
    title: 'Regular exercise',
    description:
      'Exercise improves fitness, aids weight control, elevates mood, and reduces disease risk, fostering wellness and longevity.',
  },
  {
    icon: '/images/icon-sleep.svg',
    title: 'Adequate sleep',
    description:
      'Sleep enhances mental clarity, emotional stability, and physical wellness, promoting overall restoration and rejuvenation.',
  },
];

const ImageWrapper = styled(Box)({
  width: '64px',
  '& > img': {
    width: '100%',
  },
});

const LifeStyle = () => {
  const cardsRef = useRef<HTMLDivElement[] | null[]>([]);

  useIntersectionObserver(cardsRef.current);

  return (
    <Container
      maxWidth="xl"
      sx={{
        background: 'linear-gradient(to right, white, var(--clr-gradient-end))',
        py: 7,
        px: { sm: 5 },
        borderRadius: { md: '35px' },
      }}
    >
      <Stack spacing={4.5} direction={{ md: 'row' }}>
        {data.map((card, index) => (
          <Stack
            direction={{ sm: 'row', md: 'column' }}
            spacing={{ xs: 3, sm: 5 }}
            key={card.title}
            ref={(node) => {
              cardsRef.current[index] = node;
            }}
            sx={{ alignItems: { sm: 'center', md: 'flex-start' } }}
            className="animated_card--left"
          >
            <ImageWrapper sx={{ flexShrink: 0 }}>
              <img src={card.icon} alt="" />
            </ImageWrapper>

            <div>
              <Typography
                className="text-4-sb text-dark"
                sx={{ mb: { xs: 2 } }}
              >
                {card.title}
              </Typography>
              <Typography className="text-6-reg text-light">
                {card.description}
              </Typography>
            </div>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default LifeStyle;
