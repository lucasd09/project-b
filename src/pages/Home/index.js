import { Container } from '@mui/material'
import React from 'react'
import Navbar from '../../components/Navbar'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <p>asdas</p>
                <p>asd</p>
            </Container>
        </div>
    )
}
