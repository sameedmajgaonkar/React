import categories from "../categories";
interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select mb-3"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
