import { Chip, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import { StyledChip } from "../style";
import experience from '../timeline.json';

export default function Content() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    if (isMobile) {
        // Mobile: Simple stacked layout
        return (
            <Stack spacing={3}>
                {experience.map((item, idx) => (
                    <Stack
                        key={idx}
                        p={2}
                        bgcolor="#1c2735"
                        boxShadow="#918a8a59 0px 5px 15px"
                        borderRadius={2}
                        spacing={2}
                    >
                        <Stack justifyContent="space-between" spacing={1}>
                            <Typography variant="h5" color="white">{item.company}</Typography>
                            <Stack spacing={0.5}>
                                <Typography variant="body2">{item.duration}</Typography>
                                <Typography variant="body2">{item.location}</Typography>
                            </Stack>
                        </Stack>

                        <Typography variant="h6" color="white">{item.role}</Typography>

                        <ul style={{ paddingLeft: 16 }}>
                            {item.highlights.map((point, i) => (
                                <li key={i}><Typography variant="caption">{point}</Typography></li>
                            ))}
                        </ul>

                        <Stack flexDirection="row" flexWrap="wrap" gap={1}>
                            {item.tech.map((stack, i) => (
                                <StyledChip key={i} label={stack} variant="outlined" />
                            ))}
                        </Stack>
                    </Stack>
                ))}
            </Stack>
        );
    }

    // Desktop: Original timeline
    return experience.map((item, idx) => (
        <TimelineItem key={idx}>
            <TimelineSeparator>
                <TimelineDot />
                {idx < experience.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent display="flex" justifyContent="flex-start">
                <Stack
                    alignSelf="flex-start"
                    p={2}
                    bgcolor="#1c2735"
                    boxShadow="#918a8a59 0px 5px 15px"
                    maxWidth="80%"
                    spacing={2}
                >
                    <Stack flexDirection="row" justifyContent="space-between" alignItems="center">
                        <Typography variant="h5" color="white">{item.company}</Typography>
                        <Stack alignItems="flex-end">
                            <Typography variant="body2">{item.duration}</Typography>
                            <Typography variant="body2">{item.location}</Typography>
                        </Stack>
                    </Stack>

                    <Typography variant="h6" color="white" alignSelf='flex-start'>{item.role}</Typography>

                    <ul style={{ paddingLeft: 16}}>
                        {item.highlights.map((point, i) => (
                            <li key={i} style={{ textAlign:'start' }}><Typography variant="caption">{point}</Typography></li>
                        ))}
                    </ul>

                    <Stack flexDirection="row" flexWrap="wrap" gap={1}>
                        {item.tech.map((stack, i) => (
                            <StyledChip key={i} label={stack} variant="outlined" />
                        ))}
                    </Stack>
                </Stack>
            </TimelineContent>
        </TimelineItem>
    ));
}
