"use client";

import { Card, Divider, Stack, Paper } from "@mui/material";
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";
import AppleIcon from "@mui/icons-material/Apple";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MarkunreadIcon from "@mui/icons-material/Markunread";

const Footer = () => {
  const text3Ref = useRef();

  useEffect(() => {
    const text3 = text3Ref.current;

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.fromTo(
            text3,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.9, ease: "bounce" }
          );
        }
      });
    }, observerOptions);

    observer.observe(text3);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <Stack flexDirection="column" display={"flex"} height={"90vh"}>
      <span
        ref={text3Ref}
        style={{ fontSize: "55px", fontWeight: "600", marginLeft: "6%" }}
      >
        {" "}
        Open vacancies
      </span>
      {/* Cards arranged in a column */}
      <Stack
        flexDirection={"row"}
        display={"flex"}
        sx={{
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: "5%",
        }}
      >
        <Card
          sx={{
            height: "11em",
            width: "400px",
            background: "#FDFCEC",
            boxShadow: "none",
            borderRadius: "3vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "left",
              marginLeft: "6%",
              marginTop: "4%",
            }}
          >
            Senior Full-Stack Engineer
          </span>
          <ul style={{ textAlign: "left", marginLeft: "6%", marginTop: "2%" }}>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€65-85k, 0.5-1.50% equity share options</li>
          </ul>
        </Card>
        <Card
          sx={{
            height: "11em",
            width: "400px",
            background: "#FDFCEC",
            boxShadow: "none",
            borderRadius: "3vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "left",
              marginLeft: "6%",
              marginTop: "4%",
            }}
          >
            Senior Designer
          </span>
          <ul style={{ textAlign: "left", marginLeft: "6%", marginTop: "2%" }}>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€40-55k, 0.25-0.50% equity share options</li>
          </ul>
        </Card>

        <Card
          sx={{
            height: "11em",
            width: "400px",
            background: "#FDFCEC",
            boxShadow: "none",
            borderRadius: "3vh",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "left",
              marginLeft: "6%",
              marginTop: "4%",
            }}
          >
            Superstar Intern
          </span>
          <ul style={{ textAlign: "left", marginLeft: "6%", marginTop: "2%" }}>
            <li>Full-time position</li>
            <li>Berlin or remote</li>
            <li>€20-24k, 0.5-1.50% equity share options</li>
          </ul>
        </Card>
      </Stack>
      <br />
      <Divider />
      <Stack
        flexDirection="column"
        display={"flex"}
        height={"90vh"}
        justifyContent="center"
        alignContent="center"
        alignItems="center"
      >
        <img
          src="/logo.ico"
          height={60}
          width={60}
          style={{ borderRadius: "20%" }}
        ></img>
        <span style={{ fontWeight: "600", fontSize: "35px", color: "#6441EF" }}>
          ahead
        </span>

        <Stack
          flexDirection={"row"}
          display={"flex"}
          marginTop={3}
          marginBottom={5}
          width={"100%"}
          alignContent={"center"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <span
            style={{ display: "flex", alignItems: "center", marginRight: "2%" }}
          >
            <LocationOnIcon
              style={{
                backgroundColor: "#00FFFF",
                borderRadius: "50%",
                fontSize: "14px",
                padding: "4px",
                color: "black",
              }}
            />
            &nbsp; Auguststraße 26, 10117 Berlin
          </span>
          <span
            style={{ display: "flex", alignItems: "center", marginRight: "2%" }}
          >
            <MarkunreadIcon
              style={{
                backgroundColor: "#00FFFF",
                borderRadius: "50%",
                fontSize: "14px",
                padding: "4px",
                color: "black",
              }}
            />
            &nbsp; hi@ahead-app.com{" "}
          </span>
        </Stack>
        <Paper
          component="button"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            alignContent: "left",
            borderRadius: "1vh",
            width: "160px",
            height: "40px",
            background: "black",
            color: "white",
            boxShadow: "none",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <AppleIcon Size />
          <div style={{ fontSize: "10px", marginLeft: "8px" }}>
            <span>Download on the</span> <br></br>
            <span>App Store</span>
          </div>
        </Paper>
      </Stack>
    </Stack>
  );
};

export default Footer;
