import { Card } from '@mui/material'
import React from 'react'
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import Typography from '@mui/material/Typography';

const MainCard = styled('card')(({ theme }) => ({
    width: '310px',
    height: '123px',
    margin: '36px 15px 20px',
    padding: '12px 12px 11px 10px',
    borderRadius: '10px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    backgroundColor: '#fff'
}));

const DataDisplay = ({
    data
}) => {
    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <MainCard>
                        <img src={data?.artworkUrl60} alt={"logo"} />
                    </MainCard>
                    <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
                        {data?.artistName}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {data?.trackName}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {data?.primaryGenreName}
                    </Typography>                    
                </CardContent>
                <CardActions>
                    <CurrencyExchangeIcon />
                    <Button size="small">{data?.trackPrice}</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default DataDisplay