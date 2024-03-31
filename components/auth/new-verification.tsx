"use client";

import { newVerification } from "@/actions/auth/new-verification";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import ErrorAlert from "./error-alert";
import SuccessAlert from "./success-alert";

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
  }, [token, errorMessage, successMessage]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="flex items-center justify-center">
      {!successMessage && !errorMessage ? (
        <BeatLoader />
      ) : (
        <>
          <SuccessAlert message={successMessage} />
          <ErrorAlert message={errorMessage} />
        </>
      )}
    </div>
  );
};
