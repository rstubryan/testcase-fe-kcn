"use client";

import { useState } from "react";
import Link from "next/link";
import { InputForm } from "@/components/molecules/input-form/input-form";
import { Typography } from "@/components/atoms/typography/typography";
import { Button } from "@/components/atoms/button/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/atoms/card/card";

export function RegisterForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!formValues.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formValues.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Email is invalid";
    }

    if (!formValues.password) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSubmittedData({ ...formValues });
      setFormValues({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <InputForm
          id="name"
          label="Name"
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          className={formErrors.name ? "has-error" : ""}
          inputClassName={formErrors.name ? "border-red-500" : ""}
        />
        {formErrors.name && (
          <Typography size="sm" variant="destructive" className="mt-1">
            {formErrors.name}
          </Typography>
        )}

        <InputForm
          id="email"
          label="Email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleChange}
          className={formErrors.email ? "has-error" : ""}
          inputClassName={formErrors.email ? "border-red-500" : ""}
        />
        {formErrors.email && (
          <Typography size="sm" variant="destructive" className="mt-1">
            {formErrors.email}
          </Typography>
        )}

        <InputForm
          id="password"
          label="Password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChange}
          className={formErrors.password ? "has-error" : ""}
          inputClassName={formErrors.password ? "border-red-500" : ""}
        />
        {formErrors.password && (
          <Typography size="sm" variant="destructive" className="mt-1">
            {formErrors.password}
          </Typography>
        )}

        <Button type="submit" variant="primary" fullWidth className={"mt-4"}>
          Register
        </Button>
      </form>

      {submittedData && (
        <Card className="mt-8" variant="secondary">
          <CardHeader>
            <CardTitle>Submitted Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>
                <strong>Name:</strong> {submittedData.name}
              </p>
              <p>
                <strong>Email:</strong> {submittedData.email}
              </p>
              <p className="flex items-center gap-2">
                <strong>Password:</strong>{" "}
                <span className="flex-1">
                  {showPassword
                    ? submittedData.password
                    : submittedData.password.replace(/./g, "•")}
                </span>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-eye-icon lucide-eye hover:cursor-pointer"
                    >
                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-eye-off-icon lucide-eye-off hover:cursor-pointer"
                    >
                      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49" />
                      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242" />
                      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143" />
                      <path d="m2 2 20 20" />
                    </svg>
                  )}
                </button>
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="mt-4 text-center">
        <Link href="/" className="text-blue-600 hover:underline inline-block">
          Back to Home
        </Link>
      </div>
    </>
  );
}

export default RegisterForm;
