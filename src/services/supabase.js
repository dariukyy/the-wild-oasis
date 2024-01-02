import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://odbflbbcbcelqgvhrdym.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9kYmZsYmJjYmNlbHFndmhyZHltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI1ODY2MTMsImV4cCI6MjAxODE2MjYxM30.khM2IefT6XjiBtlqn9dZNHe9QRpKHvgf7p_NbGx-Lyo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
