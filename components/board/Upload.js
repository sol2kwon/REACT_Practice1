import React from 'react'
import { createSvgIcon } from '@mui/material/utils';
import styles from '@/styles/Table.module.css'


export function Upload({onClick}){

    return(
      <div>
          <table className={styles.table} >
              <thead>      
                <td>
                <button>홈 화면으로</button>
                <button>공유하기</button>
                <button>조건설정</button>
                </td>    
              </thead>
              
              <tbody style={{height:400+"px", textAlign:"center"}}>
                <td colSpan={3}><button onClick={onClick}>식단이 비어있어요 나만의 식단 추가하기</button></td>       
              </tbody>
          </table>
      </div>
  )
}
            