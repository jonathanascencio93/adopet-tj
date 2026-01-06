import type { InputHTMLAttributes, ReactNode } from 'react';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    helperText?: string;
    error?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    inputSize?: 'sm' | 'md' | 'lg';
}

export function Input({
    label,
    helperText,
    error,
    leftIcon,
    rightIcon,
    inputSize = 'md',
    className = '',
    id,
    ...props
}: InputProps) {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = Boolean(error);

    return (
        <div className="input-wrapper">
            {label && (
                <label htmlFor={inputId} className="input-label">
                    {label}
                </label>
            )}

            <div className={`input-container input-${inputSize} ${hasError ? 'input-error' : ''}`}>
                {leftIcon && <span className="input-icon-left">{leftIcon}</span>}

                <input
                    id={inputId}
                    className={`input ${className}`}
                    aria-invalid={hasError}
                    aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
                    {...props}
                />

                {rightIcon && <span className="input-icon-right">{rightIcon}</span>}
            </div>

            {error && (
                <p id={`${inputId}-error`} className="input-message input-error-text">
                    {error}
                </p>
            )}

            {!error && helperText && (
                <p id={`${inputId}-helper`} className="input-message input-helper-text">
                    {helperText}
                </p>
            )}
        </div>
    );
}
