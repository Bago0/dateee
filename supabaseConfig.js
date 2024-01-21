import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://sstiqryimnbynzdbjrrf.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzdGlxcnlpbW5ieW56ZGJqcnJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTA2MzksImV4cCI6MjAyMTQyNjYzOX0.3MmWGVOOo_4J5MJEBIN8QgSeSotT3Dei6lhbvMG9cDA'

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase