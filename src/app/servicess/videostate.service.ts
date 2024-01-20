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


// ngOnInit(): void {

//   const video = document.getElementById('bg-video') as HTMLVideoElement;
//   // Check if there's a saved playback time in local storage
//   const savedTime = localStorage.getItem('videoPlaybackTime');
//   if (savedTime) {
//     video.currentTime = parseFloat(savedTime);
//   }

//   // Save the current playback time to local storage when the page is unloaded
//   window.addEventListener('beforeunload', () => {
//     this.videoStateService.setPlaybackTime(video.currentTime);
//   });

//   // Ensure that the video is muted for autoplay to work
//   video.muted = true;

//   // Attempt to play the video
//   video.play().catch((error) => console.error(error));

// }
