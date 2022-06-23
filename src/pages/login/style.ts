import styled from "styled-components";


export const Container = styled.div`
 
  div{ 
        /* background-image:url('assets/background.jpg'); */
        background: linear-gradient(to right, #1c003b 0%, #4b0374 79%);
        height: 100vh;
        background-size: cover;
        display: flex;
        justify-content: center;
        align-items: center;
        
        div{
             display: flex;
             align-items: center;
             flex-direction: column;
             height: 80vh;
             width: 30vw;
             background: rgba(155,255,255,0.15);
             box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
             backdrop-filter: blur(1.5px);
             border-radius: 10px;
             color:#ffff ;
             text-transform: uppercase;
             letter-spacing:1rem;

             

             h1{
                text-align: center;
                justify-content: center;
                font-size: 15px;
                flex-direction: column;
                position: initial;
                padding-bottom: 50%;
        
                }
           

                form{
               
                        width: 90%;
                        margin: 0;
                        padding: 0;
                        text-align: center;
                       

                
                label{
                        letter-spacing: 0.5rem;
                        font-size: 15px;
                        margin-top: auto;
                        
                        
                        
                }
                input{
                        
                        margin: auto;
                        background: fixed;
                        color: black;
                        margin-bottom: 15px;
                        margin-top: 10px;
                        flex-direction: column;
                        justify-content: space-around;
                        align-items: center;
                        height: 9vh;
                        width: 100%;
                        border-radius: 20px;
                        text-align: center;
                        
                        color: black;
                        font-size: 1rem;
                        font-weight: bold;
                        &:focus{
                                
                                box-shadow: 0 0 0 0.2rem #b9abe0;
                                backdrop-filter: blur(12rem);
                                background: rgba(155,255,255,0.15);
                        }
                        
                }

                button{
                        margin: auto;
                        margin-top: 10px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: linear-gradient(to right, #14163c 0%, #03217b 79%);
                        text-transform: uppercase;
                        letter-spacing: 0.2rem;
                        width: 65%;
                        height: 3rem;
                        border: none;
                        color: white;
                        border-radius: 2rem;
                        cursor: pointer;
                        transition: 1.5s;
                        
                }
                &:hover button{
                        background: linear-gradient(to left, #14163c 0%, #03217b 100%);
                }
                }
        

        

    }
  }      

        
       
 `