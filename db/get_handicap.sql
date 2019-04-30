select trunc(avg(score-72),0) as avg from rounds
where users_id = $1;
