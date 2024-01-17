import React from 'react';
import { redirect } from 'next/navigation';

import { getSelfByUsername } from '@/lib/auth-service';
import { NavBar } from './_components/Navbar';
import { Sidebar } from './_components/Sidebar';
import { Container } from './_components/Container';

interface CreatorLayoutProps {
  params: { username: string };
  children: React.ReactNode;
}

export default async function CreatorLayout({ children, params }: CreatorLayoutProps) {
  const self = await getSelfByUsername(params.username);

  if (!self) {
    redirect('/');
  }

  return (
    <>
      <NavBar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </>
  );
}
