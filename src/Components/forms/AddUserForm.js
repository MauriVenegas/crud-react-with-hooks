import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

  const { register, formState: { errors } , handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    data.id = null;
    props.addUser(data);
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Name</label>
      <input
        type="text"
				name="name"
        {...register("name", { required: 'Valor requerido' })}
      />
			<div>{errors.name?.message}</div>

      <label>User name</label>
      <input
        type="text"
        name="s"
				{...register("userName", { required: 'Valor requerido' })}
      />
			<div>{errors.userName?.message}</div>

      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
