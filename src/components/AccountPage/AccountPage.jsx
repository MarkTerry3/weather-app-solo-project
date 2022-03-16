import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {useState} from 'react';


function AccountPage() {


    const dispatch = useDispatch();
    const history = useHistory();

    const user_id = useSelector(store => store.user);
    const [zipCode, setZipCode] = useState('');




    const editAccount = () => {
        console.log('editAccount', user_id);

        dispatch({
            type: 'EDIT_ZIP_CODE',
            payload: zipCode
        })
        history.push('/home');
        
    }


    const deleteAccount = () => {
        console.log('deleteAccount');
    }


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return (
        <>
            <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={handleOpen}>Edit Zip Code</Button>
            <br />
            <Button style={{ backgroundColor: "red" }} variant="contained" onClick={deleteAccount}>Delete Account</Button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Edit Zip Code
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {/* <Textfield 
                            sx={{ mt: 2}}
                            required
                            id="outlined-zipcode-input"
                            label="Zip Code"
                            value={zipCode}
                            onChange={(event) => setZipCode(event.target.value)}
                        /> */}
                        <Button style={{ backgroundColor: "teal" }} variant="contained" onClick={editAccount}>Submit</Button>
                    </Typography>
                </Box>
            </Modal>
        </>
    )
}

export default AccountPage;