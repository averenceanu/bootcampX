const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const cohortsName = process.argv[2] || 'JUL02';
const values = [`%${cohortsName}`];

pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers 
JOIN assistance_requests ON teachers.id = teacher_id 
JOIN students ON students.id = student_id 
JOIN cohorts ON cohorts.id = cohort_id 
WHERE cohorts.name LIKE $1
ORDER BY teachers.name;
`, values)
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
})
.catch(err => console.error('query error', err.stack));