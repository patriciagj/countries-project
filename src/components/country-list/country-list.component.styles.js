import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '110px',
    marginRight: '50px',
    marginLeft: '300px',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
  },
}));

export default useStyles;
