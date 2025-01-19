import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ivyjqvydorsgucqraiuw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2eWpxdnlkb3JzZ3VjcXJhaXV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0NDM3MzUsImV4cCI6MjA1MjAxOTczNX0.1-QMzndUOwC1BAJDRMcX_UvAwkPpdy3vM_kc2VZYQDo';

export const supabase = createClient(supabaseUrl, supabaseAnonKey); // Exportação nomeada