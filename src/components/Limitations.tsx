import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Box, Paper, Stack, Typography } from '@mui/material';

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

const Limitations = () => {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        {data.map((card) => (
          <Grid size={{ xs: 12 }} key={card.title}>
            <Paper
              sx={{
                p: 3,
                borderRadius: '16px',
                boxShadow: '0 10px 20px 10px var(--clr-blue-100)',
              }}
            >
              <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                <Box>
                  <img src={card.icon} alt="" />
                </Box>
                <Typography className="text-5-sb" component="h2">
                  {card.title}
                </Typography>
              </Stack>
              <Typography className="text-6-reg text-light">
                {card.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Limitations;
