import { createAsyncThunk } from '@reduxjs/toolkit'
import { Octokit } from 'octokit'
import axios from 'axios'

const octokit = new Octokit({
  auth: process.env.AUTH_TOKEN,
})

console.log(octokit)

export const getGithubData = createAsyncThunk(
  'githubApi/fetchData',
  async ({ searchQuery = 'react', page = 1 }, thunkAPI) => {
    try {
      // return await octokit.request(`GET /search/repositories`, {
      //   q: searchQuery,
      //   per_page: 20,
      //   page: page,
      // })
      const { data } = await axios(
        `https://api.github.com/search/repositories?q=${searchQuery}&per_page=20&page=${page}`
        // {
        //   q: searchQuery,
        //   per_page: 20,
        //   page: page,
        // }
      )

      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
