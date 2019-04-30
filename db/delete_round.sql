DELETE FROM rounds
WHERE round_id = $1;
select * from rounds
where course_id = $2 and users_id = $3;
