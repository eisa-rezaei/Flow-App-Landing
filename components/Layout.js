import Head from "next/head";
import NavBar from "./navBar/NavBar";
import { GlobalStyle } from "./globalStyle";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Flow app landing</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      <GlobalStyle />
      {children}
    </>
  );
};
export default Layout;
