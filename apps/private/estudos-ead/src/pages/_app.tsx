import AppLayout from "@/layouts/AppLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Escolha os pesos que vai usar
  variable: "--font-poppins", // Variável CSS
  display: "swap", // Melhora performance
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Páginas que NÃO devem ter o layout (ex: login, landing page)
  const noLayoutPages = ["/login", "/cadastro"];
  const useLayout = !noLayoutPages.includes(router.pathname);

  // Se a página precisa de layout, envolve com MainLayout
  if (useLayout) {
    return (
      <div className={poppins.className}>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </div>
    );
  }

  // Páginas sem layout
  return <Component {...pageProps} />;
}
