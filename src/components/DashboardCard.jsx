import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './DashboardCard.css'; // Make sure the path is correct

function DashboardCard({ title, count }) {
  return (
    <Card className="card">
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="h2" component="div">
          {count}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DashboardCard;
