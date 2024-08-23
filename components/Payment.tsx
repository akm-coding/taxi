import { View, Text } from "react-native";
import React from "react";
import { PaymentProps } from "@/types/type";
import CustomButton from "./CustomButton";

const Payment = ({}: PaymentProps) => {
  const onPaymentSheet = async () => {};

  return (
    <>
      <CustomButton
        title="Confirm Ride"
        className="my-10"
        onPress={onPaymentSheet}
      />
    </>
  );
};

export default Payment;
