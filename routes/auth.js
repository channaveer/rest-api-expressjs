const express = require("express");
const Route = express.Router();

/** Includes */
const RegisterController = require(`${BASE_URL}/controllers/Auth/RegisterController.js`);
const EmailVerificationController = require(`${BASE_URL}/controllers/Auth/EmailVerificationController.js`);
const LoginController = require(`${BASE_URL}/controllers/Auth/LoginController.js`);
const ForgotPasswordController = require(`${BASE_URL}/controllers/Auth/ForgotPasswordController.js`);
const ResetPasswordController = require(`${BASE_URL}/controllers/Auth/ResetPasswordController.js`);

/** Auth Routes */
Route.post("/register", RegisterController.register);
Route.post("/account-verification", EmailVerificationController.accountVerification);
Route.post("/authenticate", LoginController.authenticate);
Route.post("/forgot-password", ForgotPasswordController.forgotPassword);
Route.post("/verify-reset-password", ResetPasswordController.verifyResetPassword);
Route.patch("/reset-password", ResetPasswordController.resetPassword);

module.exports = Route;
