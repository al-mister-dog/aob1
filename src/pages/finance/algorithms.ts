export const financialAlgorithms = {
  getExpectedValue: (probabilities: number[], values: number[]) => {
    let expectedValue = 0;
    for (let i = 0; i < probabilities.length; i++) {
      expectedValue += probabilities[i] * values[i];
    }
    return expectedValue;
  },
  getVariance: (probabilities: number[], values: number[]) => {
    let variance = 0;
    const expectedValue = financialAlgorithms.getExpectedValue(
      probabilities,
      values
    );
    for (let i = 0; i < probabilities.length; i++) {
      variance += probabilities[i] * Math.pow(values[i] - expectedValue, 2);
    }
    return variance;
  },
  getStandardDeviation: (probabilities: number[], values: number[]) => {
    return Math.sqrt(financialAlgorithms.getVariance(probabilities, values));
  },
  getExpectedMean: (probabilities: number[], values: number[]) => {
    let expectedMean = 0;
    for (let i = 0; i < probabilities.length; i++) {
      expectedMean += probabilities[i] * Math.log(values[i]);
    }
    return Math.exp(expectedMean);
  },
  getExpectedAverage: (probabilities: number[], values: number[]) => {
    let expectedAverage = 0;
    for (let i = 0; i < probabilities.length; i++) {
      expectedAverage += probabilities[i] * Math.pow(values[i], 2);
    }
    return Math.sqrt(expectedAverage);
  },
  getExpectedMedian: (probabilities: number[], values: number[]) => {
    let expectedMedian = 0;
    for (let i = 0; i < probabilities.length; i++) {
      expectedMedian += probabilities[i] * Math.pow(values[i], 3);
    }
  },
};

const probabilities = {
  getProbability: (
    probabilities: number[],
    values: number[],
    value: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] === value) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityRange: (
    probabilities: number[],
    values: number[],
    min: number,
    max: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] >= min && values[i] <= max) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityLessThan: (
    probabilities: number[],
    values: number[],
    value: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] < value) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityGreaterThan: (
    probabilities: number[],
    values: number[],
    value: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] > value) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityLessThanEqualTo: (
    probabilities: number[],
    values: number[],
    value: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] <= value) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityGreaterThanEqualTo: (
    probabilities: number[],
    values: number[],
    value: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] >= value) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityNotEqualTo: (
    probabilities: number[],
    values: number[],
    value: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] !== value) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityEqualTo: (
    probabilities: number[],
    values: number[],
    value: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] === value) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityBetween: (
    probabilities: number[],
    values: number[],
    min: number,
    max: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] >= min && values[i] <= max) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityOutside: (
    probabilities: number[],
    values: number[],
    min: number,
    max: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] < min || values[i] > max) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityOutsideEqualTo: (
    probabilities: number[],
    values: number[],
    min: number,
    max: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] <= min || values[i] >= max) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
  getProbabilityBetweenEqualTo: (
    probabilities: number[],
    values: number[],
    min: number,
    max: number
  ) => {
    let probability = 0;
    for (let i = 0; i < probabilities.length; i++) {
      if (values[i] >= min && values[i] <= max) {
        probability += probabilities[i];
      }
    }
    return probability;
  },
};
