// These are some of the classes of a complex 3rd-party video
// conversion framework. We don't control that code, therefore
// can't simplify it.
class VideoFile {}

class OggCompressionCodec {}

class MPEG4CompressionCodec {}

class CodecFactory {
  extract(file: VideoFile): any {}
}

class BitrateReader {
  static read(filename: string, source: any) {}
  static convert(buffer: any, destinationCodec: any) {}
}

class AudioMixer {
  fix(result: any) {}
}
// ....................................

// facade class ....................................
class VideoConverter {
  convertVideo(filename: string, format: string) {
    const file = new VideoFile();
    const sourceCodec = new CodecFactory().extract(file);
    let destinationCodec;
    if (format == "mp4") destinationCodec = new MPEG4CompressionCodec()
    else  destinationCodec = new OggCompressionCodec()
    const buffer = BitrateReader.read(filename, sourceCodec)
    let result = BitrateReader.convert(buffer, destinationCodec)
    result = new AudioMixer().fix(result)
    // return new File(result)
  }
}

class Application {
  constructor(public videoConverter: VideoConverter) {}

  convert() {
    this.videoConverter.convertVideo('Video1', 'mp4');
  }
}

export {}