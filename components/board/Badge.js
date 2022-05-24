import React from 'react'
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { createSvgIcon } from '@mui/material/utils';
import Box from '@mui/material/Box';

const HomeIcon = createSvgIcon(
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />,
    'Home',
  );

export function Badge({ onChange, onSubmit}){

    return (
<html>
<title>W3.CSS</title>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<body>
<div className="w3-container">
  <h2>Avatar List</h2>
  <p>You can combine w3-ul and the w3-bar classes to create an avatar list:</p>
  <ul className="w3-ul w3-card-4">
    <li className="w3-bar">
      <span onclick="this.parentElement.style.display='none'" className="w3-bar-item w3-button w3-white w3-xlarge w3-right">+</span>
      <img src="img_avatar2.png" className="w3-bar-item w3-circle w3-hide-small" style={{width:85}}/>
      <div className="w3-bar-item">
        <span className="w3-large">Mike</span><br/>
        <span>Web Designer</span>
      </div>
    </li>

    <li className="w3-bar">
      <span onclick="this.parentElement.style.display='none'" className="w3-bar-item w3-button w3-white w3-xlarge w3-right">+</span>
      <img src="img_avatar5.png" className="w3-bar-item w3-circle w3-hide-small" style={{width:85}}/>
      <div className="w3-bar-item">
        <span className="w3-large">Jill</span><br/>
        <span>Support</span>
      </div>
    </li>

    <li className="w3-bar">
      <span onclick="this.parentElement.style.display='none'" className="w3-bar-item w3-button w3-white w3-xlarge w3-right">+</span>
      <img src="img_avatar6.png" className="w3-bar-item w3-circle w3-hide-small" style={{width:85}}/>
      <div className="w3-bar-item">
        <span className="w3-large">Jane</span><br/>
        <span>Accountant</span>
      </div>
    </li>
  </ul>
</div>
</body>
</html> )
}
            