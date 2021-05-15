export enum ChevronDirection {
  UP,
  DOWN,
}

interface Props {
  direction: ChevronDirection;
  color?: string;
  className?: string;
}

export default function ChevronIcon({ direction, color = "#002233", className}: Props) {
  const chevronPath = () => {
    switch (direction) {
        case ChevronDirection.UP:
          return "M9.99997 5C9.67737 5 9.35482 5.12005 9.10887 5.35964L1.36926 12.9028C0.876915 13.3826 0.876915 14.1606 1.36926 14.6403C1.8614 15.1199 2.65948 15.1199 3.15186 14.6403L9.99997 7.96565L16.8481 14.64C17.3405 15.1197 18.1385 15.1197 18.6306 14.64C19.1231 14.1604 19.1231 13.3824 18.6306 12.9026L10.8911 5.3594C10.645 5.11978 10.3224 5 9.99997 5Z";
        case ChevronDirection.DOWN:
          return "M10 15C10.3226 15 10.6452 14.88 10.8911 14.6404L18.6307 7.09719C19.1231 6.61736 19.1231 5.83938 18.6307 5.35973C18.1386 4.88009 17.3405 4.88009 16.8481 5.35973L10 12.0343L3.15188 5.35997C2.65954 4.88032 1.86154 4.88032 1.36943 5.35997C0.876856 5.83961 0.876855 6.61759 1.36943 7.09743L9.10892 14.6406C9.35499 14.8802 9.67755 15 10 15Z";
    }
  };

  return (
    <svg width="20" height="20" className={className ?? ""}>
        <path d={chevronPath()} fill={color} />
    </svg>

  );
}