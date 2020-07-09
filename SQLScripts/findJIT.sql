WITH granted (JobName , Grantcommand , FromDate)
AS
(
SELECT  LEFT(j.name,36) , command ,   CONVERT(DATETIME, CONVERT(CHAR(8),  jsc.next_run_date, 112))
FROM 
msdb.dbo.sysjobs j
INNER JOIN msdb.dbo.sysjobsteps jst ON j.job_id=jst.job_id
INNER JOIN msdb.dbo.sysjobschedules jsc ON j.job_id=jsc.job_id
WHERE j.description = 'JIT Permission' AND jst.step_id=1 AND step_name='Grant Permission'
),
revoked (JobName , Revokecommand , ToDate)
AS
(
SELECT  LEFT(j.name,36) , command ,   CONVERT(DATETIME, CONVERT(CHAR(8),  jsc.next_run_date, 112))
FROM 
msdb.dbo.sysjobs j
INNER JOIN msdb.dbo.sysjobsteps jst ON j.job_id=jst.job_id
INNER JOIN msdb.dbo.sysjobschedules jsc ON j.job_id=jsc.job_id
WHERE j.description = 'JIT Permission' AND jst.step_id=1 AND step_name='Revoke Permission'
)


SELECT g.JobName ,  g.Grantcommand , g.FromDate , r.ToDate FROM granted g INNER JOIN revoked r ON g.JobName=r.JobName