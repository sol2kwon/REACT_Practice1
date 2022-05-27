import React from 'react'



export function CommunityList1({}){

    return(

<html>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
<body>

<div class="w3-container" >
  <h2>게시글 커뮤니티 목록</h2>
  <div class="w3-bar">
  <a href="/"><button class="w3-button w3-teal">홈</button></a>
  <a href="/board/community"><button class="w3-button w3-red w3-button w3-right">게시글 작성</button></a> 
  
  <br/><br/>
</div>
  <table class="w3-table-all">
    <tr>
      <th class="w3-left-align">번호</th>
      <th>제목</th>
      
    </tr>
    <tr>
      <td>13</td>
      <td>집밥 자랑합니다.</td>
      
    </tr>
    <tr>
      <td>14</td>
      <td>파티 식단 공유합니다.</td>
      
    </tr>
    <tr>
      <td>15</td>
      <td>식단 강추</td>
    </tr>

    <tr>
    <td>16</td>
    <td>냉장고 속 재료로 초간단 요리하기</td>
    </tr>

    <tr>
    <td>17</td>
    <td>오늘의 요리사는?</td>
   </tr>

  <tr>
    <td>18</td>
    <td>오늘의 요리</td>
  </tr>

  <tr>
    <td>19</td>
    <td>오늘의 요리</td>
  </tr>

  <tr>
    <td>20</td>
    <td>오늘의 요리</td>
  </tr>

  <tr>
    <td>21</td>
    <td>오늘의 요리</td>
  </tr>

  <tr>
    <td>22</td>
    <td>오늘의 요리</td>
  </tr>

  <tr>
    <td>23</td>
    <td>오늘의 요리</td>
  </tr>

  <tr>
    <td>24</td>
    <td>오늘의 요리</td>
  </tr>
    </table>
  </div>

  <div class="w3-center"><br/><br/>
  <div class="w3-bar">
   <a href="#" class="w3-bar-item w3-button">&laquo;</a>
    <a href="/board/communityList" class="w3-button">1</a>
    <a href="/board/communityList1" class="w3-button">2</a>
    <a href="#" class="w3-button">3</a>
    <a href="#" class="w3-button">4</a>
    <a href="#" class="w3-button">&raquo;</a>
  </div>
  </div>

  </body>
</html>


     

  )
}