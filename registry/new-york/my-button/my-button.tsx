import * as React from 'react';

interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline';
}

export function MyButton({
  variant = 'default',
  className,
  ...props
}: MyButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-md px-10 py-2 cursor-pointer text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants: Record<string, string> = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    outline: 'border border-input bg-blue-500 text-white hover:bg-blue-400',
  };

  return (
    <button
      className={[base, variants[variant], className].filter(Boolean).join(' ')}
      {...props}
    />
  );
}
