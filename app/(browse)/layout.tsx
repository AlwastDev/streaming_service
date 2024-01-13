import React, { Suspense } from 'react';
import NavBar from './_components/Navbar';
import Container from './_components/Container';
import { Sidebar, SidebarSkeleton } from './_components/Sidebar';

const BrowseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="flex h-full pt-20">
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
