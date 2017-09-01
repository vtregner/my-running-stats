import {Activity} from './strava.model';

export class ActivitySummary {
  public activities: Activity[];
  public totalDistance: number;
  public num: number;


  constructor(activities: Activity[], totalDistance: number, num: number) {
    this.activities = activities;
    this.totalDistance = totalDistance;
    this.num = num;
  }
}
