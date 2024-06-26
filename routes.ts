/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const PUBLIC_ROUTES: string[] = [
  "/",
  "/about",
  "/auth/new-verification",
];

/**
 * An array of extended routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const EXTENDED_PUBLIC_ROUTES: string[] = ["/blog"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */
export const AUTH_ROUTES: string[] = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API authentication purposes
 * @type {string}
 */
export const API_AUTH_PREFIX: string = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/settings";
