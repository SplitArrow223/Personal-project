insert into rounds (
  course_id,
  users_id,
  score,
  round_date
  
) values (
  $1,
  $2,
  $3,
  $4
);
select * from rounds
where course_id = $1 and users_id = $2;