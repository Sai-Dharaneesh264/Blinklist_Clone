import React from 'react'
import { Typography, List, ListItem } from '@mui/material'
import logo from '../Images/logo.png'
import Lists from '../Lists'


const SideData = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '378px', height: '120px'}}>
            <img src={logo} alt="logo" style={{width: '99.1px'}}/>
            <Typography variant="betaSubtitle1" sx={{color: '#0365F2', fontWeight: '500'}}>
                Big ideas in small packages <br /> Start learning now
            </Typography>
        </div>
    )
}

const Footer = () => {
  return (
      <div style={{width: '100%', height: '370px', backgroundColor: '#F1F6F4', padding: '0px', marginTop: '257px', display: 'flex', justifyContent: 'center'}}>
      <div style={{display: 'flex', flexDirection: 'column', backgroundColor: '#F1F6F4', height: '370px', width: '952px', justifyContent: 'space-around'}}>
            <div style={{paddingTop: '0px', display: 'flex', justifyContent: 'space-between', margin: '0px auto 0px auto', height: '224px',}}>
                <SideData />
                <Lists />
            </div>
            <Typography variant="caption"sx={{width: '912px', margin: '0px auto'}}>
            © Blinkist 2021 Sitemap   |   Imprint   |   Terms of Service   |   Privacy Policies
            </Typography>
    </div>
    </div>

  )
}

export default Footer