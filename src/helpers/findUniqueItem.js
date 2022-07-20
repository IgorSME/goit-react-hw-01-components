export const findUniqueItems = (acc, i) => {
            if (!acc.find(el => el.props.label === i.props.label)) {
              acc.push(i);
            }
            return acc;
          }