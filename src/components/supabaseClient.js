import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://zitffvdoeintnjoylwon.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InppdGZmdmRvZWludG5qb3lsd29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDMwMTUyMzksImV4cCI6MjAxODU5MTIzOX0.w0wiIOHhTt7bHPg9THH_F-mVXzAHUT9W0wISyUjjSLg";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
