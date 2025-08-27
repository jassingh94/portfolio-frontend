import { GitHub, LinkedIn, EmailOutlined, DownloadOutlined } from "@mui/icons-material";
import { Button, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import Search from '../Search';
import Avatar from "../Avatar";
import resume from '../../assets/Jaspreet Singh Bindra - Resume.pdf';

export default function About() {
    const git = 'https://github.com/jassingh94';
    const linked = 'https://www.linkedin.com/in/jaspreet-bindra/';
    const mail = 'mailto:jaspreet.dcsa@gmail.com';

    const openInNewTab = (url: string) => {
        window.open(url, '_blank')?.focus();
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    (
        <Stack flexDirection='row' width='100%'>
            <Stack height="30%" width="80%" alignItems="flex-start" ml={20}>
                <Stack ml={10} mt={-4}>
                    <Typography variant='h1' fontWeight={700} color='white' fontSize='4.5rem'>Hello, I'm</Typography>
                    <Typography variant='h1' fontWeight={700} color='#3fbef4' fontSize='4.5rem'>Jaspreet Singh</Typography>
                </Stack>
                <Stack ml={10} mt={2} width='50%'>
                    <Typography color='white' variant='h6'>I thrive in fast-paced, ambiguous environments where I can solve complex technical challenges and deliver measurable business impact.</Typography>
                </Stack>
                <Search />
                <Stack ml={10} mt={3} width='40%' gap={5} flexDirection='row' color='white'>
                    <Button variant='text' onClick={() => openInNewTab(git)}><GitHub fontSize='medium' /></Button>
                    <Button variant='text' onClick={() => openInNewTab(linked)}><LinkedIn fontSize='medium' /></Button>
                    <Button variant='text' onClick={() => openInNewTab(mail)}> <EmailOutlined fontSize='medium' /></Button>
                    <Button variant='text' href={resume}><DownloadOutlined fontSize='medium' /></Button>
                </Stack>
            </Stack>
            <Stack width='40%' justifyContent='flex-start' mt={10} mr={20} flexDirection='row'>
                <Avatar />
            </Stack>
        </Stack>
    )
    return (
        <Stack
            flexDirection={isMobile ? "column" : "row"}
            width="100%"
            alignItems={isMobile ? "center" : "flex-start"}
            spacing={isMobile ? 4 : 0}
            ml={!isMobile ? 20 : 0}
        >
            {/* Left Section */}
            <Stack
                height="auto"
                width={isMobile ? "100%" : "80%"}
                alignItems={isMobile ? "center" : "flex-start"}
                textAlign={isMobile ? "center" : "left"}
                px={isMobile ? 2 : 10}
                mt={isMobile ? 2 : -4}
            >
                <Typography
                    variant="h1"
                    fontWeight={700}
                    color="white"
                    fontSize={isMobile ? "2.5rem" : "4.5rem"}
                >
                    Hello, I'm
                </Typography>
                <Typography
                    variant="h1"
                    fontWeight={700}
                    color="#3fbef4"
                    fontSize={isMobile ? "2.5rem" : "4.5rem"}
                >
                    Jaspreet Singh
                </Typography>

                <Stack mt={2} width={isMobile ? "100%" : "50%"}>
                    <Typography color="white" variant="h6">
                        I thrive in fast-paced, ambiguous environments where I can solve
                        complex technical challenges and deliver measurable business impact.
                    </Typography>
                </Stack>

                <Stack mt={2} width={isMobile ? "100%" : "60%"}>
                    <Search />
                </Stack>

                <Stack
                    mt={3}
                    width={isMobile ? "100%" : "40%"}
                    gap={2}
                    flexDirection="row"
                    justifyContent={isMobile ? "center" : "flex-start"}
                    color="white"
                >
                    <Button variant="text" onClick={() => openInNewTab(git)}>
                        <GitHub fontSize="medium" />
                    </Button>
                    <Button variant="text" onClick={() => openInNewTab(linked)}>
                        <LinkedIn fontSize="medium" />
                    </Button>
                    <Button variant="text" onClick={() => openInNewTab(mail)}>
                        <EmailOutlined fontSize="medium" />
                    </Button>
                    <Button variant="text" href={resume}>
                        <DownloadOutlined fontSize="medium" />
                    </Button>
                </Stack>
            </Stack>

            {/* Right Section (Avatar) */}
            <Stack
                width={isMobile ? "100%" : "40%"}
                justifyContent="center"
                alignItems="center"
                mt={isMobile ? 4 : 10}
                mr={isMobile ? 0 : 40}
            >
                <Avatar />
            </Stack>
        </Stack>
    );
}
