import {Tag} from './tag';

export class User {
  public firstName: string;
  public lastName: string;
  public phoneNo: string;
  public collegeName: string;
  public degree: string;
  public course: string;
  public graduationYear: string;
  public interestedTags: Array<Tag>;
  public userName: string;
  public password: string;
  public userStatus?: string;
  public email: string;

  constructor() {
    this.interestedTags = new Array<Tag>();
  }
}