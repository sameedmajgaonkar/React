interface Props {
  name: string;
  label: string;
  type: string;
}

const Input = ({ name, label, type }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input type={type} id={name} className="form-control" />
    </div>
  );
};

export default Input;
