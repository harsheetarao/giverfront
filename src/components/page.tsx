'use client';

interface PageProps {
  children: React.ReactNode;
}

export const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {children}
    </div>
  );
};
