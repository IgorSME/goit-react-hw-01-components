import PropTypes from "prop-types";
import { TableData } from "./TransactionHistoryItem.styled";

export function TransactionHistoryItem({type, amount, currency}) {
    return <tbody>
    <tr>
        <TableData>{ type}</TableData>
        <TableData>{ amount}</TableData>
        <TableData>{ currency}</TableData>
    </tr>
  </tbody>
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}