import { createMuiTheme } from '@material-ui/core/styles';

const blue = '#0077b3';
const green = '#2db300';

export default createMuiTheme({
    palette: {
      common: {
        blue: `${blue}`,
        green: `${green}`
      },
      primary: {
        main: `${blue}`
      },
      secondary: {
        main: `${green}`
      }
    },

    typography:{
      h3: {
        fontWeight: 300,
        fontSize: '1.5rem'
      },
    },

    overrides: {
      MuiInputLabel: {
        root: {
          fontSize: '1.1rem',
          padding: '1rem'
        }
      },
      MuiTextField: {
        root: {
          width: 400,
          padding: '1rem'
        }
      }
    }
});