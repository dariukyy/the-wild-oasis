import { createClient } from "@supabase/supabase-js";

const envSupabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const envSupabaseURL = import.meta.env.VITE_SUPABASE_URL;
export const supabaseUrl = envSupabaseURL;
const supabaseKey = envSupabaseKey;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
