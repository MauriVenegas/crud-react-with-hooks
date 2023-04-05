import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {

  const { register, formState: { errors }, handleSubmit } = useForm({
    defaultValues: props.currentUser,
  });

  const onSubmit = (data, e) => {
    props.updateUser(data.id, data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        {...register("name", { required: "Valor requerido" })}
      />
      <div>{errors.name?.message}</div>

      <label>User name</label>
      <input
        type="text"
        name="userName"
        {...register("userName", { required: "Valor requerido" })}
      />
      <div>{errors.userName?.message}</div>

      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">Cancel</button>
    </form>
  );
};

export default EditUserForm;
