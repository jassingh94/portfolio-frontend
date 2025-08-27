
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import type { TransitionProps } from '@mui/material/transitions';
import { Paper, IconButton, InputBase, Stack, Typography, FormControl, CircularProgress, useMediaQuery, useTheme } from '@mui/material';
import { Search } from '@mui/icons-material';
import { getQuery } from '../../api/queryAi'
import { useState } from 'react';
import Typewriter from '../Typewriter';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="down" ref={ref} {...props} />;
});

export default function SearchDialog({
    isOpen,
    handleClose
}: {
    isOpen: boolean,
    handleClose: () => void
}) {
    const [inputVal, setInputVal] = useState('');
    const [question, setQuestion] = useState<string>('');
    const { data, isFetching } = getQuery({ question });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const getContent = () => {
        if (data?.message && question && !isFetching) {
            return (
                <Stack height="200px" width="100%" justifyContent='center'>
                    <Typography><Typewriter text={data.message} speed={30}/></Typography>
                </Stack>
            );
        }
        else if (isFetching) {
            return (<Stack height="200px" width="100%" justifyContent='center' alignItems='center'>
                <CircularProgress />
            </Stack>);
        }
        else {
            return (<Stack height="200px" width="100%" justifyContent='center' alignItems='center' textAlign='center'>
                <Search fontSize='large' />
                <Typography color='textSecondary' variant='h6' mt={1}>Search about my professional experience</Typography>
                <Typography color='textSecondary'>Try: "React", "backend development", "startup experience"</Typography>
            </Stack>)
        }
    }
    return (
        <Dialog
            open={isOpen}
            slots={{
                transition: Transition,
            }}
            keepMounted
            onClose={handleClose}
            fullWidth
            maxWidth='md'
            sx={{
                ".MuiPaper-root": {
                    borderRadius: "20px"
                }
            }}
        >
            <DialogTitle textAlign={isMobile ? 'center' : 'inherit'}>
                <Typography variant='h5' fontWeight={600}>Search about my experience
                </Typography>
            </DialogTitle>
            <DialogContent>
                <Stack width="100%">
                    <Stack width="100%" alignItems='center'>
                        <FormControl fullWidth onSubmit={(e) => {
                            e.preventDefault();
                            setQuestion(inputVal);
                        }}>
                            <Paper
                                component="form"
                                sx={{
                                    p: '2px 4px', display: 'flex', alignItems: 'center', width: "100%", borderRadius: "20px"
                                }}
                            >
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search tech stack, roles, projects..."
                                    fullWidth
                                    onChange={(e) => { setInputVal(e.target.value) }}
                                />
                                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                    <Search />
                                </IconButton>
                            </Paper>
                        </FormControl>
                    </Stack>
                    {getContent()}
                </Stack>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    );
}
