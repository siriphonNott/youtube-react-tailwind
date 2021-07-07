import { useState, useEffect, useReducer } from 'react';
import { fetchNaruto, fetchDragonBall } from '../services/mangaService';

export const useNaruto = () => {
  const [data, setData] = useState([])
  
  const fetchData = async () => {
    const result = await fetchNaruto()
    setData(result)
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return data
}

// Use useReducer
const initialState = {
  loading: false,
  error: '',
  data: [],
}

const apiReducer = (state, action) => {
  switch (action.type) {
    case 'DATA_FETCH_START': 
      return { ...state, loading: true }
      
    case 'DATA_FETCH_SUCCESS':
      return { ...state, loading: false, data: action.payload  }

    case 'DATA_FETCH_ERROR':
      return { ...state, loading: false, error: action.payload }
  
    default: 
      return state
  }
}

export const useDragonBall = () => {
  const [data, dispatch] = useReducer(apiReducer, initialState)
  
  const fetchData = async () => {
    dispatch({ type: 'DATA_FETCH_START' })
    try {
      const result = await fetchDragonBall()
      setTimeout(() => {
        dispatch({ type: 'DATA_FETCH_SUCCESS', payload: result })
      }, 1000);
    } catch (error) {
      dispatch({ type: 'DATA_FETCH_ERROR', payload: error.message })
    }
  }
  
  useEffect(() => {
    fetchData()
  }, [])

  return data
}