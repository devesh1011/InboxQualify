import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://oykoitebvumwpzkupury.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95a29pdGVidnVtd3B6a3VwdXJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM5NzQzNDEsImV4cCI6MjA2OTU1MDM0MX0.y_XMrTXEl2BU6IT4TQ2u7GDpLwpT0MyQpfB30vovh_U";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
