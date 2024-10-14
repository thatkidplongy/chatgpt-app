"use client";

import Link from "next/link";
import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Oops! Something went wrong.</h1>
      <p>We couldn&apos;t find the page you were looking for.</p>
      <Link href="/">Go back to the homepage</Link>
    </div>
  );
};

export default ErrorPage;
