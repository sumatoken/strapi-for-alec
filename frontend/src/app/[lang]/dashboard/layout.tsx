import "../globals.css";
import { i18n } from "../../../../i18n-config";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {

  return (
    <main className="dark:bg-black dark:text-gray-100 min-h-screen">
      {children}
    </main>
  );
}
