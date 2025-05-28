import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Paper, styled, Typography, Box } from '@mui/material';
import { useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectoinObserver';

import Card from './Card';

const data = [
  {
    icon: '/images/icon-gender.svg',
    title: 'Gender',
    description:
      "The development and body fat composition of girls and boys vary with age. Consequently, a child's age and gender are considered when evaluating their BMI.",
  },
  {
    icon: '/images/icon-age.svg',
    title: 'Age',
    description:
      'In aging individuals, increased body fat and muscle loss may cause BMI to underestimate body fat content.',
  },
  {
    icon: '/images/icon-muscle.svg',
    title: 'Muscle',
    description:
      "BMI may misclassify muscular individuals as overweight or obese, as it doesn't differentiate muscle from fat.",
  },
  {
    icon: '/images/icon-pregnancy.svg',
    title: 'Pregnancy',
    description:
      'Expectant mothers experience weight gain due to their growing baby. Maintaining a healthy pre-pregnancy BMI is advisable to minimise health risks for both mother and child.',
  },
  {
    icon: '/images/icon-race.svg',
    title: 'Race',
    description:
      'Certain health concerns may affect individuals of some Black and Asian origins at lower BMIs than others. To learn more, it is advised to discuss this with your GP or practice nurse.',
  },
];

const CustomGridContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(12, 1fr)',
  },
}));

const CustomGridItem = styled(Grid)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.up('sm')]: {
    '&:nth-of-type(odd)': {
      gridColumn: '3 / 5',
    },
    '&:nth-of-type(even)': {
      gridColumn: '1 / 3',
    },
    '&:nth-of-type(1)': {
      gridColumn: '1 / 5',
    },
    '&:nth-of-type(6)': {
      gridColumn: '2 / 4',
    },
  },
  [theme.breakpoints.up('md')]: {
    '&:nth-of-type(1)': {
      gridColumn: '1 / 6',
    },
    '&:nth-of-type(2)': {
      gridColumn: '8 / 12',
    },
    '&:nth-of-type(3)': {
      gridColumn: '5 / 9',
    },
    '&:nth-of-type(4)': {
      gridColumn: '9 / 13',
    },
    '&:nth-of-type(5)': {
      gridColumn: '3 / 7',
    },
    '&:nth-of-type(6)': {
      gridColumn: '7 / 11',
    },
  },
}));

const AbsoluteBox = styled(Box)({
  position: 'absolute',
  bottom: '-60%',
  left: '30%',
});

const Limitations = () => {
  const descriptionRef = useRef<HTMLDivElement[] | null[]>([]);
  const cardRefs = useRef<HTMLDivElement[] | null[]>([]);

  useIntersectionObserver(cardRefs.current);
  useIntersectionObserver(descriptionRef.current);

  return (
    <Container maxWidth="lg" sx={{ py: { md: 13 } }}>
      <CustomGridContainer container spacing={{ xs: 2, md: 3 }}>
        <CustomGridItem
          size={{ xs: 12 }}
          sx={{ position: 'relative' }}
          ref={(node) => {
            descriptionRef.current[0] = node;
          }}
          className="animated_card--opacity"
        >
          <Paper sx={{ px: 2.5, pt: 10, pb: 6, p: { md: 0 } }} elevation={0}>
            <Typography className="text-3-sb text-dark" sx={{ mb: 3 }}>
              Limitations of BMI
            </Typography>

            <Typography className="text-6-reg text-light">
              Although BMI is often a practical indicator of healthy weight, it
              is not suited for every person. Specific groups should carefully
              consider their BMI outcomes, and in certain cases, the measurement
              may not be beneficial to use.
            </Typography>
          </Paper>

          <AbsoluteBox sx={{ display: { xs: 'none', md: 'block' } }}>
            <img src="/images/curved-line-right.svg" alt="" />
          </AbsoluteBox>
        </CustomGridItem>

        {data &&
          data.map((card, index) => (
            <CustomGridItem
              size={{ xs: 12 }}
              key={card.title}
              ref={(node) => {
                cardRefs.current[index] = node; // ref callback to set references dynamically
              }}
              className="animated_card--right"
            >
              <Card card={card} />
            </CustomGridItem>
          ))}
      </CustomGridContainer>
    </Container>
  );
};

export default Limitations;
