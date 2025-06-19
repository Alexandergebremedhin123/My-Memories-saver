

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
       margin: theme.spacing(1),
       
    },
  },
  paper: {
     padding: theme.spacing(3),
     position: 'relative',
     border: '3px solid yellow',
     backgroundColor: 'rgba(255,0,0,0.2)',
     boxShadow: '0 0 0 3px blue', 
     width: '90%',          // Relative to parent
     maxWidth: '400px', 
     marginLeft: 'auto',
     marginRight: '100px', 
     transform: 'translateX(600px)',
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
   
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 20,
  },
 
}));
