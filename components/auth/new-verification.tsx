"use client";

import { newVerification } from "@/actions/auth/new-verification";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import ErrorAlert from "./error-alert";
import SucessAlert from "./success-alert";

export const NewVerificationForm = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>("");
  const [successMessage, setSuccessMessage] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (successMessage || errorMessage) {
      return;
    }

    if (!token) {
      setErrorMessage("Missing Token");
      return;
    }

    newVerification(token)
      .then((data) => {
        setSuccessMessage(data.success);
        setErrorMessage(data.error);
      })
      .catch(() => {
        setErrorMessage("Something went wrong!");
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex justify-center items-center">
      {!successMessage && !errorMessage ? (
        <BeatLoader />
      ) : (
        <>
          <SucessAlert message={successMessage} />
          <ErrorAlert message={errorMessage} />
        </>
      )}
    </div>
  );
};