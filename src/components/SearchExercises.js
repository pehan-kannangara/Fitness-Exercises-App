import { Box, Stack, TextField, Typography } from '@mui/material';
import React from 'react';

const SearchExercises = () => {
  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
      <Typography fontWeight={700} sx={{fontSize:{lg: '44px', xs:'30px'}}} mb='50px' textAlign='center'>
        Awesome Exercises You<br/>Should Know...
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField  
          sx={{
            input :{
              fontWeight:'700',
              border:'none',
              borderRadius:'4px'
            },
          width :{lg:'1170px', xs:'350px'}     
          }}
          height= '76px'
          value=""
          onChange={(e) =>{}}
          placeholder='Search exercises'
          type='text'
        />
      </Box>
    </Stack>
  )
}

export default SearchExercises
