export default interface Entry {
  _id: string;
  emotion: string;
  triggeringEvent: string;
  thought: string;
  behavior: string;
  date: Date;
  __v: number;
}
