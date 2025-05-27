import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useIntersectionObserver } from '../hooks/useIntersectoinObserver';
import { useRef } from 'react';

const Informational = ({
  title,
  bodyText,
}: {
  title: string;
  bodyText: string;
  imageSource?: string;
  topSpacing: string;
  bottomSpacing: string;
}) => {
  const ref = useRef<HTMLDivElement[] | null[]>([]);

  useIntersectionObserver(ref.current);

  return (
    <Grid
      size={{ xs: 12 }}
      ref={(node) => {
        ref.current[1] = node;
      }}
      className="animated_card--opacity"
    >
      <Paper sx={{ px: 2.5 }} elevation={0}>
        <Typography className="text-3-sb text-dark" sx={{ mb: 3 }}>
          {title}
        </Typography>

        <Typography className="text-6-reg text-light">{bodyText}</Typography>
      </Paper>
    </Grid>
  );
};

export default Informational;
