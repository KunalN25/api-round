import React from 'react'
import {Grid,Card} from '@material-ui/core'
import './styles.css'
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import ShareIcon from '@material-ui/icons/Share';
import GradeIcon from '@material-ui/icons/Grade';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const Options = () => {
    return (
        <>
            <Card className='third-card'>
                <Grid container direction='column'>
                    <Grid item className='item'>
                    <span><AccountBalanceWalletIcon/>  </span>
                        My Transactions</Grid>
                    <Grid item className='item'>
                        <span><ShareIcon/>  </span>
                        Share this app</Grid>

                    <Grid item className='item'>
                        <span><GradeIcon/> </span>
                        Rate Us</Grid>
                    <Grid item className='item'>
                        <span><ExitToAppIcon/> </span>
                        Sign Out</Grid>
                </Grid>
            </Card>
          
        </>
    )
}

export default Options
