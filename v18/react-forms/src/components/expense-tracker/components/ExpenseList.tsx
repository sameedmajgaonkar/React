interface Item {
  id: number;
  desc: string;
  amount: number;
  category: string;
}

interface Props {
  items: Item[];
  columns: string[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ items, columns, onDelete }: Props) => {
  if (!items.length) return;
  return (
    <div>
      <table className="table-bordered">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.desc}</td>
              <td>{item.amount}</td>
              <td>{item.category}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => onDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>
              ${items.reduce((sum, item) => sum + item.amount, 0).toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
