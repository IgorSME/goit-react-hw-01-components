import PropTypes from "prop-types";
import { TransactionHistoryItem } from "../TransactionHistoryItem/TransactionHistoryItem";
import { Table, Head, HeadRow } from "./TransactionHistory.styled";

export function TransactionHistory({items}) {
    return <Table>
  <Head>
    <tr>
      <HeadRow>Type</HeadRow>
      <HeadRow>Amount</HeadRow>
      <HeadRow>Currency</HeadRow>
    </tr>
  </Head>
        {
            items.map(item => <TransactionHistoryItem key={item.id} type={item.type} amount={ item.amount} currency ={item.currency} />)
    }
  
</Table>
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}