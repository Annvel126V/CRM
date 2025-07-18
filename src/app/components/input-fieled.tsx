'use client';

import React from 'react';
import { Field } from 'formik';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  as?: 'input' | 'select' | 'textarea';
  children?: React.ReactNode;
  name: string;
  id?: string;
}

export default function InputField({
  label,
  id,
  name,
  as = 'input',
  children,
  ...rest
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id || name} className="mb-2 text-base text-gray-900">
          {label}
        </label>
      )}
      <Field
        as={as}
        name={name}
        id={id || name}
        className="p-3 h-11 text-sm rounded border border-gray-300 shadow"
        {...rest}
      >
        {children}
      </Field>
    </div>
  );
}
