import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRepositoriesList } from '../../app/githubApi/githubApiSelectors'
import { ReactComponent as Star } from '../../assets/icons/star-icon.svg'
import { ReactComponent as Watcher } from '../../assets/icons/watcher-icon.svg'
import {
  PaperWithStyles,
  SRepoInfoWrapper,
  StyledPWithIcon,
  StyledRepoList,
} from './styles'
import { Paper } from '@material-ui/core'

export default function RepoListContainer() {
  const repositoriesList = useSelector(getRepositoriesList)

  console.log(repositoriesList)

  return (
    <div>
      <StyledRepoList>
        {repositoriesList?.map((item) => (
          <RepoItem key={item.id} item={item} />
        ))}
      </StyledRepoList>

      <span>Pagination</span>
    </div>
  )
}

function RepoItem({ item }) {
  return (
    <li>
      <PaperWithStyles
        WithStyles
        elevation={0}
        children={
          <>
            <SRepoInfoWrapper>
              <img
                src={item.owner.avatar_url}
                alt={`avatar-${item.owner.login}`}
                width={128}
                height={'100%'}
              />
              <div className={'repo-info-avatar-block'}>
                <h2>Name: {item.name}</h2>

                <p>Login: {item.owner.login}</p>
                <p>Language: {item.language}</p>
                <p>Description: {item.description}</p>
              </div>
            </SRepoInfoWrapper>

            <div>
              <StyledPWithIcon>
                <Star />
                <span>Stars: {item.stargazers_count}</span>
              </StyledPWithIcon>
              <StyledPWithIcon>
                <Watcher />
                <span>Watchers: {item.watchers}</span>
              </StyledPWithIcon>
            </div>
          </>
        }
      />
    </li>
  )
}
