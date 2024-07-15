const avgTeamDolphin = Math.round((1 + 108 + 89) / 3);
const avgTeamKolalas = Math.round((200 + 108 + 89) / 3);

// Task-1
// (avgTeamDolphin > avgTeamKolalas) ? console.log('Team Dolphins Win!!') : (avgTeamDolphin === avgTeamKolalas) ? console.log('Match Draw') : console.log('Team Koalas Win!!');

// Task-2

if (avgTeamDolphin > 100 || avgTeamKolalas > 100) {
    if (avgTeamDolphin > avgTeamKolalas) {
        console.log(`team dolphin win with score greater than 100`)
    } else if (avgTeamDolphin === avgTeamKolalas) {
        console.log('Match Draw')
    } else {
        console.log('Team Koalas Win!!')
    }
} else {
    console.log('Both Loose');
}
