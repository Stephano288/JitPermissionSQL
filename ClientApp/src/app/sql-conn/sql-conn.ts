export class ConnectionString {

  constructor(
    public dataSource: string = '',
    public userdID: string = '',
    public password: string = '',
    public dbName: string = "master",
    public isIntegrated: boolean = false
  ) { }
}
