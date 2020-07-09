


--DECLARE @login_name NVARCHAR(150) ='login'
--DECLARE @role_name NVARCHAR(150) ='sysadmin'
--DECLARE @start datetime = '2020-06-22'
--DECLARE @finish datetime = '2020-06-23'




DECLARE @JobName1 NVARCHAR(41)  = NEWID()
DECLARE @JobName2 NVARCHAR(41)  
DECLARE @SchedName1 NVARCHAR(40)
DECLARE @SchedName2 NVARCHAR(40)
DECLARE @JobId BINARY(16)
DECLARE @schedule_id int
DECLARE @sql NVARCHAR(MAX)
DECLARE @StartDate NVARCHAR(8)
DECLARE @StartTime NVARCHAR(6)
DECLARE @FinishDate NVARCHAR(8)
DECLARE @FinishTime NVARCHAR(6)


SET @JobName1=@JobName1+'_GJIT'
SET @JobName2=@JobName1+'_RJIT'
SET @SchedName1=@JobName2+'_JIT'
SET @SchedName2=@JobName2+'_JIT'
SET @StartDate=convert(NVARCHAR(8),@start,112)
SET @StartTime='000000'
SET @FinishDate=convert(NVARCHAR(8),@finish,112)
SET @FinishTime='000000'

--controls
IF NOT EXISTS (select 1 from sys.server_principals where name=@login_name)
	THROW  51000 , 'No login found' ,1
IF NOT EXISTS (select 1 from sys.server_principals where name=@role_name)
	THROW 51001 , 'No Role Found' , 1


--ADD PERMISSION JOB

 
EXEC  msdb.dbo.sp_add_job @job_name=@JobName1, 
		@enabled=1, 
		@notify_level_eventlog=0, 
		@notify_level_email=2, 
		@notify_level_page=2, 
		@delete_level=0, 
		@category_name=N'[Uncategorized (Local)]', 
		@owner_login_name=N'sa' 



EXEC msdb.dbo.sp_add_jobserver @job_name=@JobName1, @server_name = @@SERVERNAME

set @sql='ALTER SERVER ROLE ' + QUOTENAME(@role_name) + ' ADD MEMBER ' + QUOTENAME(@login_name)
EXEC msdb.dbo.sp_add_jobstep @job_name=@JobName1, @step_name=N'Add Permission', 
		@step_id=1, 
		@cmdexec_success_code=0, 
		@on_success_action=3, 
		@on_fail_action=2, 
		@retry_attempts=0, 
		@retry_interval=0, 
		@os_run_priority=0, @subsystem=N'TSQL', 
		@command=@sql, 
		@database_name=N'master', 
		@flags=0

set @sql='EXEC msdb.dbo.sp_delete_job @job_name=N'+QUOTENAME(@JobName1,'''')+', @delete_unused_schedule=1'
EXEC msdb.dbo.sp_add_jobstep @job_name=@JobName1, @step_name=N'Drop Job', 
		@step_id=2, 
		@cmdexec_success_code=0, 
		@on_success_action=1, 
		@on_fail_action=2, 
		@retry_attempts=0, 
		@retry_interval=0, 
		@os_run_priority=0, @subsystem=N'TSQL', 
		@command=@sql, 
		@database_name=N'master', 
		@flags=0
 EXEC msdb.dbo.sp_update_job @job_name=@JobName1, 
		@enabled=1, 
		@start_step_id=1, 
		@notify_level_eventlog=0, 
		@notify_level_email=2, 
		@notify_level_page=2, 
		@delete_level=0, 
		@description=N'', 
		@category_name=N'[Uncategorized (Local)]', 
		@owner_login_name=N'sa', 
		@notify_email_operator_name=N'', 
		@notify_page_operator_name=N''


EXEC msdb.dbo.sp_add_jobschedule @job_name=@JobName1, @name=@SchedName1, 
		@enabled=1, 
		@freq_type=1, 
		@freq_interval=1, 
		@freq_subday_type=0, 
		@freq_subday_interval=0, 
		@freq_relative_interval=0, 
		@freq_recurrence_factor=1, 
		@active_start_date=@StartDate, 
		@active_end_date=99991231, 
		@active_start_time=@StartTime, 
		@active_end_time=235959 








 --REMOVE PERMISSION JOB
 EXEC  msdb.dbo.sp_add_job @job_name=@JobName2, 
		@enabled=1, 
		@notify_level_eventlog=0, 
		@notify_level_email=2, 
		@notify_level_page=2, 
		@delete_level=0, 
		@category_name=N'[Uncategorized (Local)]', 
		@owner_login_name=N'sa' 



EXEC msdb.dbo.sp_add_jobserver @job_name=@JobName2, @server_name = @@SERVERNAME

set @sql='ALTER SERVER ROLE ' + QUOTENAME( @role_name )+ ' DROP MEMBER' + QUOTENAME(@login_name)
EXEC msdb.dbo.sp_add_jobstep @job_name=@JobName2, @step_name=N'Revoke Permission', 
		@step_id=1, 
		@cmdexec_success_code=0, 
		@on_success_action=3, 
		@on_fail_action=2, 
		@retry_attempts=0, 
		@retry_interval=0, 
		@os_run_priority=0, @subsystem=N'TSQL', 
		@command=@sql, 
		@database_name=N'master', 
		@flags=0


set @sql='EXEC msdb.dbo.sp_delete_job @job_name=N'+QUOTENAME(@JobName2,'''')+', @delete_unused_schedule=1'
EXEC msdb.dbo.sp_add_jobstep @job_name=@JobName2, @step_name=N'Drop Job', 
		@step_id=2, 
		@cmdexec_success_code=0, 
		@on_success_action=1, 
		@on_fail_action=2, 
		@retry_attempts=0, 
		@retry_interval=0, 
		@os_run_priority=0, @subsystem=N'TSQL', 
		@command=@sql, 
		@database_name=N'master', 
		@flags=0
 EXEC msdb.dbo.sp_update_job @job_name=@JobName2, 
		@enabled=1, 
		@start_step_id=1, 
		@notify_level_eventlog=0, 
		@notify_level_email=2, 
		@notify_level_page=2, 
		@delete_level=0, 
		@description=N'', 
		@category_name=N'[Uncategorized (Local)]', 
		@owner_login_name=N'sa', 
		@notify_email_operator_name=N'', 
		@notify_page_operator_name=N''


EXEC msdb.dbo.sp_add_jobschedule @job_name=@JobName2, @name=@SchedName2, 
		@enabled=1, 
		@freq_type=1, 
		@freq_interval=1, 
		@freq_subday_type=0, 
		@freq_subday_interval=0, 
		@freq_relative_interval=0, 
		@freq_recurrence_factor=1, 
		@active_start_date=@FinishDate, 
		@active_end_date=99991231, 
		@active_start_time=@FinishTime, 
		@active_end_time=235959 



DECLARE @result TABLE (jobguid nvarchar(max))
INSERT INTO @result VALUES (@JobName1)
INSERT INTO @result VALUES (@JobName2)

SELECT jobguid FROM @result

