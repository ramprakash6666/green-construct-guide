// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://wlgkhwcbcjueedtwkpcr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndsZ2tod2NiY2p1ZWVkdHdrcGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDczOTg2NDEsImV4cCI6MjA2Mjk3NDY0MX0.7iZJStEg5fXE7-QVdJizg3_RfqFJlA8rDsJNxjeLPj0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);