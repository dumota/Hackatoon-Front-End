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
        padding-top: 50px;
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