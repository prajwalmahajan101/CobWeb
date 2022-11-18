import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function CustumCard(props) {
    const {title,logo} = props;
  return (
    <Card sx={{ display: 'flex', p:3 }}>
        <CardMedia
        component="img"
        sx={{ width: 64 }}
        image={logo}
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="div" sx={{
            fontWeight:700,
            fontSize:"1.2em",
          }}>
            {title}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
