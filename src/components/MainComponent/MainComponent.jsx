import { Grid, Card,CardHeader,CardContent,Typography } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import React from 'react'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import './styles.css'
import Options from './Options/Options'
import { getAllByDisplayValue } from '@testing-library/react';
const MainComponent = () => {
    return (
        <div className='container-main'>
            <Grid container direction='column'>
                <Grid item>
                    <Card className='first-card'>
                                {/* <CardHeader> */}
                                <h4> S and S technologies <span> <EditIcon/> </span></h4>
                                <hr/>
                                {/* </CardHeader> */}
                                {/* <CardContent> */}
                                    <ul className='first-card-list'>
                                        <li><span><PhoneIcon/> </span> 1234567890 </li>
                                        <li><span><EmailIcon/>  </span> john.doe@workindia.in </li>
                                        <li><span><BusinessCenterIcon/>  </span> 27AAECE0186G1ZR </li>

                                    </ul>
                                {/* </CardContent> */}
                    </Card>
                </Grid>
                <Grid item>
                     <Card className='second-card'>
                                    <div  className='recharge'>
                                        <div>
                                            <h4> ₹2340 </h4>
                                            <Typography variant='subtitle2' className='wallet'>
                                                Wallet
                                            </Typography>

                                        </div>

                                        <button className='btn btn-success'>Recharge</button>
                                    </div>
                                    
                        </Card>
                </Grid>
                <Grid item>
                    <Options/>
                </Grid>
            </Grid>
{/* 
            <div className='grid-container'>
                
                <div>
                        
                

                            
                </div>
            </div> */}
            {/* <Grid container spacing={3} > */}
                {/* <Grid item> */}
                    
                {/* </Grid> */}
                {/* <Grid item  > */}
                
                {/* </Grid> */}
            {/* </Grid> */}
        </div>
    )
}

export default MainComponent
