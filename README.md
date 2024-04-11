# node-demo

I recorded a video on how to setup a project with modern Node.js, and I realized it would be helpful to share officially by way of YouTube as well!

ESM and JSDoc type checking is a really nice place to start for writing solid code, be it the browser or Node.js. This video is for Node.js in particular. The parts around the `tsconfig.json` apply to anything JavaScript-related though.

It makes it very simple to move to full on TypeScript down the line as well, because it's only a matter of renaming your file extensions to `.ts`, then using IDE refactoring to "Annotate everything with types from JSDoc". I think converting untyped projects to TypeScript is really easy with this method too, because you don't have to change the build step in order to get type checking working.

You can check out the video itself on YouTube.
https://www.youtube.com/watch?v=dNkKRMlvC6U

I used a few other tools to get this working. `ffmpeg` is one of my favorite tools now for sure!

https://www.reddit.com/r/ffmpeg/comments/1bcfru6/speeding_up_a_video_by_5x_by_dropping_frames_and/
https://superuser.com/questions/1261678/how-do-i-speed-up-a-video-by-60x-in-ffmpeg
https://stackoverflow.com/questions/55233465/ffmpeg-speed-up-video-for-time-lapse-quicker-faster
https://superuser.com/questions/277642/how-to-merge-audio-and-video-file-in-ffmpeg

I just recorded the video with macOS's screen recorder Screenshot tool, which saves as `.mov` by default. Since the file sizes for those seem to be much bigger (200 MB??), reencoding to `.mp4` really helps slim things down a bit.

For this video, I also sped it up a little bit since it was originally 10 minutes long, now it's only 5. So you can reencode it and speed it up both in the same command. No need to open it with a video editor! Now the file size is only 21 MB 😎

I added the no audio flag just in case it had anything saved there. I don't think it should have because I have that turned off in the Screenshot app, but anything to clean up the file a bit more I guess.

```sh
ffmpeg -i ./node-testing.mov -filter:v "setpts=PTS/2" -an ./node-testing.mp4
```

Then I realized I should probably add some music to it as well, so I used one of my own songs, "Jack.".

It simply reencodes the `.wav` song file as AAC, and embeds that into the file too. I made sure to copy the original video stream as-is, since reencoding it again to `.mp4` doesn't help with anything. It's already in the appropriate format it needs to be! Extra cool. This new file is only 26 MB, barely anything to add music!

```sh
ffmpeg -i ./node-testing.mp4 -i "./06 Jack..wav" -c:v copy -c:a aac ./node-testing-yt.mp4
```