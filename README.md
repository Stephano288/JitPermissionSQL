# JitPermissionSQL
Just In Time Permission for SQL Server

Disclaimer: 
This simple application is my way to learn more about Angular and Asp.net Core.
I'm not a developer, so don''t expct awsome code.

The project is useful to achive a common DBA task: provide permission and even more important remeber remove the very same permission.

You just have to connect to your SQL Server ( SQL Server 2008+), choose the login, the role and a timeframe where the permission will be valid. 
JitPermissionSQL will take care of the boring stuff for you.

The application is leveraging on SQL Server Agent Jobs. Cannot work if your enviroment don''t have SQL Server Agent service up and running.

