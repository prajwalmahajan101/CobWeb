import React, { useState } from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import AdministrationIcon from "../../assets/AdministrationIcon.svg";
import CaseAdministrationIcon from "../../assets/CaseAdministrationIcon.svg";
import CaseFusionIcon from "../../assets/CaseFusionIcon.svg";
import AutoDataJobsIcon from "../../assets/AutoDataJobsIcon.svg";
import SocialMediaJobsIcon from "../../assets/SocialMediaJobsIcon.svg";
import LocateNowJobsIcon from "../../assets/LocateNowJobsIcon.svg";

function createData(logo , name, created, pending, running, completed) {
  return {logo, name, created, pending, running, completed };
}

const rows = [
  createData(AutoDataJobsIcon,"Auto Data Jobs", 202, 45, 10, 44),
  createData(LocateNowJobsIcon,"Locate Now Jobs", 10, 2, 4, 8),
  createData(SocialMediaJobsIcon,"Social Media Jobs", 9, 3, 0, 0),
];

export default function JobAlerts() {
  const [age, setAge] = useState(7);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        border: "1px solid black",
        backgroundColor: "#FFFFFF",
        borderRadius: "5px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Typography variant="h4" component={"span"}>
          Job Alerts
        </Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Time Frame</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={7}>Last 7 days</MenuItem>
              <MenuItem value={30}>Last Month</MenuItem>
              <MenuItem value={90}>Last 3 Months</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{p:2}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650, p: 4 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <Typography
                    variant="h6"
                    component={"span"}
                    sx={{ fontWeight: 700 }}
                  >
                    Job Type
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="h6"
                    component={"span"}
                    sx={{ fontWeight: 700 }}
                  >
                    Created
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="h6"
                    component={"span"}
                    sx={{ fontWeight: 700 }}
                  >
                    Pendding
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="h6"
                    component={"span"}
                    sx={{ fontWeight: 700 }}
                  >
                    Running
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="h6"
                    component={"span"}
                    sx={{ fontWeight: 700 }}
                  >
                    Completed
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell sx={{ width: "30%" }} align="center">
                    <Card sx={{ display: "flex", maxWidth: "80%"}}>
                      <CardMedia
                        component="img"
                        sx={{ width: 40,height:40,m:1}}
                        image={row.logo}
                        alt="Live from space album cover"
                      />
                      <CardContent sx={{ flex: "1 0 auto" }}>
                      <Typography
                    variant="div"
                    component={"span"}
                    sx={{fontSize:"1.2em",fontWeight:"bold"}}
                  >
                        {row.name}
                        </Typography>
                      </CardContent>
                    </Card>
                  </TableCell>
                  <TableCell align="center">{row.created===0?"-":row.created }</TableCell>
                  <TableCell align="center">{row.pending===0?"-":row.pending}</TableCell>
                  <TableCell align="center">{row.running===0?"-":row.running}</TableCell>
                  <TableCell align="center">{row.completed===0?"-":row.completed}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
