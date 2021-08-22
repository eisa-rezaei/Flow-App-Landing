// import { useRouter } from "next/router";

function LinkHelper({ children, href }) {
  // const router = useRouter();

  const handleClick = () => {
    // router.push(`/?page=${href}`);
    console.log("href : ", href);
  };

  return (
    <span href={href} onClick={handleClick}>
      {children}
    </span>
  );
}

export default LinkHelper;
