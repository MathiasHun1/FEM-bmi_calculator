import { useRef } from 'react';
import { useIntersectionObserver } from './hooks/useIntersectoinObserver';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import Form from './components/Form';
import Informational from './components/Informational';
import LifeStyle from './components/LifeStyle';
import Limitations from './components/Limitations';

function App() {
  const ref = useRef<HTMLDivElement[] | null[]>([]);

  useIntersectionObserver(ref.current);

  return (
    <Box sx={{ pb: 10, overflowX: 'hidden' }}>
      <Container
        maxWidth="xl"
        sx={{
          pt: { xs: 3 },
          pb: { xs: 8 },
          px: { md: 15 },
          position: 'relative',
          '&:after': {
            position: 'absolute',
            content: '""',
            inset: 0,
            right: { md: '25%' },
            bottom: { xs: '40%', md: 0 },
            background:
              'linear-gradient(to right, white, var(--clr-gradient-end))',
            borderBottomLeftRadius: '35px',
            borderBottomRightRadius: '35px',
            zIndex: -1,
          },
        }}
      >
        <Stack direction={{ md: 'row' }} sx={{ py: { md: 11 } }}>
          <Stack
            spacing={2}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              alignItems: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box
              sx={{
                mb: { xs: 4 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img src="/images/logo.svg" alt="" />
            </Box>
            <Typography
              className="text-2-sb text-dark"
              sx={{ maxWidth: '12ch' }}
            >
              Body Mass Index Calculator
            </Typography>
            <Typography className="text-6-reg text-light" sx={{}}>
              Better understand your weight in relation to your height using our
              body mass index (BM) calculator. While BMI is not the sole
              determinant of a healthy weight, it offers a valuable starting
              point to evaluate your overall health and well-being.
            </Typography>
          </Stack>
          {/*-------- CARD CONTAINING THE FORM --------*/}
          <Paper
            elevation={24}
            sx={{
              height: 'fit-content',
              mt: { xs: 4, sm: 5 },
              p: 3,
              borderRadius: '16px',
              boxShadow: '0 10px 20px 10px var(--clr-blue-100)',
            }}
          >
            <Form />
          </Paper>
        </Stack>
      </Container>

      {/*---------- INFO SECTION ----------*/}
      <Grid
        container
        spacing={{ sm: 4, md: 16 }}
        sx={{
          py: { xs: 6, sm: 10 },
          alignItems: { xs: 'center' },
          maxWidth: '1300px',
          marginInline: 'auto',
        }}
      >
        <Grid
          size={{ xs: 12, sm: 6 }}
          sx={{ pb: { xs: 6 } }}
          ref={(node) => {
            ref.current[0] = node;
          }}
          className="animated_card--opacity"
        >
          <img
            src="/images/image-man-eating.webp"
            alt=""
            style={{ width: '100%' }}
          />
        </Grid>

        <Grid
          size={{ xs: 12, sm: 6 }}
          ref={(node) => {
            ref.current[1] = node;
          }}
          className="animated_card--opacity"
        >
          <Paper sx={{ px: 2.5 }} elevation={0}>
            <Typography className="text-3-sb text-dark" sx={{ mb: 3 }}>
              What your BMI result means
            </Typography>

            <Typography className="text-6-reg text-light">
              A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {/*---------- LIFESTYLE SECTION --------*/}
      <LifeStyle />

      {/*---------- INFO SECTION ----------*/}
      <Informational
        topSpacing="50px"
        bottomSpacing="50px"
        title="Limitations of BMI"
        bodyText="Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use."
      />
      {/*--------- LIMITATIONS SECTION --------*/}
      <Limitations />
    </Box>
  );
}

export default App;
