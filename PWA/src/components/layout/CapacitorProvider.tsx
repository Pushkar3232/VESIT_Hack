'use client';

import { useCapacitor } from '@/hooks/useCapacitor';

export default function CapacitorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isNative } = useCapacitor();

  return (
    <div className={isNative ? 'capacitor-app' : 'web-app'}>
      {children}
    </div>
  );
}
