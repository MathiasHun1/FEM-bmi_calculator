import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';

import Form from './components/Form';
import Informational from './components/Informational';
import LifeStyle from './components/LifeStyle';
import Limitations from './components/Limitations';

function App() {
  return (
    <Box sx={{ pb: 10, overflowX: 'hidden' }}>
      <Container
        maxWidth="xl"
        sx={{
          pt: { xs: 3 },
          pb: { xs: 8 },
          position: 'relative',
          '&:after': {
            position: 'absolute',
            content: '""',
            inset: 0,
            bottom: '10%',
            background:
              'linear-gradient(to right, white, var(--clr-gradient-end))',
            borderBottomLeftRadius: '35px',
            borderBottomRightRadius: '35px',
            zIndex: -1,
          },
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

        <Stack spacing={2} sx={{ textAlign: { xs: 'center' } }}>
          <Typography className="text-2-sb text-dark">
            Body Mass Index Calculator
          </Typography>

          <Typography className="text-6-reg text-light">
            Better understand your weight in relation to your height using our
            body mass index (BM) calculator. While BMI is not the sole
            determinant of a healthy weight, it offers a valuable starting point
            to evaluate your overall health and well-being.
          </Typography>
        </Stack>

        <Paper
          elevation={24}
          sx={{
            height: 'fit-content',
            mt: 3,
            p: 3,
            borderRadius: '16px',
            boxShadow: '0 10px 20px 10px var(--clr-blue-100)',
          }}
        >
          <Form />
        </Paper>
      </Container>

      {/*---------- INFO SECTION ----------*/}
      <Informational
        topSpacing="50px"
        bottomSpacing="50px"
        imageSource="/images/image-man-eating.webp"
        title=" What your BMI result means"
        bodyText="A BMI range of 18.5 to 24.9 is considered a 'healthy weight.'
              Maintaining a healthy weight may lower your chances of
              experiencing health issues later on, such as obesity and type 2
              diabetes. Aim for a nutritious diet with reduced fat and sugar
              content, incorporating ample fruits and vegetables. Additionally,
              strive for regular physical activity, ideally about 30 minutes
              daily for five days a week."
      />

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
