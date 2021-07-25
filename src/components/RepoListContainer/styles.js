import { withStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import styled from 'styled-components'

export const PaperWithStyles = withStyles({
  root: {
    marginBottom: 36,
    padding: 40,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderRadius: 16,
  },
})(Paper)

export const StyledRepoList = styled.ul`
  list-style-type: none;
`
export const SRepoInfoWrapper = styled.div`
  display: flex;

  .repo-info-avatar-block {
    margin-left: 32px;
  }
`

export const StyledPWithIcon = styled.p`
  display: flex;
  align-items: center;

  & span {
    margin-left: 16px;
  }
`
