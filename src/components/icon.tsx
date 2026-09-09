import { icons, type LucideProps } from "lucide-react";

function toPascalCase(name: string) {
  return name
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join("");
}

type IconProps = LucideProps & {
  name?: string;
};

export function Icon({ name, ...props }: IconProps) {
  if (!name) return null;
  const Component = icons[toPascalCase(name) as keyof typeof icons];
  if (!Component) return null;
  return <Component {...props} />;
}
