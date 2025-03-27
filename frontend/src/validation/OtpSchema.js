
import * as Yup from "yup";

export const otpSchema = Yup.object().shape({
  otp: Yup.string()
    .matches(/^[0-9]{6}$/, "OTP must be exactly 6 digits")
    .required("OTP is required"),
});