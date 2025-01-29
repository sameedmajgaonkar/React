import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";
import { z } from "zod";
const schema = z.object({
  desc: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0.01)
    .max(100_00),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}
const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });
  return (
    <div>
      <form
        className="flex flex-column"
        style={{ height: "50vh" }}
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="form-group">
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            {...register("desc")}
            id="desc"
            className="form-control"
          />
          {errors.desc && <p className="text-danger">{errors.desc.message}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            {...register("amount", { valueAsNumber: true })}
            id="amount"
            className="form-control"
          />
          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="">Category</label>
          <select
            {...register("category")}
            className="form-select"
            id="category"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
