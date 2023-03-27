"use client";
import React from "react";

export default function Page({ params }) {
  const ID = params.detail;

  return <div className="font-bold font-ssp text-center text-dark">{ID}</div>;
}
