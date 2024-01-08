'use client';

import { Button } from '@/components/ui/button';
import Loader from './loader';
// @ts-expect-error
import { useFormStatus } from 'react-dom';

type ButtonProps = {
  variant:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'login';
  className: string;
  text: string;
  size: 'default' | 'sm' | 'lg' | 'icon';
};

export default function SubmitButton({
  variant,
  className,
  text,
  size,
}: ButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      variant={variant}
      type='submit'
      size={size}
      disabled={pending}
      className={className}
    >
      {pending ? <Loader /> : text}
    </Button>
  );
}
