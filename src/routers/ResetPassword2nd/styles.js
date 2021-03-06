import Styled from 'styled-components';
import MyButton from '../../components/MyButton';
import { Link } from 'react-router-dom';

export const Parents = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => 'url(' + props.src + ')'};
    background-position: center center;
    background-size: cover;
    min-height: 100vh;
    form {
        z-index:290;
        position: relative;
    }
    @media only screen and (max-width: 768px) {
        min-height: 100vh;
    }
`

export const ResetPasswordWrap = Styled.div`
    flex: 1;
    background: #fff;
    z-index: 290;
    margin: 0 auto;
    max-width: 700px;
    border-radius: 5px;
    padding: 20px 30px;
    opacity: 0.9;
    form {
        .MuiFormControl-root {
            display: block;
            margin-bottom: 25px;
        }
        .MuiFormLabel-root {
            transform: none;
        }
        .MuiInput-root::before {
            display: none;
        }
        .MuiInput-root::after {
            display: none;
        }
        .MuiInputBase-root {
            width: 100%;
        }
        input {
            border: 2px solid #1e3c72;
            border-radius: 5px;
            padding: 10px 20px;
        }
        label {
           top: -5px;
           font-family: 'calibri', sans-serif;
           color: #1e3c72;
        }
    }
    @media only screen and (max-width: 768px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const SendEmailButton = Styled(MyButton)`
    border-radius: 5px;
    font-weight: 500;
    background: #1e3c72;
    color: #fff;
    transition: 0.4s;
    &:hover {
        background: none;
        color: #1e3c72;
    }
`

export const Title = Styled.div`
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #1e3c72;
    margin-bottom: 20px;
`

export const StyledLink = Styled(Link)`
    text-decoration: none;
    color: #1e3c72;
    font-weight: 500;
`

export const SubTitle = Styled.div`
    text-align: center;
    font-size: 16px;
    font-weight: 400;
    color: #1e3c72;
    margin-bottom: 20px;
`