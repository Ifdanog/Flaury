import React, { useState } from "react";
import BSignupInfo from "./BSignupInfo";
import BSignupCategory from "./BSignupCategory";
import BSignupVerify from "./BSignupVerify";

const BSignup = () => {
  const [page, setPage] = useState("");

  return (
    <div>
      {page === "category" ? (
        <BSignupCategory setPage={setPage} />
      ) : page === "verification" ? (
        <BSignupVerify />
      ) : (
        <BSignupInfo setPage={setPage} />
      )}
    </div>
  );
};

export default BSignup;
