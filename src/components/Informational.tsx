import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Informational = () => {
  return (
    <article>
      <Grid container sx={{ pb: 7 }}>
        <Grid size={{ xs: 12 }}>
          <img
            src="/images/image-man-eating.webp"
            alt=""
            style={{ width: '100%' }}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Paper sx={{ pt: 5, pb: 7, px: 2.5 }} elevation={0}>
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
    </article>
  );
};

export default Informational;
