require("dotenv").config();

/**
 *
 * extra supporting file for the dotenv file
 * so the custom search api key
 * can easily be protected and is used
 * all over the app without
 * any issue
 *
 * module.exports does that for dot env
 * exa = config.API_KEY
 *
 */

export const api_key = process.env.REACT_APP_API_KEY;
export const context_key = process.env.REACT_APP_CONTEXT_KEY;
export const auth_domain = process.env.REACT_APP_AUTH_DOMAIN;
export const database_url = process.env.REACT_APP_DATABASE_URL;
export const project_id = process.env.REACT_APP_PROJECT_ID;
export const storage_bucket = process.env.REACT_APP_STORAGE_BUCKET;
export const messaging_sender = process.env.REACT_APP_MESSAGING_SENDER;
export const app_id = process.env.REACT_APP_APP_ID;
export const measurement_id = process.env.REACT_APP_MEASUREMENT_ID;
