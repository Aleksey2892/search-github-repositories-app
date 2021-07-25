import React, { useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import CssBaseline from '@material-ui/core/CssBaseline'
import { getGithubData } from '../../app/githubApi/githubApiOperations'
import { Header } from '../Header'
import { RepoListContainer } from '../RepoListContainer'
import { StyledMainContainer } from './styles'
import './App.css'

function App() {
  const dispatch = useDispatch()

  const getData = useCallback(
    ({ searchQuery, pageNumber }) => {
      return dispatch(getGithubData({ searchQuery, pageNumber }))
    },
    [dispatch]
  )

  useEffect(() => {
    getData({ searchQuery: 'react', pageNumber: 1 })
  }, [getData])

  return (
    <>
      <CssBaseline />

      <StyledMainContainer maxWidth={'lg'}>
        <Header />

        <RepoListContainer />
      </StyledMainContainer>
    </>
  )
}

export default App
