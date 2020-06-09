export class ServerPermission 
{
constructor(
      role: string = '' ,
      login: string = '',
      startDate: Date = new Date(),
      endDate: Date = new Date() 
      ){};      
}


export interface ReceivedPermission
{

            roles : string[],
            logins : string[]
}


