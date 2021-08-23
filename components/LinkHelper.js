import { useRouter } from "next/router";

function LinkHelper({ children, href }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/?page=${href}`);
    console.log("hello");
  };

  return (
    <span href={href} onClick={handleClick}>
      {children}
    </span>
  );
}

export default LinkHelper;
