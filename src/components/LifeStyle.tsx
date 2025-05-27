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
      }}
    >
      <Stack spacing={5}>
        {data.map((card, index) => (
          <Stack
            spacing={3}
            key={card.title}
            ref={(node) => {
              cardsRef.current[index] = node;
            }}
            className="animated_card--left"
          >
            <ImageWrapper>
              <img src={card.icon} alt="" />
            </ImageWrapper>

            <Typography className="text-4-sb text-dark">
              {card.title}
            </Typography>

            <Typography className="text-6-reg text-light">
              {card.description}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Container>
  );
};

export default LifeStyle;
