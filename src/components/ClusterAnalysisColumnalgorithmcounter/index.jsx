import React from "react";

import { Line, Text } from "components";

const ClusterAnalysisColumnalgorithmcounter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-center py-2 w-auto">
          <Text
            className="text-base text-blue-500 w-auto"
            size="txtOutfitMedium16"
          >
            {props?.algorithmcounter}
          </Text>
        </div>
        <Line className="bg-blue-500 h-0.5 w-full" />
      </div>
    </>
  );
};

ClusterAnalysisColumnalgorithmcounter.defaultProps = {
  algorithmcounter: "Algorithm 1",
};

export default ClusterAnalysisColumnalgorithmcounter;
