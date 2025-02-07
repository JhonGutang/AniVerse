// components/PasswordInput.tsx
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

interface PasswordInputProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ name, value, onChange, required = false }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-full">
      <label htmlFor={name} className="mb-1 block">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      <div className="relative">
        <input
          type={showPassword ? 'text' : 'password'}
          name={name}
          id={name}
          value={value}
          onChange={onChange}
          className="border-2 border-black h-[50px] w-full p-2 px-4 rounded-md"
          required={required}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black"
        >
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
