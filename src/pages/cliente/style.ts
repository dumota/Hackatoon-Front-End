import styled from "styled-components";
import Link from "next/link";
import { ThemesProvider } from "../../contexts/themeContext";

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
           background: ${({theme})=> theme.table};
           box-shadow: 0px 0px 3px rgba(0,0,0,0.3);
           border-collapse: collapse;
           max-height: 450px;
           color: ${({theme})=> theme.text};
           thead{
               background:${({theme})=> theme.thead} ;
              
               tr , th{
                   text-align: left;
                   color: ${({theme})=> theme.text};
               }
           }
          
           tbody:nth-child(even){
               tr{
                   background-color: ${({theme})=> theme.table2};
               }
               
           }
       
           th, td{
               padding: 15px;
               border: 1px solid #CCCCCC;
               max-width: 450px;
               color: ${({theme})=> theme.textTable};
              
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
            background: #ff8554;
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

export const BtnTop = styled.div`
    
    display: flex;
    float: right;
    height: 45px;
    background: none;
    margin-bottom: 20px;
    
    

    button{
        background:${({theme})=> theme.btncircle};
        border-radius: 20px;
        margin-right: 30px;
        text-align: center;
        justify-content: center;
        padding: 10px;
        transition: .2s;
        :hover{
            background: paleturquoise;
        }


        
    }
`

export const Form = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    box-shadow: 5px 5px 10px rgba(0,0,0,.212);

    .form{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        background-color: ${({theme})=> theme.form};
        padding: 0 2rem 0 3rem;
        margin: 0;
    }
    .form-header{
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        
    }
    .form-header h1::after{
        content: '';
        display: block;
        width: 5rem;
        height: 0.3rem;
        background-color: #6c63ff;
        margin: 0 auto;
        position: absolute;
        border-radius: 10px;
    }
    .input-group{
        width: 80vh;
        flex-wrap: wrap;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem 0;
        font-size: 62px;
        justify-content: center;
       
    }
    .input-box{
        display: flex;
        flex-direction: column;
        margin-bottom: 1.1rem;
        display:inline;
    }
    .input-box input{
        
        margin: 0.6 rem 0;
        padding: 0.8rem 1.2rem;
        border: none;
        border-radius: 10px;
        box-shadow: 1px 1px 6px #0000001c;
        width: 70%;
        ;
    }
    .input-box input:hover{
        
       
        color: white;
       
        box-shadow: 2px 20px 25px #dc2e685d;
        border-color: #dc2e69;
        cursor: pointer;
    
    }
    .input-box input:focus-visible{
        outline: 1px solid #6c63ff;
    }
    .input-box label{
        font-size: 0.75rem;
        font-weight: 600;
        color: #000000c0;
    }
    .input-box input::placeholder{
        color: #000000be;
    }
    .continue-button{
        display: flex;
        justify-content: center;
    }
    .continue-button button{
       
        width: 50%;
        margin-top: 2.5rem;
        border: none;
        background-color: #6c63ff;
        padding: 0.62rem;
        border-radius: 5px;
        cursor: pointer;
    }
    .continue-button button:hover{
        background-color: #6b63fff1;
    }
`