SELECT sp.name AS Login 
FROM sys.server_principals sp  
WHERE sp.type  <> 'R' AND sp.name NOT LIKE '##%'
AND sp.name NOT LIKE 'NT %'