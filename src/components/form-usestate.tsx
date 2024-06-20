"use client";
import React, { useState } from "react";

type Props = {};

const FormUseState = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (password !== confirmPassword) {
      setErrors(["Password and confirm password must match"]);
      setIsSubmitting(false);
      return;
    }
    // TODO: submit to server
    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });

    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setIsSubmitting(false);
  };

  return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <h1>Form only with useState</h1>

        {errors.length > 0 && (
          <ul>
            {errors.map((error) => (
              <li
                key={error}
                className="bg-red-100 text-red-500 px-4 py-2 rounded"
              >
                {error}
              </li>
            ))}
          </ul>
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
          maxLength={50}
          placeholder="Email"
          className="px-4 py-2 rounded"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
          className="px-4 py-2 rounded"
        />
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          required
          placeholder="Password"
          className="px-4 py-2 rounded"
        />
        <button
          type="submit"
          className="enabled:bg-blue-500 py-2 rounded disabled:bg-gray-500"
          disabled={isSubmitting}
        >
          Submit
        </button>
      </form>
  );
};

export default FormUseState;
