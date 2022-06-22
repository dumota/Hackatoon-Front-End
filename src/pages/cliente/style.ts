import styled from "styled-components";

export const Table = styled.div`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 14pt;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    }

    
  

    table{
           width: 100%;
           background: #FFFFFF;
           box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
           border-collapse: collapse;
           max-height: 450px;
           thead{
               background: #4caf50;
              
               tr , th{
                   text-align: left;
                   color: #FFFFFF;
               }
           }
          
           tbody:nth-child(even){
               tr{
                   background-color: #EEEEEE;
               }
               
           }
       
           th, td{
               padding: 15px;
               border: 1px solid #CCCCCC;
               max-width: 450px;
              
           }

         
       

    }
`


export const ContainerCircleButton = styled.div`
      
    align-items: center;
    justify-content: center;
    display: inline-flex;
    
    
    button{
        height: 60px;
        width: 60px;
        border-radius: 50%;
        margin-right: 5px;
        background: red;
        :hover{
            background: rebeccapurple;
        }
    }
    .btn-view{
        background: yellow;
        :hover{
            background: yellowgreen;
        }
    }
    .btn-edit{
        background: green;
        :hover{
            background: greenyellow;
        }
    }
  
           
`


export const NavigationButton = styled.div`
    margin-top: 20px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF;
    border-radius: 20px;
    height: 40px;
    padding: 0 20px;

    button{
        display: flex;
        height: 35px;
        width: 40px;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        border: 5px;
        background: #001f3a;
        margin: 0 5px;
        color: white;
        font-weight: 600;
        cursor: pointer;
        transition: .3s;
        -webkit-transition: .3s;
        -moz-transition: .3s;
        :hover{
          
          background-color: gray;
        }       
        
    }
`