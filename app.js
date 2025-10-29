// Sample IPTV and Radio Channels
const CHANNELS = {
    CABLE: [
        { name: 'KAPAMILYA', url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd', keyId: 'bd17afb5dc9648a39be79ee3634dd4b8', key: '3ecf305d54a7729299b93a3d69c02ea5', type: 'mpd' },
        { name: '3RsTV', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210631/tracks-v1a1/mono.ts.m3u8', type: 'hls' },
        { name: '3rsSinePinoy', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210267/tracks-v1a1/mono.ts.m3u8', type: 'hls' },
        { name: 'STAR TELEVISION', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210731/tracks-v1a1/mono.ts.m3u8', type: 'hls' },
        { name: 'CinePlex Asia', url: 'https://live20.bozztv.com/giatvplayout7/giatv-210632/tracks-v1a1/mono.ts.m3u8', type: 'hls' },
    ],
    MOVIES: [
        { name: 'Crawl', url: 'https://videos.gia.tv/giatv/movies/playlist/210631/Crawl_2019_720p_BluRay_x264_ESub_Hollymoviehd.mp4', type: 'mp4' },
        { name: 'Delivery Rider', url: 'https://videos.gia.tv/giatv/movies/playlist/210273/The_Delivery_Rider_2025_720p_NF_WEB_DL_x264_ESub_Hollymoviehd.mp4', type: 'mp4' },
        { name: 'Kumander Bawang', url: 'https://videos.gia.tv/giatv/movies/playlist/210273/Kumander_Bawang_1988_tt0402331_WD_480.mp4', type: 'mp4' },
        { name: 'Snake Woman', url: 'https://videos.gia.tv/giatv/movies/playlist/210273/Snake_Woman_2025_720p_iQ_WEB_DL_x264_ESub_Hollymoviehd.mp4', type: 'mp4' },
    ],
    RADIO: [
        { name: '106.3 Yes FM Dagupan', url: 'https://yesfmdagupan.radioca.st/;', type: 'mp3' },
        { name: '98.3 Love Radio Dagupan', url: 'https://loveradiodagupan.radioca.st/;', type: 'mp3' },
        { name: '90.7 Love Radio', url: 'https://azura.loveradio.com.ph/listen/love_radio_manila/radio.mp3', type: 'mp3' },
        { name: '95.5 Eagle FM', url: 'http://n0c.radiojar.com/yus0r2bghd3vv?rj-ttl=5&rj-tok=AAABl4NB7pwAuUwQgelXY74u7w', type: 'mp3' },
    ]
};

// Show Live TV
function showIPTV() {
    hideAll();
    document.getElementById('iptv-sec').classList.remove('hidden');
    renderIPTVList();
    openIPTVDdrawer();
}

// Show Movies
function showMovies() {
    hideAll();
    document.getElementById('movies-sec').classList.remove('hidden');
    renderMoviesList();
    openIPTVDdrawer();
}

// Show Radio
function showRadio() {
    hideAll();
    document.getElementById('radio-sec').classList.remove('hidden');
    renderRadioList();
}

// Show MyList
function showMyList() {
    hideAll();
    document.getElementById('mylist-sec').classList.remove('hidden');
}

// Hide All Sections
function hideAll() {
    document.getElementById('iptv-sec').classList.add('hidden');
    document.getElementById('movies-sec').classList.add('hidden');
    document.getElementById('radio-sec').classList.add('hidden');
    document.getElementById('mylist-sec').classList.add('hidden');
    closeIPTVDdrawer();
    destroyPlayers();  // Added destroyPlayers function call to clean up players
}

// Render IPTV Channels (Cable)
function renderIPTVList() {
    const list = document.getElementById('iptv-list');
    list.innerHTML = '';
    CHANNELS.CABLE.forEach(ch => {
        const item = document.createElement('div');
        item.className = 'ch-item';
        item.innerHTML = `<div class="ch-title">${ch.name}</div>`;
        item.onclick = () => playIPTV(ch);
        list.appendChild(item);
    });
}

// Render Movies Channels
function renderMoviesList() {
    const list = document.getElementById('iptv-list');
    list.innerHTML = '';
    CHANNELS.MOVIES.forEach(ch => {
        const item = document.createElement('div');
        item.className = 'ch-item';
        item.innerHTML = `<div class="ch-title">${ch.name}</div>`;
        item.onclick = () => playMovies(ch);
        list.appendChild(item);
    });
}

// Render Radio Channels
function renderRadioList() {
    const list = document.getElementById('radio-list');
    list.innerHTML = '';
    CHANNELS.RADIO.forEach(ch => {
        const item = document.createElement('div');
        item.className = 'ch-item';
        item.innerHTML = `<div class="ch-title">${ch.name}</div>`;
        item.onclick = () => playRadio(ch);
        list.appendChild(item);
    });
}

// Play IPTV Channel
function playIPTV(channel) {
    const wrap = document.getElementById('video-player');
    const video = document.createElement('video');
    video.setAttribute('playsinline', '');
    video.setAttribute('controls', '');
    video.style.width = '100%';
    video.style.height = '100%';
    wrap.appendChild(video);
    video.src = channel.url;
    video.play();
}

// Play Movies Channel
function playMovies(channel) {
    const wrap = document.getElementById('video-player');
    const video = document.createElement('video');
    video.setAttribute('playsinline', '');
    video.setAttribute('controls', '');
    video.style.width = '100%';
    video.style.height = '100%';
    wrap.appendChild(video);
    video.src = channel.url;
    video.play();
}

// Play Radio Channel
function playRadio(channel) {
    const audio = document.getElementById('audio-player');
    audio.src = channel.url;
    audio.play();
}

// Drawer functionality
function openIPTVDdrawer() {
    const d = document.getElementById('iptv-drawer');
    d.classList.add('open');
}

function closeIPTVDdrawer() {
    const d = document.getElementById('iptv-drawer');
    d.classList.remove('open');
}

// Function to destroy any active video or audio players
function destroyPlayers() {
    const videoPlayer = document.getElementById('video-player');
    if (videoPlayer) {
        videoPlayer.innerHTML = '';  // Clear video player content
    }

    const audioPlayer = document.getElementById('audio-player');
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.src = '';  // Stop and clear the audio source
    }
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
    showIPTV();
    renderIPTVList();
});
