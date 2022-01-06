SELECT cohorts.name as cohort_name, count(assignment_submissions.*) as total_submissions
FROM cohorts 
JOIN students ON cohort_id = cohorts.id
JOIN assignment_submissions ON students.id = student_id 
GROUP BY cohort_name
ORDER BY total_submissions DESC
