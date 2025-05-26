import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Informational = ({
  title,
  bodyText,
  imageSource,
  topSpacing,
  bottomSpacing,
}: {
  title: string;
  bodyText: string;
  imageSource?: string;
  topSpacing: string;
  bottomSpacing: string;
}) => {
  return (
    <article>
      <Grid
        container
        sx={{ paddingTop: topSpacing, paddingBottom: bottomSpacing }}
      >
        {imageSource && (
          <Grid size={{ xs: 12 }} sx={{ pb: 6 }}>
            <img src={imageSource} alt="" style={{ width: '100%' }} />
          </Grid>
        )}

        <Grid size={{ xs: 12 }}>
          <Paper sx={{ px: 2.5 }} elevation={0}>
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
