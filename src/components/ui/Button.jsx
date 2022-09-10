import styled from "styled-components";

const StyledButton = styled.button`
    width: 100px;
    height: 30px;
`

const Button = ({ children, onClick }) => {
    return (
        <StyledButton onClick={onClick}>{children}</StyledButton>
    )
}

export default Button;