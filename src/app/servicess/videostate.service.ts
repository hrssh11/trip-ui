// video-state.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoStateService {
  private currentTimeSubject = new BehaviorSubject<number>(0);

  get currentTime$() {
    return this.currentTimeSubject.asObservable();
  }

  setPlaybackTime(time: number) {
    this.currentTimeSubject.next(time);
    localStorage.setItem('videoPlaybackTime', String(time));
  }
}
