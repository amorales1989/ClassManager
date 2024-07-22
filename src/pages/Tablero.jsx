import React from 'react';
import DashboardCard from '../components/DashboardCard';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

function Dashboard() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Students" count={120} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Teachers" count={30} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Courses" count={50} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <DashboardCard title="Classes" count={10} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
