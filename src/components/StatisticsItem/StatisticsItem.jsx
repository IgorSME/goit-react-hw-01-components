import PropTypes from "prop-types";
import { Label, Item, Percentage } from "./StatisticsItem.styled";

export const StatisticsItem = ({ label, percentage}) => {
    return <Item>
        <Label>{label}</Label>
      <Percentage>{percentage} % </Percentage>
    </Item>
}

StatisticsItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}