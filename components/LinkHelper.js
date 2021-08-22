import { useRouter } from "next/router";

function LinkHelper({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/?page=${href}`);
  };

  return (
    <a href={href} onClick={handleClick}>
      {children}
    </a>
  );
}

export default LinkHelper;
