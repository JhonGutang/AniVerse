"use client";

import React, { useState } from "react";
import PasswordInput from "@/components/auth/PasswordInput";
import { loginUser, getUserDataFromLocal } from "@/services/userService";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import AuthLayout from "@/layouts/authLayout";
import Snackbar from "@/components/Snackbar";

interface LoginProps {
  toggleHandler: (auth: string) => void;
}

const Login: React.FC<LoginProps> = ({ toggleHandler }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const router = useRouter();
  const backgroundImage =
    "https://i.pinimg.com/736x/fb/7f/ec/fb7fec8ebd2caf9a96d39e6a9d1acaae.jpg";
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    toggleHandler("register");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(formData);
    setSnackbar({ open: true, message: "Logged in successfully!" });
    setTimeout(() => {
      console.log('data',  getUserDataFromLocal());
      router.push("/home");
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <AuthLayout imageLink={backgroundImage}>
      <div className="text-black text-xl font-semibold mb-4">Login</div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full max-w-xs text-black text-sm"
      >
        <div className="w-full">
          <label htmlFor="username" className="mb-1 block">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="border-2 border-black h-12 w-full p-2 px-4 mb-3 rounded-md"
            required
          />
        </div>
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={handleChange}
          required={true}
        />
        <div className="text-sm text-black mt-2 flex justify-end w-full">
          <button type="button" className="text-red-400">
            Forgot Password?
          </button>
        </div>
        <button
          type="submit"
          className="bg-green-600 text-white p-3 w-full rounded-full mt-7 hover:bg-green-800 focus:outline-none"
        >
          Login
        </button>
        <Button onClick={handleToggle} className="mt-4">
          Register
        </Button>
      </form>
      <Snackbar
        open={snackbar.open}
        message={snackbar.message}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
};

export default Login;
