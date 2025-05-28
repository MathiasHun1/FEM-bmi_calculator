import { Paper, Stack, Box, Typography } from '@mui/material';

type CardProps = {
  icon: string;
  title: string;
  description: string;
};

const Card = ({ card }: { card: CardProps }) => {
  return (
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
  );
};

export default Card;
