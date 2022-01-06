/* Get all of the students that don't have an email or phone number.

Get their name, id, and cohort_id.*/

SELECT id, name, cohort_id 
FROM students
WHERE email IS NULL OR phone IS NULL; 