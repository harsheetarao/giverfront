interface FooterProps {
  copyrightText: string;
  additionalContent?: React.ReactNode;
}

export const Footer = ({ copyrightText, additionalContent }: FooterProps) => {
  return (
    <footer className="w-full bg-[#4B7163] text-white py-6 mt-auto">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center">{copyrightText}</p>
        {additionalContent && <div className="mt-4">{additionalContent}</div>}
      </div>
    </footer>
  );
}; 