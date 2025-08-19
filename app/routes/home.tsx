import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "pupporama" },
    { name: "description", content: "Meet our Puppies!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
