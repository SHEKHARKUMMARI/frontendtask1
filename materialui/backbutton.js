import React from 'react'
import Link from "next/link"
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = () => {
  return (
      <>
        <Link href="/">
        <Button variant="contained" startIcon={<ArrowBackIosIcon />}>
            BacK to Home
        </Button>
      </Link>
    </>
   )
}

export default BackButton