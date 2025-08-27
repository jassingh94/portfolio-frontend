import * as React from 'react';
import { Timeline } from '@mui/lab'
import Content from './Content';
import { Stack, Typography } from '@mui/material';

export default function AlternateReverseTimeline() {
    return (
        <Stack alignItems='center' gap={4}>
            <Typography variant='h2' fontWeight={800} color='white' textAlign='center'>My Journey</Typography>
            <Typography variant='h5' textAlign='center'>Explore my professional experience</Typography>
            <Timeline position="alternate-reverse">
                <Content />
            </Timeline>
        </Stack>

    );
}
