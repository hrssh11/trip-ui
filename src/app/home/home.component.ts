import { Component, HostListener, OnInit } from '@angular/core';
import { VideoStateService } from '../servicess/videostate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private videoStateService: VideoStateService) {

  }
  ngOnInit(): void {

    const video = document.getElementById('bg-video') as HTMLVideoElement;
    // Check if there's a saved playback time in local storage
    const savedTime = localStorage.getItem('videoPlaybackTime');
    if (savedTime) {
      video.currentTime = parseFloat(savedTime);
    }

    // Save the current playback time to local storage when the page is unloaded
    window.addEventListener('beforeunload', () => {
      this.videoStateService.setPlaybackTime(video.currentTime);
    });

    // Ensure that the video is muted for autoplay to work
    video.muted = true;

    // Attempt to play the video
    video.play().catch((error) => console.error(error));

  }
  }


