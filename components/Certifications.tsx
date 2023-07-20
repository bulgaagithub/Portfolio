import { Box, Text, Grid } from "@chakra-ui/layout";
import React from "react";
import Card from "./Card/CertificateCard";
import Title from "./Title";
import { certificates } from "../data/index";

export default function Certifications() {
  return (
    <Box mt="20">
      <section id="certifications">
        <Title title="Certifications" />
        <Grid templateColumns="repeat(3, 1fr)" gap={6} mt={3}>
          {certificates.data.map((c: any, i) => (
            <Card
              key={i}
              title={c.title}
              from={c.from}
              to={c.to}
              image={c.image}
              url={c.url}
            />
          ))}
        </Grid>
      </section>
    </Box>
  );
}
