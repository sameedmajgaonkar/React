// interface Item {
//   description: string;
//   amount: string;
//   category: string;
// }

// interface Props {
//   columns: string[];
//   items: Item[];
//   handleDelete: () => void;
// }

// const Table = ({ columns, items }: Props) => {
//   return (
//     <div>
//       <table className="table-bordered">
//         <thead>
//           <tr>
//             {columns.map((column) => (
//               <th key={column}>{column}</th>
//             ))}
//           </tr>
//         </thead>
//         {items.map((item) => {
//           <tr>
//             <td>{item.description}</td>
//             <td>{item.amount}</td>
//             <td>{item.category}</td>
//             <td>
//               <button className="btn btn-primary" onClick={handleDelete}>
//                 Delete
//               </button>
//             </td>
//           </tr>;
//         })}
//       </table>
//     </div>
//   );
// };

// export default Table;
