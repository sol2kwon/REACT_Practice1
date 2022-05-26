import React from 'react'
import { createSvgIcon } from '@mui/material/utils';
import styles from '@/styles/Table.module.css'


export function Community({onChange,onSubmit}){

    return(
      <html>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
      <body>
      
      <form class="w3-container w3-card-4" action="/action_page.php">
        <h2 class="w3-text-blue">Input Form</h2>
        <p>Use any of the w3-text-color classes to color your labels.</p>
        <p>      
        <label class="w3-text-blue"><b>First Name</b></label>
        <input class="w3-input w3-border" name="first" type="text"/></p>
        <p>      
        <label class="w3-text-blue"><b>Last Name</b></label>
        <input class="w3-input w3-border" name="last" type="text"/></p>
        <p>      
        <button class="w3-btn w3-blue">Register</button></p>
      </form>
      
      </body>
      </html> 
  )
}
            