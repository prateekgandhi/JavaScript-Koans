function isCellAliveInNextGeneration(isCellAlive, numberOfLiveNeighbours) {
	return numberOfLiveNeighbours == 2 || numberOfLiveNeighbours == 3;
	// if(isCellAlive == true){
	// 	if(numberOfLiveNeighbours < 2 || numberOfLiveNeighbours > 3){
	// 		return false;
	// 	}else if(numberOfLiveNeighbours == 2 || numberOfLiveNeighbours == 3){
	// 		return true;
	// 	}
	// }else{
	// 	if(numberOfLiveNeighbours == 3){
	// 		return true;
	// 	}else{
	// 		return false;
	// 	}
	// }
}