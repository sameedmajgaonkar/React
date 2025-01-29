interface Props {
  classes: string;
  label: string;
  onClick: () => void;
}

const Button = ({ classes, label, onClick }: Props) => {
  return (
    <>
      <button className={classes} onClick={onClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
