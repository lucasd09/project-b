import { Container, Stack } from '@mui/material'
import React from 'react'

export default function Navbar() {
    return (
        <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
            <Stack direction='row' spacing={6} sx={{alignItems: 'center'}}>
                <p>navbar</p>
                <p>navbar</p>
                <p>navbar</p>
            </Stack>
            <Stack direction='row' spacing={6} sx={{alignItems: 'center'}}>
                <p>navbar</p>
                <p>navbar</p>
                <p>navbar</p>
            </Stack>
        </Container>
    )
}
