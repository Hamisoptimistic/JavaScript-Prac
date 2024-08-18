const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];



for (i = 0; i < listOfNeighbours.length; i++) {

    for (j = 0; j < listOfNeighbours[i].length; j++) {
        console.log(` ${j} Neighbour: ${listOfNeighbours[i][j]}`);
    }


}
