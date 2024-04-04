import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData'

import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'

const ExcerciseDetail = () => {
const [exerciseDetail, setExerciseDetail] = useState({});
const [exerciseVideos, setExerciseVideos] = useState([]);
const {id} = useParams();

useEffect(()=>{
    //1st api call exdb
    const fetchExerciseData = async () =>{
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);

    setExerciseDetail (exerciseDetailData);
    
    //2nd api call yt videos
    const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?q=${exerciseDetailData.name}`, exerciseOptions, youtubeOptions)
    
    setExerciseVideos(exerciseVideosData);
  }
  fetchExerciseData();

},[id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos}/>
      <SimilarExercises />
    </Box>
  )
}

export default ExcerciseDetail