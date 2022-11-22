import { keyTerms } from "../../../config/normalized-data/key-terms";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Box, Button, Card, SimpleGrid } from "@mantine/core";
import { colors } from "../../../config/colorPalette";

const Carousel = ({ ids }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mainViewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [thumbViewportRef, emblaThumbs] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const keyTermsArray = ids.map((kt) => ({
    key: kt,
    title: keyTerms[kt].title,
    definition: keyTerms[kt].definition,
  }));

  const mediaByIndex = (index) => keyTermsArray[index % keyTermsArray.length];

  const onThumbClick = useCallback(
    (index) => {
      if (!embla || !emblaThumbs) return;
      if (emblaThumbs.clickAllowed()) embla.scrollTo(index);
    },
    [embla, emblaThumbs]
  );

  const onSelect = useCallback(() => {
    if (!embla || !emblaThumbs) return;
    setSelectedIndex(embla.selectedScrollSnap());
    emblaThumbs.scrollTo(embla.selectedScrollSnap());
  }, [embla, emblaThumbs, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <Card
      withBorder
      style={{
        width: "90%",
        margin: "auto",
        backgroundColor: colors.background1,
      }}
    >
      <h1 style={{ color: colors.text, letterSpacing: 1 }}>Key Terms</h1>
      <SimpleGrid cols={2}>
        <Box
          style={{ overflow: "hidden", width: "100%" }}
          ref={mainViewportRef}
        >
          <CarouselViewPort
            keyTermsArray={keyTermsArray}
            mediaByIndex={mediaByIndex}
          />
        </Box>

        <Box ref={thumbViewportRef}>
          {keyTermsArray.map((kt, index) => (
            <Button
              m={5}
              key={index}
              onClick={() => onThumbClick(index)}
              color="violet"
              variant={index === selectedIndex ? "filled" : "outline"}
              // w={{ base: 100, sm: 150, lg: 250 }}
            >
              {mediaByIndex(index).title}
            </Button>
          ))}
        </Box>
      </SimpleGrid>
    </Card>
  );
};

function CarouselViewPort({ keyTermsArray, mediaByIndex }) {
  return (
    <Box style={{ display: "flex", userSelect: "none" }}>
      {keyTermsArray.map((kt, index) => (
        <Box
          style={{
            minWidth: "100%",
            position: "relative",
          }}
          key={index}
        >
          <h2 style={{ color: colors.text, margin: 0, padding: 0 }}>
            {mediaByIndex(index).title}
          </h2>
          <p style={{ color: colors.text, margin: 0, padding: 0 }}>
            {mediaByIndex(index).definition}
          </p>
        </Box>
      ))}
    </Box>
  );
}

export default Carousel;
