document.getElementById('show-player').addEventListener('click', function() {
    const mediaPlayer = document.getElementById('media-player');
    const audioPlayer = document.getElementById('radio-player');
    const button = document.getElementById('show-player');

    // Toggle media player visibility
    if (mediaPlayer.style.display === 'block') {
        mediaPlayer.style.display = 'none';
        audioPlayer.pause();
        // Update play state in localStorage
        localStorage.setItem('isPlaying', 'false');
        // Update button label
        button.innerText = 'Listen Now';
    } else {
        mediaPlayer.style.display = 'block';
        audioPlayer.play();
        // Update play state in localStorage
        localStorage.setItem('isPlaying', 'true');
        // Update button label
        button.innerText = 'Pause';
    }

    // Display the current schedule
    displayCurrentSchedule();
});


function displayCurrentSchedule() {
    const currentTime = new Date();
    const currentDay = currentTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Define the schedules
    const schedules = {
        1: [ // Monday
            { start: { hour: 2, minute: 0 }, end: { hour: 6, minute: 0 }, text: "HIGH LIFE AGOOGO - 2:00 AM to 6:00 AM" },
            { start: { hour: 6, minute: 0 }, end: { hour: 10, minute: 0 }, text: "GYE ME TAATAA (PASTOR GIDEON) - 6 AM to 10 AM" },
            { start: { hour: 10, minute: 0 }, end: { hour: 14, minute: 0 }, text: "WAKE UP GHANA (DJ WAS DOING) - 10 AM to 2 PM" },
            { start: { hour: 13, minute: 30 }, end: { hour: 15, minute: 0 }, text: "GIRLS KASA (MAAME FOSUAH or MAAME AMA) - 1:30 PM to 3 PM" },
            { start: { hour: 15, minute: 0 }, end: { hour: 18, minute: 0 }, text: "DONKOMI (DECENT DJ) - 3:00 PM to 6:00 PM" },
            { start: { hour: 18, minute: 0 }, end: { hour: 22, minute: 0 }, text: "HAPPY HOUR (KINSOLO DJ) - 6PM to 10PM" },
            { start: { hour: 22, minute: 0 }, end: { hour: 2, minute: 0 }, text: "WO NIM NWOM[Request Show](MR. POSSIBLE or QUOO FANTE) - 10PM to 2AM" },
        ],
        2: [ // Tuesday
            { start: { hour: 2, minute: 0 }, end: { hour: 6, minute: 0 }, text: "HIGH LIFE AGOOGO - 2AM to 6AM" },
            { start: { hour: 6, minute: 0 }, end: { hour: 10, minute: 0 }, text: "GYE ME TAATAA (PASTOR GIDEON) - 6AM to 10AM" },
            { start: { hour: 10, minute: 0 }, end: { hour: 14, minute: 0 }, text: "WAKE UP GHANA (DJ WAS DOING) - 10AM to 2PM" },
            { start: { hour: 14, minute: 0 }, end: { hour: 18, minute: 0 }, text: "DONKOMI (DECENT DJ) - 2PM to 6PM" },
            { start: { hour: 18, minute: 0 }, end: { hour: 22, minute: 0 }, text: "HAPPY HOUR (MR. POSSIBLE) - 6PM to 10PM" },
            { start: { hour: 22, minute: 0 }, end: { hour: 2, minute: 0 }, text: "REAL MUSIC POWER - 10PM to 2AM" },
        ],
        3: [ //Wednesday
            { start: { hour: 2, minute: 0 }, end: { hour: 6, minute: 0 }, text: "HIGH LIFE AGOOGO - 2AM to 6AM" },
            { start: { hour: 6, minute: 0 }, end: { hour: 10, minute: 0 }, text: "GYE ME TAATAA (PASTOR GIDEON) - 6AM to 10AM" },
            { start: { hour: 10, minute: 0 }, end: { hour: 14, minute: 0 }, text: "WAKE UP GHANA (KOFI MONTANA) - 10AM to 2PM" },
            { start: { hour: 13, minute: 30 }, end: { hour: 15, minute: 0 }, text: "GIRLS KASA (MAAME FOSUAH or MAAME AMA) - 1:30PM to 3PM" },
            { start: { hour: 15, minute: 0 }, end: { hour: 18, minute: 0 }, text: "DONKOMI (DECENT DJ) - 3:00 PM to 6:00 PM" },
            { start: { hour: 18, minute: 0 }, end: { hour: 22, minute: 0 }, text: "HAPPY HOUR (MR. POSSIBLE) - 6PM to 10PM" },
            { start: { hour: 22, minute: 0 }, end: { hour: 2, minute: 0 }, text: "REAL MUSIC POWER - 10PM to 2AM" },
         ],
        4: [ //Thursday
            { start: { hour: 2, minute: 0 }, end: { hour: 6, minute: 0 }, text: "HIGH LIFE AGOOGO - 2AM to 6AM" },
            { start: { hour: 6, minute: 0 }, end: { hour: 10, minute: 0 }, text: "GYE ME TAATAA (PASTOR GIDEON) - 6AM to 10AM" },
            { start: { hour: 10, minute: 0 }, end: { hour: 14, minute: 0 }, text: "WAKE UP GHANA (KOFI MONTANA) - 10AM to 2PM" },
            { start: { hour: 14, minute: 0 }, end: { hour: 18, minute: 0 }, text: "DONKOMI (DECENT DJ) - 2PM to 6PM" },
            { start: { hour: 18, minute: 0 }, end: { hour: 22, minute: 0 }, text: "HAPPY HOUR (KINSOLO) - 6PM to 10PM" },
            { start: { hour: 22, minute: 0 }, end: { hour: 2, minute: 0 }, text: "WO NIM NWOM[Request Show] (MR. POSSIBLE or QUOO FANTE) - 10PM to 2AM" },
         ],
        5: [ //Friday
            { start: { hour: 2, minute: 0 }, end: { hour: 6, minute: 0 }, text: "HIGH LIFE AGOOGO - 2AM to 6AM" },
            { start: { hour: 6, minute: 0 }, end: { hour: 10, minute: 0 }, text: "GYE ME TAATAA (PASTOR GIDEON) - 6AM to 10AM" },
            { start: { hour: 10, minute: 0 }, end: { hour: 14, minute: 0 }, text: "WAKE UP GHANA (KOFI MONTANA) - 10AM to 2PM" },
            { start: { hour: 13, minute: 30 }, end: { hour: 15, minute: 0 }, text: "GIRLS KASA[18+](MAAME FOSUAH or MAAME AMA) - 1:30PM to 3PM" },
            { start: { hour: 15, minute: 0 }, end: { hour: 18, minute: 0 }, text: "DONKOMI (DJ WAS DOING & AKOSUA TASTY) - 3:00PM to 6:00PM" },
            { start: { hour: 18, minute: 0 }, end: { hour: 22, minute: 0 }, text: "HAPPY HOUR (KINSOLO) - 6PM to 10PM" },
            { start: { hour: 22, minute: 0 }, end: { hour: 23, minute: 59 }, text: "REAL MUSIC POWER - 10PM to 12AM" },
            
         ],
        6: [ //Saturday
            { start: { hour: 0, minute: 0 }, end: { hour: 6, minute: 0 }, text: "REAL MUSIC POWER - 12AM to 6AM" },
            { start: { hour: 6, minute: 0 }, end: { hour: 9, minute: 0 }, text: "NSENKU NWOM  (DJ SKY GEE) - 6AM to 9AM" },
            { start: { hour: 9, minute: 0 }, end: { hour: 12, minute: 0 }, text: "AHOMA NSIA - 9AM to 12PM" },
            { start: { hour: 12, minute: 0 }, end: { hour: 17, minute: 0 }, text: "TE AHOMA NO[Request Show](DJ SUNDAE or KINSOLO DJ) - 12PM to 5PM" },
            { start: { hour: 17, minute: 0 }, end: { hour: 20, minute: 0 }, text: "DI ASA (DJ SKY GEE) - 5PM to 8PM" },
            { start: { hour: 20, minute: 0 }, end: { hour: 22, minute: 0 }, text: "ABRABO YE NTOBOASIE (AGYENIM BOATENG) - 8PM to 10PM" },
            { start: { hour: 22, minute: 0 }, end: { hour: 2, minute: 0 }, text: "REAL MUSIC POWER - 10PM to 2AM" },
         ],
        0: [ //Sunday
            { start: { hour: 0, minute: 0 }, end: { hour: 6, minute: 0 }, text: "HIGH LIFE AGOOGO - 12AM to 6AM" },
            { start: { hour: 6, minute: 0 }, end: { hour: 9, minute: 0 }, text: "HEAVENS GATE (DJ HUMBLE) - 6AM to 9AM" },
            { start: { hour: 9, minute: 0 }, end: { hour: 12, minute: 0 }, text: "TIE NWOM PAPA NO (KINSOLO DJ) - 9AM to 12PM" },
            { start: { hour: 12, minute: 0 }, end: { hour: 17, minute: 0 }, text: "BISA NWOM[Request Show] (KWEKU MASIMOL) - 12PM to 5PM" },
            { start: { hour: 17, minute: 0 }, end: { hour: 20, minute: 0 }, text: "GH ENTERTAINMENT REVIEW (DA BLOWSMAN & KWEKU MASIMOL) - 5PM to 8PM" },
            { start: { hour: 20, minute: 0 }, end: { hour: 21, minute: 0 }, text: "R.O.G.I.M.HOUR (BROTHER EDWARD) - 8PM to 9PM" },
            { start: { hour: 21, minute: 0 }, end: { hour: 2, minute: 0}, text: "WEEKEND PARTY MIX - 9PM to 2AM" },
         ],
       
    };
//If no live show
    let currentSchedule = "No live shows right now. Please check back later.";
    let nextScheduleTime = null;

    if (schedules[currentDay]) {
        schedules[currentDay].forEach((schedule, index) => {
            const scheduleStartTime = new Date(currentTime);
            scheduleStartTime.setHours(schedule.start.hour, schedule.start.minute, 0, 0);

            const scheduleEndTime = new Date(currentTime);
            scheduleEndTime.setHours(schedule.end.hour, schedule.end.minute, 0, 0);

            // This will handle cases where the end time is past midnight
            if (schedule.end.hour < schedule.start.hour) {
                scheduleEndTime.setDate(scheduleEndTime.getDate() + 1);
            }

            // This will Check if current time is within this schedule
            if (currentTime >= scheduleStartTime && currentTime < scheduleEndTime) {
                currentSchedule = schedule.text;

                // If it's within 10 minutes of the end of the current schedule, this will show 'upnext'
                const minutesToEnd = (scheduleEndTime - currentTime) / (1000 * 60);
                if (minutesToEnd <= 10) {
                    const nextScheduleIndex = (index + 1) % schedules[currentDay].length;
                    const nextSchedule = schedules[currentDay][nextScheduleIndex];
                    currentSchedule = `  UP-NEXT => ${nextSchedule.text}`;
                }

                //This will Set the next schedule time for auto-refresh
                nextScheduleTime = scheduleEndTime;
            }
        });
    }

    // This will Display the current schedule in the designated area
    const scheduleElement = document.getElementById('current-schedule');
    scheduleElement.innerText = currentSchedule;

    /*Reset animation (to restart the animation)
    scheduleElement.style.animation = 'none';
    setTimeout(() => {
        scheduleElement.style.animation = '';
    }, 10);*/

    // If nextScheduleTime is defined, set a timeout to refresh the page right after the current schedule ends
    if (nextScheduleTime) {
        const timeToRefresh = nextScheduleTime - currentTime;
        setTimeout(() => {
            // Before refreshing, store the play state
            const mediaPlayer = document.getElementById('media-player');
            const isPlaying = !mediaPlayer.paused;
            localStorage.setItem('isPlaying', isPlaying ? 'true' : 'false');
            // To Refresh the page
            location.reload();
        }, timeToRefresh);
    }
}

// Function to initialize the player based on previous state
function initializePlayer() {
    const isPlaying = localStorage.getItem('isPlaying');
    const mediaPlayer = document.getElementById('media-player');
    const audioPlayer = document.getElementById('radio-player');

    if (isPlaying === 'true') {
        mediaPlayer.style.display = 'block';
        // Wait for the audio metadata to be loaded before playing
        audioPlayer.addEventListener('loadedmetadata', () => {
            audioPlayer.play();
        });
        // Set the source and load the audio
        audioPlayer.load();
    } else {
        mediaPlayer.style.display = 'none';
    }
}

// Initial call to display the schedule
displayCurrentSchedule();

window.onload = initializePlayer;

setInterval(displayCurrentSchedule, 60000);
//forward
document.getElementById('skip-forward').addEventListener('click', function() {
    var audio = document.getElementById('radio-player');
    audio.currentTime += 15; 
});
//Reverse
document.getElementById('skip-backward').addEventListener('click', function() {
    var audio = document.getElementById('radio-player');
    audio.currentTime -= 15; 
});
//To share GHRadio's page
document.getElementById('share-button').addEventListener('click', function() {
    if (navigator.share) {
        navigator.share({
            title: 'Share this link',
            url: window.location.href
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert('Share feature not supported on this browser.');
    }
});

//momo
document.getElementById("showButton").addEventListener("click", function (event) {
    const nameDisplay = document.getElementById("nameDisplay");
    const showButton = document.getElementById("showButton");

    // Show the name and Pay button, hide the Click Me button
    nameDisplay.classList.remove("hidden");
    showButton.classList.add("hidden");

    // Stop propagation to prevent the document click listener from immediately hiding the element
    event.stopPropagation();
});

// Add event listener for the "Pay" button
document.getElementById("payButton").addEventListener("click", function (event) {
    // Replace 'your-app-link' with the deep link or URL of your phone app
    window.location.href = "tel:+233558015581";

    // Stop propagation to prevent the document click listener from immediately hiding the element
    event.stopPropagation();
});

// Add event listener for clicks outside the buttons
document.addEventListener("click", function (event) {
    const nameDisplay = document.getElementById("nameDisplay");
    const showButton = document.getElementById("showButton");

    // Check if the click is outside the `nameDisplay` or the `showButton`
    if (!nameDisplay.contains(event.target)) {
        // Hide the name and Pay button, show the Click Me button
        nameDisplay.classList.add("hidden");
        showButton.classList.remove("hidden");
    }
});

