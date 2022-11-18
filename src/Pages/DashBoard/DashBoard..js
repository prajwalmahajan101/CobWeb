import React from "react";

import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Card from "./Card" 
import JobAlerts from "./JobAlerts";
import back from "../../assets/abc.svg";
import AdministrationIcon from "../../assets/AdministrationIcon.svg";
import CaseAdministrationIcon from "../../assets/CaseAdministrationIcon.svg";
import CaseFusionIcon from "../../assets/CaseFusionIcon.svg"
import AutoDataJobsIcon from "../../assets/AutoDataJobsIcon.svg";
import SocialMediaJobsIcon from "../../assets/SocialMediaJobsIcon.svg";
import LocateNowJobsIcon from "../../assets/LocateNowJobsIcon.svg";
export default function DashBoard() {
  return (
    <>
      <div>
        <img
          src={back}
          alt="back"
          width="100%"
          style={{ position: "absolute", zIndex: -100,}}
        ></img>
        <Typography
          variant="h4"
          component="h3"
          sx={{
            pt: "2.5%",
            ml: 3,
            mr: 2,
            fontSize: "3vw",
            fontFamily: "monospace",
            fontWeight: 700,
            color: "#FFFFFF",
            textDecoration: "none",
            zIndex: 100,
          }}
        >
          Dashboard
        </Typography>
      </div>
      <Box sx={{ flexGrow: 1,m:3}}>
      <Grid container spacing={2} sx={{mt:"3%",pl:2,pr:2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card title="Administration" logo = {AdministrationIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card title="Case Administration" logo = {CaseAdministrationIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card title="Case Fusion" logo = {CaseFusionIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card title="AutoData Jobs" logo = {AutoDataJobsIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card title="Socia lMedia Jobs" logo = {SocialMediaJobsIcon} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card title="Locate Now Jobs" logo = {LocateNowJobsIcon} />
        </Grid>
      </Grid>
      </Box>
      <Box sx={{m:3,p:2}}>
          <JobAlerts />
      </Box>

    </>
  );
}
