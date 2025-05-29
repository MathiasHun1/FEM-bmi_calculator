import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import BpRadio from './CustomRadio';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import React, { useEffect, useState, type JSX } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

type ResultData = {
  title: string;
  bmiValue: string;
  description: JSX.Element;
};

const Form = () => {
  const [calcMode, setCalcMode] = useState('metric');
  const [height, setHeight] = useState<string>('');
  const [weight, setWeight] = useState<string>('');
  const [resultCardData, setResultCardData] = useState<ResultData>({
    title: '',
    bmiValue: '',
    description: <></>,
  });

  useEffect(() => {
    const results = calculateResultData();
    setResultCardData(results);
  }, [height, weight]);

  const calculateBmi = () => {
    if (!height || !weight || Number(height) <= 0 || Number(weight) <= 0) {
      console.error('invalid weight or height value');
      return null;
    }

    const bmiValue =
      Number(weight) / (((Number(height) / 100) * Number(height)) / 100);
    return bmiValue;
  };

  const calculateIdealWeight = (height: number) => {
    const bmiLowEnd = 18.5;
    const bmiTopEnd = 24.9;

    const targetWeightLow = Number(
      (bmiLowEnd * (((height / 100) * height) / 100)).toFixed(1)
    );
    const targetWeightTop = Number(
      (bmiTopEnd * (((height / 100) * height) / 100)).toFixed(1)
    );

    return {
      targetLow: targetWeightLow,
      targetTop: targetWeightTop,
    };
  };

  const calculateResultData = (): ResultData => {
    // Handle edge cases
    if (!height || !weight || Number(height) <= 0 || Number(weight) <= 0) {
      return {
        title: 'Welcome!',
        bmiValue: '',
        description: (
          <>Enter your height and weight and you'll see your BMI result here</>
        ),
      };
    }

    // DATA to work with
    let result;
    const bmiValue = calculateBmi();
    const idealWeights = calculateIdealWeight(Number(height));

    if (!bmiValue) {
      console.error('something went wrong in calculating bmi');
      return {
        title: '',
        bmiValue: '',
        description: <></>,
      };
    }

    // Possible results
    if (bmiValue < 18.5) {
      result = {
        title: 'Your BMI is..',
        bmiValue: bmiValue.toFixed(1),
        description: (
          <>
            Your BMI suggests your weight is too low. Your ideal weight is
            between{' '}
            <strong>
              {idealWeights.targetLow}kgs - {idealWeights.targetTop}kgs
            </strong>
          </>
        ),
      };
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      result = {
        title: 'Your BMI is..',
        bmiValue: bmiValue.toFixed(1),
        description: (
          <>
            Your BMI suggests you’re a healthy weight. Your ideal weight is
            between{' '}
            <strong>
              {idealWeights.targetLow}kgs - {idealWeights.targetTop}kgs
            </strong>
          </>
        ),
      };
    } else {
      result = {
        title: 'Your BMI is..',
        bmiValue: bmiValue.toFixed(1),
        description: (
          <>
            Your BMI suggests your weight is too high. Your ideal weight is
            between{' '}
            <strong>
              {idealWeights.targetLow}kgs - {idealWeights.targetTop}
              kgs
            </strong>
          </>
        ),
      };
    }

    return result;
  };

  const handleChangeWeight = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const regex = /^-?\d+(\.\d*)?$/;

    if (target.value === '' || regex.test(target.value)) {
      setWeight(target.value);
    } else {
      return;
    }
  };

  const handleChangeHeight = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const regex = /^-?\d+(\.\d*)?$/;

    if (target.value === '' || regex.test(target.value)) {
      setHeight(target.value);
    } else {
      return;
    }
  };

  return (
    <Box component="form" sx={{ width: { md: '400px', lg: '500px' } }}>
      <FormLabel sx={{ display: 'block', mb: 3 }}>
        <Typography className="text-4-sb text-dark">
          Enter your details below
        </Typography>
      </FormLabel>

      <Grid container spacing={4} data-name="outer grid">
        {/*------- RADIO BUTTONS -------*/}
        <Grid size={12}>
          <FormControl sx={{ width: '100%' }}>
            <RadioGroup
              row
              aria-label=""
              name=""
              value={calcMode}
              onChange={(e) => setCalcMode(e.target.value)}
              sx={{ width: '100%' }}
            >
              <Grid container sx={{ width: '100%' }}>
                <Grid size={6}>
                  <FormControlLabel
                    value="metric"
                    control={<BpRadio />}
                    label="Metric"
                  />
                </Grid>
                <Grid size={6}>
                  <FormControlLabel
                    value="Imperial"
                    control={<BpRadio />}
                    label="Imperial"
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </FormControl>
        </Grid>

        {/*----------- TEXT FIELDS ---------*/}
        <Grid size={12}>
          <Grid container spacing={4}>
            {calcMode === 'metric' && (
              <>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    id="height"
                    label="height"
                    value={height}
                    fullWidth
                    onChange={(e) => handleChangeHeight(e)}
                    sx={{
                      position: 'relative',
                      '&:after': {
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        content: '"cm"',
                        transform: 'translateY(-50%)',
                        color: 'var(--clr-blue-500)',
                        fontWeight: '700',
                      },
                    }}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    id="weight"
                    label="weight"
                    value={weight}
                    fullWidth
                    onChange={(e) => handleChangeWeight(e)}
                    sx={{
                      position: 'relative',
                      '&:after': {
                        position: 'absolute',
                        top: '50%',
                        right: '10px',
                        content: '"kg"',
                        transform: 'translateY(-50%)',
                        color: 'var(--clr-blue-500)',
                        fontWeight: '700',
                      },
                    }}
                  />
                </Grid>
              </>
            )}

            {calcMode === 'Imperial' && (
              <Typography color="red">
                This feature isn't implemented yet
              </Typography>
            )}
          </Grid>
        </Grid>

        {/*------- RESULTS -------*/}
        <Grid size={{ xs: 12 }}>
          <Stack
            spacing={2}
            sx={{
              p: 3,
              background: 'var(--clr-blue-500)',
              borderRadius: '16px',
              width: '100%',
              color: 'white',
            }}
          >
            <div>
              <Typography className="text-6-sb">
                {resultCardData.title}
              </Typography>
              {resultCardData.bmiValue && (
                <Typography className="text-2-sb">
                  {resultCardData.bmiValue}
                </Typography>
              )}
            </div>
            <Typography className="text-7-reg">
              {resultCardData.description}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Form;
