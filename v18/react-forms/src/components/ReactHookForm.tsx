import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// optional chaining nested destructuring

const schema = z.object({
  name: z.string().min(3, { message: "Name must at least 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age Field is required" })
    .min(18, { message: "Age must be atleast 18" }),
});

//  we can extract types from data schemas using Zod’s infer method, and then use those types instead of the unknown type:

type FormData = z.infer<typeof schema>; //Returns type script type which is similar to interface

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          {...register("name")}
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          {...register("age", { valueAsNumber: true })}
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>

      <button
        className="btn btn-primary mt-3"
        type="submit"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
};

export default ReactHookForm;
