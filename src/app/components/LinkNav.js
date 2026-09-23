import Link from "next/link";

export default function LinkNav({ href, children }) {
  return (
    <Link href={href} className="text-white no-underline hover:text-verde-menta">
  {children}
</Link>
  );
}