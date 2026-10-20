import { Box, Typography, useTheme } from '@mui/material';

const Test = () => {
  const theme = useTheme();
  console.log(theme)
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Typography variant='h1' color='primary'>Hellow world</Typography>
    </Box>
  )
}
export default Test;