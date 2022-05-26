# JitPermissionSQL
Just In Time Permission for SQL Server

# Disclaimer: 
This simple application is my way to learn more about Angular and Asp.net Core.
I'm not a developer, so don't expect awsome code.

The project is useful to achive a common DBA task: provide permission and even more important remeber remove the very same permission when is not needed anymore.

You just have to connect to your SQL Server ( SQL Server 2012+), choose the login, the role and a timeframe where the permission will be valid. 
JitPermissionSQL will take care of the boring stuff for you.

The application is leveraging on SQL Server Agent Jobs. Cannot work if your enviroment don't have SQL Server Agent service up and running.


# Security and scalability:
Always use https to comunicate between client and server, especially if you're running client and server on different computers. 
A self-signed certificate is not the best solution but it's better than nothing.
You are sending a credential and you want to encrypt the communication channel.

Said that: in header request, after the first connection, it's always included the complete connection string. 
I don't like to have the password in clear text on the client after the authentication. 
The connection string is encrypted /decrypted server side with a randome key, even if the channel is protected.
The implementation of the key is far from a good way to do encryption, again is just to avoid a clear text password. 
Another problem is that the server is not completly restful and scalability is not possible. Due to the nature of the application I think this is acceptable.
In a future version of the tool I will add the option to not encrypt and implement encryption in a secure way.
