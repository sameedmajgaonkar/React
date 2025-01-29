interface Props {
  items: string[];
  label: string;
  onSelect: (event: any) => void;
}

const Select = ({ items, label, onSelect }: Props) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <select className="form-select" onChange={onSelect}>
        <option value=""></option>
        {items.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
