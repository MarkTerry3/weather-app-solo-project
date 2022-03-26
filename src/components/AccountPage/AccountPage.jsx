import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import './AccountPage.css';

function AccountPage() {


    const dispatch = useDispatch();
    const history = useHistory();

    const user_id = useSelector(store => store.user);
    const [zipCode, setZipCode] = useState('');



    // pass the user_id and the new Zip code to the saga, to then be passed to the back end
    const editAccount = (event) => {
        event.preventDefault;
        console.log('editAccount', user_id);

        dispatch({
            type: 'EDIT_ZIP_CODE',
            payload: { user_id, zipCode }
        })
        // set the new zip
        setZipCode(zipCode);

        history.push('/home');

    }

    // pass the user to the saga so we know who to delete.
    const deleteAccount = (action) => {
        // event.preventDefault();
        console.log('deleteAccount');

        dispatch({
            type: 'DELETE_ACCOUNT',
            payload: user_id
        })
        // UNSET_USER  ????  - Yes
        dispatch({
            type: 'UNSET_USER'
        })
        // code below refreshes the page
        // document.location.reload(true);
        history.push('/home');
    }

    // // mui stuff you need for the modal
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    // // mui styling you need
    const styleEdit = {
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        backgroundColor: "yellow",
        color: "black"
    };

    const styleDelete = {
        position: 'absolute',
        top: '35%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        backgroundColor: "red"
    };

    // ============================================================================================================================
    // Stuff for Edit below
    // ============================================================================================================================

    const [openEdit, setOpenEdit] = React.useState(false);

    const handleClickOpenEdit = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
    };


    // ============================================================================================================================
    // Stuff for Delete below
    // ============================================================================================================================


    const [openDelete, setOpenDelete] = React.useState(false);


    const handleClickOpenDelete = () => {
        setOpenDelete(true);
    };

    const handleCloseDelete = () => {
        setOpenDelete(false);
    };


    function whichUser() {
        console.log(user_id);
    }


    function getUserZip() {

    }





    return (
        <div>
            <h3 onClick={whichUser}>User Name: {user_id.username}</h3>
            <h3>Current Zip Code: {user_id.zip_code}</h3>
            <Button style={styleEdit} variant="contained" onClick={handleClickOpenEdit}>Edit Zip Code</Button>
            <Button style={styleDelete} variant="contained" onClick={handleClickOpenDelete}>Delete Account</Button>
            <Dialog open={openEdit} onClose={handleCloseEdit}>
                <DialogTitle>Edit Zip Code</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="outlined-zipcode-input"
                        label="New Zip Code"
                        type="text"
                        fullWidth
                        variant="standard"
                        value={zipCode}
                        onChange={(event) => setZipCode(event.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit}>Cancel</Button>
                    <Button onClick={editAccount}>Submit</Button>
                </DialogActions>
            </Dialog>
            <Dialog open={openDelete} onClose={handleCloseEdit}>

            </Dialog>
            <Dialog
                open={openDelete}
                onClose={handleCloseDelete}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Delete Account?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to Delete your account? This action is irreversable.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDelete}>Cancel</Button>
                    <Button onClick={deleteAccount}>DELETE ACCOUNT</Button>
                </DialogActions>
            </Dialog>
        </div>
    );


}


export default AccountPage;