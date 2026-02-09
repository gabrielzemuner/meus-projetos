import { categoriesData } from "@/data/courses";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Bem-vindo! 👋</h1>
      
      <p className="text-zinc-400 mb-8">
        Escolha uma categoria para começar a aprender
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesData.map((category) => (
          <Link
            key={category.id}
            href={`/${category.slug}/trilhas`}
            className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 hover:border-blue-600 transition-colors"
          >
            <h2 className="text-xl font-bold mb-2">{category.name}</h2>
            <p className="text-zinc-400 text-sm mb-4">
              {category.description}
            </p>
            <div className="text-blue-500 text-sm font-medium">
              Ver trilhas →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}