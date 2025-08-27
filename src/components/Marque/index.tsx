import React from "react";
import { Box } from "@mui/material";

// Example logos (replace with your own imports or URLs)
const logos = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    "https://cdn.prod.website-files.com/62038ffc9cd2db4558e3c7b7/623b44a1913c46041e39c836_kafka.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/materialui/materialui-original.svg",
];

export default function TechMarquee() {
    return (
        <Box
            sx={{
                position: "relative",
                overflow: "hidden",
                width: "100%",
                py: 2
            }}
        >
            {/* Wrapper that holds 2 sets of logos back-to-back */}
            <Box
                sx={{
                    display: "flex",
                    width: "max-content",
                    animation: "marquee 15s linear infinite",
                }}
            >
                {[...Array(3)].map((_, idx) => (
                    <Box key={idx} sx={{ display: "flex" }}>
                        {logos.map((src, i) => (
                            <Box
                                component="img"
                                key={`${idx}-${i}`}
                                src={src}
                                alt={`logo-${i}`}
                                sx={{ height: 50, mx: 3 }}
                            />
                        ))}
                    </Box>
                ))}
            </Box>

            {/* Keyframes */}
            <style>
                {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
            </style>
        </Box>
    );
}
