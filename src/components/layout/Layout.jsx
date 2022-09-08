import styled from "styled-components";

const MainLayout = styled.div`
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
`

const Layout = ({ children }) => {
    return (
        <MainLayout className="main-layout">
            {children}
        </MainLayout>
    )
}

export default Layout;