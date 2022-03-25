import React from 'react'
import Link from "next/link"
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Backbutton = () => {
  return (
      <>
        <Link href="/">
        <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
            Back
        </Button>
      </Link>
    </>
   )
}

export default Backbutton