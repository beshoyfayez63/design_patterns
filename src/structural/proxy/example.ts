interface IYoutubeLib {
  listVideos(): any[];
  getVideoInfo(id: string): any;
  downloadVideo(id: string): void;
}

// The concrete implementation of a service connector. Methods
// of this class can request information from YouTube. The speed
// of the request depends on a user's internet connection as
// well as YouTube's. The application will slow down if a lot of
// requests are fired at the same time, even if they all request
// the same information.
class YoutubeLib implements IYoutubeLib {
  listVideos() {
    return [{id: 'V1', name: 'Video 1'}]
  }

  getVideoInfo(id: string) {
    return {id: 'V1', name: 'Video 1'}
  }

  downloadVideo(id: string): void {
    console.log('Downloading...');
    console.log('Done');
  }
}

/**
 * The library provides us with the video downloading class. However, it’s very inefficient. If the client application requests the same video multiple times, the library just downloads it over and over, instead of caching and reusing the first downloaded file.

The proxy class implements the same interface as the original downloader and delegates it all the work. However, it keeps track of the downloaded files and returns the cached result when the app requests the same video multiple times.

// To save some bandwidth, we can cache request results and keep
// them for some time. But it may be impossible to put such code
// directly into the service class. For example, it could have
// been provided as part of a third party library and/or defined
// as `final`. That's why we put the caching code into a new
// proxy class which implements the same interface as the
// service class. It delegates to the service object only when
// the real requests have to be sent.
 */
class CachedYoutubeLib implements IYoutubeLib {
  listCache: any;
  videoCache: any;
  needReset = false;
  constructor(private lib: IYoutubeLib) {}

  listVideos() {
    if(this.listCache === null || this.needReset) {
      this.listCache = this.listVideos();
    }
    return this.listCache;
  }

  getVideoInfo(id: string) {
    if(this.videoCache === null || this.needReset) {
      this.videoCache = this.lib.downloadVideo(id);
    }
    return this.videoCache;
  }

  downloadVideo(id: string): void {
    if(!this.downloadExist(id) || this.needReset) this.lib.downloadVideo(id);
  }

  // method cache downloads
  downloadExist(id: string) {
    return false;
  }
}


// The GUI class, which used to work directly with a service
// object, stays unchanged as long as it works with the service
// object through an interface. We can safely pass a proxy
// object instead of a real service object since they both
// implement the same interface.
class YouTubeManager {
  videoInfo: any = null;
  videoList: any[] = []
  constructor(protected service: IYoutubeLib) {}

  renderVideoPage(id: string) {
    this.videoInfo = this.service.getVideoInfo(id);
  }

  renderListPanel() {
    this.videoList = this.service.listVideos();
  }

  reactOnUserInput(id: string) {
    this.renderVideoPage(id);
    this.renderListPanel()
  }
}

const youtubeLib = new YoutubeLib();
const youtubeProxy = new CachedYoutubeLib(youtubeLib);
const manager = new YouTubeManager(youtubeProxy);
manager.reactOnUserInput('V1');

export {}