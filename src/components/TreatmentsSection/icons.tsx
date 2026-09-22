type IconProps = {
  className?: string;
};

const shared = {
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true as const,
};

export function ToothIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared}>
      <path d="M12 4c-1.8 0-2.6 1-3.8 1S6 4 4.6 4.9C3.4 5.7 3 7.2 3 8.6c0 2 .7 3.7 1.2 5.6.4 1.6.6 4.3 1.8 4.8.9.4 1.4-1.4 1.7-2.4.3-1 .8-2.4 2.3-2.4s2 1.4 2.3 2.4c.3 1 .8 2.8 1.7 2.4 1.2-.5 1.4-3.2 1.8-4.8.5-1.9 1.2-3.6 1.2-5.6 0-1.4-.4-2.9-1.6-3.7C14 4 13.8 4 12 4Z" />
    </svg>
  );
}

export function ImplantIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared}>
      <path d="M9 4h6l-.6 3.4a2 2 0 0 1-2 1.6h-.8a2 2 0 0 1-2-1.6L9 4Z" />
      <path d="M12 9v3" />
      <path d="M9 20l1-8h4l1 8" />
      <path d="M9.5 13.5h5" />
      <path d="M9.8 16.5h4.4" />
    </svg>
  );
}

export function SparkleIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared}>
      <path d="M12 3.5c.4 2.6 1 4.2 2.1 5.3 1.1 1.1 2.7 1.7 5.3 2.1-2.6.4-4.2 1-5.3 2.1-1.1 1.1-1.7 2.7-2.1 5.3-.4-2.6-1-4.2-2.1-5.3-1.1-1.1-2.7-1.7-5.3-2.1 2.6-.4 4.2-1 5.3-2.1 1.1-1.1 1.7-2.7 2.1-5.3Z" />
    </svg>
  );
}

export function RootIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared}>
      <path d="M8.5 4c1 .8 2.1.8 3.5.8s2.5 0 3.5-.8" />
      <path d="M7.5 4.5c-.8 1.8-.8 3.4-.3 5 .4 1.3 1.1 1.6 1.4 3 .2 1.2-.2 2.1-.1 3.2.1 1.3.9 2.8 1.7 2.8s1-1.4 1-2.6c0-1 0-1.9.8-1.9s.8.9.8 1.9c0 1.2.2 2.6 1 2.6s1.5-1.5 1.7-2.8c.1-1.1-.3-2-.1-3.2.3-1.4 1-1.7 1.4-3 .5-1.6.5-3.2-.3-5" />
    </svg>
  );
}

export function RehabIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared}>
      <path d="M4 12a8 8 0 0 1 13.7-5.7" />
      <path d="M20 12a8 8 0 0 1-13.7 5.7" />
      <path d="M17.7 6.3 18 3.5l2.6 1" />
      <path d="M6.3 17.7 6 20.5l-2.6-1" />
    </svg>
  );
}

export function ScanIcon({ className }: IconProps) {
  return (
    <svg className={className} {...shared}>
      <path d="M4 8V5.5A1.5 1.5 0 0 1 5.5 4H8" />
      <path d="M16 4h2.5A1.5 1.5 0 0 1 20 5.5V8" />
      <path d="M20 16v2.5a1.5 1.5 0 0 1-1.5 1.5H16" />
      <path d="M8 20H5.5A1.5 1.5 0 0 1 4 18.5V16" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}
