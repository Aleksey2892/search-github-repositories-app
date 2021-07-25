import { withStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

export const StyledMainContainer = withStyles({
  root: {
    paddingTop: '32px',
    paddingBottom: '116px',
  },
})(Container)
