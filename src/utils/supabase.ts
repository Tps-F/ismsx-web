import { createClient } from "@supabase/supabase-js";

const supabase_url = process.env.GATSBY_SUPABASE_PROJECT_URL || "";
const supabase_key = process.env.GATSBY_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabase_url, supabase_key);
