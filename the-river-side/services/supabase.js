import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rbczuqzxjazxjmqzamsl.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJiY3p1cXp4amF6eGptcXphbXNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNTUyMjQsImV4cCI6MjA0MDgzMTIyNH0.6XxFGPYM2hNFu6-ln-a1_UM4T7nDC4J_CijuRkRHTxs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
