import { useEffect } from "react";
import styled from "styled-components";

const MetricsContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px black solid;

  & > div {
    flex: 1;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 15px;
  }
`;

const Priority = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Metrics = ({ metrics }) => {
  return (
    <MetricsContainer>
      <div>
        <p>Average time to finish tasks</p>
        <p>{metrics.overall}</p>
      </div>
      <div>
        <p>Average time to finish tasks by priority</p>
        <Priority>Low: {metrics.low}</Priority>
        <Priority>Medium: {metrics.medium}</Priority>
        <Priority>High: {metrics.high}</Priority>
      </div>
    </MetricsContainer>
  );
};

export default Metrics;
