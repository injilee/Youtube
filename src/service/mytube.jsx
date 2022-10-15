class Mytube {
  constructor(key) {
    this.key = key;
    this.requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
  }

  async mostPopular() {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=KR&maxResults=25&key=${this.key}`,
      this.requestOptions,
    );
    const result = await response.json();
    return result.items;
  }

  async search(query) {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=25&q=${query}&key=${this.key}`,
      this.requestOptions,
    );
    const result = await response.json();
    return result.items.map((item) => ({ ...item, id: item.id.videoId }));
  }
}

export default Mytube;
