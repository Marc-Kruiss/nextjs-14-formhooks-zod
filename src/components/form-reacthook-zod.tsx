"use client";
import { TSignUpSchema, signUpSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const FormWithReactHookFormWithZod = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TSignUpSchema>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: TSignUpSchema) => {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      // response status is not 2xx
      alert("Submitting form failed");
      return;
    }

    const responseData = await response.json();
    console.log(responseData);
    if (responseData.errors) {
      const errors = responseData.errors;
      if (errors.email) {
        setError("email", {
          type: "server",
          message: errors.email,
        });
      } else if (errors.email) {
        setError("password", {
          type: "server",
          message: errors.password,
        });
      } else if (errors.confirmPassword) {
        setError("confirmPassword", {
          type: "server",
          message: errors.confirmPassword,
        });
      } else {
        alert("Something went wrong");
      }
    }

    // reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <h1>Form with react-hook-form and Zod</h1>

      <input
        {...register("email")}
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
        {...register("confirmPassword")}
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

export default FormWithReactHookFormWithZod;
