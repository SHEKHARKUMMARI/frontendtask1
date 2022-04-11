
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import {useState} from 'react';
const PaginationRow =({children,ID})=>{
    const [showEditButton,setShowEditButton]=useState(false);
    return (<>
    {children}
    {
            showEditButton && <Button endIcon={<EditIcon />} sx={{ m: ".5rem"}} variant="contained" onClick={()=>handleEditPortClick(row.ID)} >Edit</Button>
    }
    </>)
}
export default PaginationRow;