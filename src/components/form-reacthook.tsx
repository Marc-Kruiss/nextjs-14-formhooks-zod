"use client";
import React from "react";
import { FieldValues, useForm } from "react-hook-form";

type Props = {};

const FormWithReactHookForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <h1>Form with react-hook-form</h1>

      <input
        {...register("email", {
          required: "Email is required",
        })}
        type="email"
        maxLength={50}
        placeholder="Email"
        className="px-4 py-2 rounded"
      />
      {errors.email && (
        <p className="text-red-500">{`${errors.email.message}`}</p>
      )}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 4,
            message: "Password must be at least 4 characters",
          },
        })}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />
      {errors.password && (
        <p className="text-red-500">{`${errors.password.message}`}</p>
      )}
      <input
        {...register("confirmPassword", {
          required: "Confirm Password is required",
          validate: (value) =>
            value === getValues("password") || "Password must match",
        })}
        type="password"
        placeholder="Password"
        className="px-4 py-2 rounded"
      />
      {errors.confirmPassword && (
        <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
      )}
      <button
        disabled={isSubmitting}
        type="submit"
        className="enabled:bg-blue-500 py-2 rounded disabled:bg-gray-500"
      >
        Submit
      </button>
    </form>
  );
};

export default FormWithReactHookForm;
