/* eslint-disable react/display-name */
"use client";
import { InputHTMLAttributes, forwardRef } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  rightIcon?: () => JSX.Element;
  leftIcon?: () => JSX.Element;
  helperText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ rightIcon, leftIcon, helperText, ...props }, ref) => {
    return (
      <div className="relative flex flex-col w-full">
        <span className="relative flex items-center">
          <input
            className={`relative border border-gray-200 p-2 w-full rounded-md focus:outline-blue-500 focus:ring-4 focus:ring-blue-200 transition ease-linear duration-100`}
            ref={ref}
            {...props}
          />
          {rightIcon && rightIcon()}
        </span>
        {helperText && (
          <p className="text-red-500 text-sm mt-1">{helperText}</p>
        )}
      </div>
    );
  }
);
