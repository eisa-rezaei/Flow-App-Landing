import { useRouter } from "next/router";
import Link from "next/link";

function LinkHelper({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.replace(`pages=${href}`);
  };

  return (
    <Link href={href} onClick={handleClick}>
      {children}
    </Link>
  );
}

export default LinkHelper;
