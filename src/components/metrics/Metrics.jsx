import { useEffect } from "react";
import styled from "styled-components";

const MetricsContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Metrics = ({ metrics }) => {
    return (
        <MetricsContainer>
            <div>
                <p>Average time to finish tasks</p>
                <p>{metrics.overall}</p>
            </div>
            <div>
                <p>Average time to finish tasks</p>
                <p>Low: {metrics.low}</p>
                <p>Medium: {metrics.medium}</p>
                <p>High: {metrics.high}</p>
            </div>
        </MetricsContainer>
    )
}

export default Metrics;