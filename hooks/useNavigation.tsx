// Create a react hook that returns the navigation component

// Path: hooks/useNavigation.tsx
import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { useCallback } from 'react';

export default function useNavigation() {
  const navigation = useMemo(() => {
    return [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Contact', href: '/contact' },
      { name: 'Blog', href: '/blog' },
    ];
  }, []);

  const pathname = usePathname();
  const isCurrentPathname = useCallback(
    (href: string) => {
      return pathname === href;
    },
    [pathname]
  );

  return {
    isCurrentPathname,
    navigation,
  };
}
