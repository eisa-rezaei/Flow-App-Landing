import { useRouter } from "next/router";

function LinkHelper({ children, href }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`/?page=${href}`);
  };

  return (
    <span href={href} onClick={handleClick}>
      {children}
    </span>
  );
}

export default LinkHelper;
