

export const computedSelectors = state => {

  let result = 0;
  const opCounts = {
    add: 0, subtract: 0, multiply: 0, divide: 0,
  };

  state.history.forEach(historyEntry => {

    switch (historyEntry.opName) {
      case 'ADD':
        result += historyEntry.opValue;
        opCounts.add++;
        break;
      case 'SUBTRACT':
        result -= historyEntry.opValue;
        opCounts.subtract++;
        break;
      case 'MULTIPLY':
        result *= historyEntry.opValue;
        opCounts.multiply++;
        break;
      case 'DIVIDE':
        result /= historyEntry.opValue;
        opCounts.divide++;
        break;
      default:
        break;
    }

  });
  return { result, opCounts };
};