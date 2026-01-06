import type { HTMLAttributes, ReactNode } from 'react';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'elevated' | 'bordered';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    children: ReactNode;
}

export function Card({
    variant = 'elevated',
    padding = 'md',
    className = '',
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={`card card-${variant} card-padding-${padding} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function CardHeader({ className = '', children, ...props }: CardHeaderProps) {
    return (
        <div className={`card-header ${className}`} {...props}>
            {children}
        </div>
    );
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function CardBody({ className = '', children, ...props }: CardBodyProps) {
    return (
        <div className={`card-body ${className}`} {...props}>
            {children}
        </div>
    );
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export function CardFooter({ className = '', children, ...props }: CardFooterProps) {
    return (
        <div className={`card-footer ${className}`} {...props}>
            {children}
        </div>
    );
}
