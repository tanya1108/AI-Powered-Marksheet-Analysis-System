import React from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vlklrsmliojbkvozckel.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsa2xyc21saW9qYmt2b3pja2VsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg0OTA4NzgsImV4cCI6MjAwNDA2Njg3OH0.bMzvdn2FZqC6b2mGwNaovonB5KlcrrB78e6WRqpr95s";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
