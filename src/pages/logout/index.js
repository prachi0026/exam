import { useEffect } from "react";
import Layout from "../layout";

const Logout = () => {
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
      },
    });
  }, []);
  return (
    <>
      <Layout>
        <h1>Logout pages</h1>
      </Layout>
    </>
  );
};
export default Logout;
