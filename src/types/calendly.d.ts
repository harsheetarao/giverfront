interface Window {
  Calendly?: {
    initInlineWidget: (config: {
      url: string;
      parentElement: HTMLElement | null;
      prefill?: Record<string, any>;
      utm?: Record<string, any>;
    }) => void;
  };
} 