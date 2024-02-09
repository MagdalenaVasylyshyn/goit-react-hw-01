import css from "./TransactionHistory.module.css"

export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionTable}>
  <thead className={css.transactionHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody className={css.transactionBody}>
    {items.map((item) => (<tr key={item.id}>
            <td className={css.transactionText}>{item.type}</td>
            <td className={css.transactionText}>{item.amount}</td>
            <td className={css.transactionText}>{item.currency}</td>
    </tr>
    ))}
  </tbody>
</table>
    )
}