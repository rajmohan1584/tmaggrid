import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import BasicGrid from '../gird/BasicGrid';
import CardHeader from '@mui/material/CardHeader';

import './screens.css';


function BasicCard() {
  return (
    <Card className="odin2-card">
      <CardHeader className="odin2-card-header"
        title={"Financial Data Summary by Sector"}>
      </CardHeader>
      <CardContent className="odin2-card-content">
        <BasicGrid />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default function Surveillance() {
  return (
    <div style={{ width: '100%' }}>
      <Grid container spacing={4}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
          <Grid item md={5}>
            <BasicCard />
          </Grid>
          <Grid item md={5}>
            <BasicCard />
          </Grid>
          <Grid item md={5}>
            <BasicCard />
          </Grid>
        </Grid>
    </div>
  );
}
