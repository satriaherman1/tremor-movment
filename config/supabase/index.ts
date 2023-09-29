import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lhdqbmyuedptdgkcaorg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoZHFibXl1ZWRwdGRna2Nhb3JnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3NTU5MjMsImV4cCI6MjAxMDMzMTkyM30.qLNY7Rg1blMcyKTAXoAlylAY52XzK8H--LGLYsskQ88";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
