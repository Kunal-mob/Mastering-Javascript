async function fetchBoth() {
    try {
      let musicResponse = await fetch("https://itunes.apple.com/search?term=Akon&limit=1");
      let musicData = await musicResponse.json();
      console.log("🎵 First Song:", musicData.results[0].trackName);
  
      let movieResponse = await fetch("https://api.tvmaze.com/search/shows?q=breaking+bad");
      let movieData = await movieResponse.json();
      console.log("🎬 First Show:", movieData[0].show.name);
    } catch (error) {
      console.error("❌ Error:", error);
    }
  }
  
  fetchBoth();
  