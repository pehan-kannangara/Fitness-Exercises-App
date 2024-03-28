import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

//import {exerciseOptions, fetchData} from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExcerciseDetail = () => {
const [exerciseDetail, setexerciseDetail] = useState({});
const {id} = useParams();

useEffect(()=>{

},[id]);

  return (
    <Box>
      <Detail />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExcerciseDetail