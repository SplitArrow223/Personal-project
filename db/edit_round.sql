update rounds
set score = $4, round_date = $5
where round_id = $1;
select * from rounds 
where course_id = $2 and users_id = $3;