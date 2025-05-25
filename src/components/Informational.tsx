import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Informational = ({
  title,
  bodyText,
  imageSource,
}: {
  title: string;
  bodyText: string;
  imageSource?: string;
}) => {
  return (
    <article>
      <Grid container sx={{ pb: 7 }}>
        {imageSource && (
          <Grid size={{ xs: 12 }}>
            <img src={imageSource} alt="" style={{ width: '100%' }} />
          </Grid>
        )}

        <Grid size={{ xs: 12 }}>
          <Paper sx={{ pt: 5, pb: 7, px: 2.5 }} elevation={0}>
            <Typography className="text-3-sb text-dark" sx={{ mb: 3 }}>
              {title}
            </Typography>

            <Typography className="text-6-reg text-light">
              {bodyText}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </article>
  );
};

export default Informational;
