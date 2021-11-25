export class Todos {
  uppgift: string;
  status: boolean;

  constructor(taskName: string) {
    this.uppgift = taskName;
    this.status = false;
  }
}
