import styled from "styled-components";

export const Container = styled.div`
          
    .container{
        
        
        padding: 35px;
        height: 100%;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
       

    }
   
   
    .card{
       
        display: inline-block;
        position: relative;
        padding: 10px;
        width: 300px;
        background-color: #fff;
        margin: 20px;
        border: 1px solid black;
        border-radius: 20px;
        transition: 0.5s;
        text-align: center;
        
        :hover{
        background-color: #dc2e69;
        color: white;
        padding-bottom: 30px;
        box-shadow: 2px 20px 25px #dc2e685d;
        border-color: #dc2e69;
        cursor: pointer;
    }
    
        h1{
        font-size: 2rem;
        color: gray;
        }
        p{
            color: #666;
            transition: 0.5s;
        }
        button{
            position: relative;
            
            padding: 10px 20px;
            background-color: #000;
            color: #fff;
            border-radius: 40px;
            text-decoration: none;
            transition: 0.5s;
            outline: none;
            margin-top:20px ;
        }
        
        .content{
            padding: 20px;
            text-align: center;
      
        }
            
        
        
    }
   

    

    

       
        
`


export const Form = styled.div`
    
       
        display: flex;
        justify-content: center;
        align-items: center;
        

        .form{
          
            height: 100%;
            justify-content: center;
            align-items: center;
           
            padding: 0 2rem 0 3rem;
            width: 80%;
          
        }
        .form h1{
            justify-content: center;
            align-items: center;
            display: flex;

        }
        .form button{
            float: right;
            margin-bottom: 80px;
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
        .form button{
            span{
                background-color: none;
                font-size: 30px;
                font-weight: 600;
            }
        }
            
        }
        .input-group{
            display: flex;
            flex-wrap: wrap;
            padding: 1rem 0;
            
           
        }
        .input-group label{
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
            margin-bottom: 10px;
        }
        .input-group input{
            display: inline-block;
            width: 100%;
            padding: 10px;
            border-radius: 20px;
            
            
    
`