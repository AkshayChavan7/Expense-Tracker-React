import './ExpenseItem.css'


function ExpenseItem(props) {
    console.table(props);
    return (
        <div className='expense-item-row'>
        <table>
            <tr>
                <td>{props.values.expenseDate}</td>
                <td>{props.values.expenseTitle}</td>
                <td>
                    <div className='td-parent'>
                    <div className='amount-div'>
                        <div>
                            ${props.values.expenseAmount}
                        </div>
                    </div>
                    </div>
                </td>
            </tr>
        </table>
        </div>
        )
}

export default ExpenseItem;
