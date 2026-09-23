import Link from "next/link";

export default function BotonNav({ href, children }) {
  return (
    <Link href={href} className="border border-verde-menta text-verde-menta no-underline px-4 py-2 rounded-full hover:bg-verde-menta hover:text-verde-oscuro" >
      {children}
    </Link>
  );
}