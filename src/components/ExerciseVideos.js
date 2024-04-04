import { Box, Typography } from '@mui/material';
import React from 'react';


const ExerciseVideos = ({exerciseVideos, name}) => {
  return (
    <Box  sx={{
      mt:{lg:'200px', sx:'20px'},
    }} p='20px'>
      <Typography variant='h4' mb='33px'>
        Watch {name} exercise videos
      </Typography>


    </Box>
  )
}

export default ExerciseVideos