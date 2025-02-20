function fetchMusic(artist) {
    return new Promise((resolve, reject) => {
      fetch(`https://itunes.apple.com/search?term=${artist}&limit=5`)
        .then(response => {
          if (!response.ok) {
            throw new Error("⚠️ API Error!");
          }
          return response.json();
        })
        .then(data => {
          if (data.results.length === 0) {
            reject("❌ No Songs Found!");
          } else {
            resolve(data.results);
          }
        })
        .catch(error => reject(error)); // Handle errors
    });
  }
  
  // Using the promise
  fetchMusic("Akon")
    .then(songs => {
      console.log("🎵 Songs Found:");
      songs.forEach(song => console.log(`🎧 ${song.trackName} - ${song.artistName}`));
    })
    .catch(error => console.error(error));
  