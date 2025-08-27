import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { HomeOutlined, WorkOutlined, MailOutlined, DownloadOutlined } from '@mui/icons-material'
import { StyledButton, StyledNorButtons } from "./style";
import resume from '../../assets/Jaspreet Singh Bindra - Resume.pdf'

export default function NavBar({
    scrollToHome,
    scrollToExp
}: {
    scrollToHome: () => void
    scrollToExp: () => void
}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const mail = 'mailto:jaspreet.dcsa@gmail.com';
    const openInNewTab = (url: string) => {
        window.open(url, '_blank')?.focus();
    }
    if(isMobile) return null;
    return (
        <Stack width="100%" height="60px" alignItems="center" flexDirection="row" mt={4} zIndex={100000}>
            <Stack width="45%" color="white" height="100%" />
            <Stack color="white" height="100%" pl={4} pr={4} borderRadius={20} bgcolor="rgba(24, 32, 48, 0.8)" sx={{
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
            }}>
                <Stack flexDirection="row" justifyContent="flex-start" alignItems="center" height="100%" gap={4}>
                    <Stack>
                        <StyledNorButtons variant="text" onClick={scrollToHome}>
                            <Stack gap={0.5} flexDirection='row' alignItems='center'>
                                <HomeOutlined />
                                <Typography>Home</Typography>
                            </Stack>
                        </StyledNorButtons>
                    </Stack>
                    <Stack>
                        <StyledNorButtons variant="text" onClick={scrollToExp}>
                            <Stack gap={0.5} flexDirection='row' alignItems='center'>
                                <WorkOutlined />
                                <Typography>Experience</Typography>
                            </Stack>
                        </StyledNorButtons>
                    </Stack>
                    <Stack>
                        <StyledNorButtons variant="text" onClick={() => {openInNewTab(mail)}}>
                            <Stack gap={0.5} flexDirection='row' alignItems='center'>
                                <MailOutlined />
                                <Typography>Contact</Typography>
                            </Stack>
                        </StyledNorButtons>
                    </Stack>
                    <Stack>
                        <StyledButton variant="contained" href={resume}>
                            <Stack gap={1} flexDirection='row'>
                                <DownloadOutlined />
                                <Typography>Resume</Typography>
                            </Stack>
                        </StyledButton>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}