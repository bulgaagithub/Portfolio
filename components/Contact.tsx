import { IconButton } from '@chakra-ui/button';
import { Link, Stack } from '@chakra-ui/layout';
import React from 'react'
import { SiLinkedin, SiGithub, SiGmail, SiGitlab } from "react-icons/si";
import { socialMediaLinks } from '../data';
export default function Contact() {
    if (!socialMediaLinks.display) {
        return null;
    }
    return (
        <div id='contact'>
            <Stack direction="row" spacing="5">
                {socialMediaLinks.github ? (
                    <Link href={socialMediaLinks.github} isExternal><SiGithub /></Link>
                ) : null}

                {socialMediaLinks.linkedin ? (
                    <Link href={socialMediaLinks.linkedin} isExternal><SiLinkedin /></Link>
                ) : null}

                {socialMediaLinks.gitlab ? (
                    <Link href={socialMediaLinks.gitlab} isExternal><SiGitlab /></Link>
                ) : null}

                {socialMediaLinks.gmail ? (
                    <Link href={`mailto:${socialMediaLinks.gmail}`} isExternal><SiGmail /></Link>
                ) : null}
            </Stack>
        </div>
    )
}
