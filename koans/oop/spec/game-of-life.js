/*global beforeEach, describe, expect, it, SAMURAIPRINCIPLE*/
describe('Game of Life', function() {
    var SAMURAIPRINCIPLE = {};
    var gameOfLife;
    var totalRowsCols = 6;
    SAMURAIPRINCIPLE.GameOfLife = function() {
        this.matrix = [
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0]

        ];
        this.isCellAlive = function(r, c) {
            return this.matrix[r][c] == 1 ? true : false;
        };
        //Any live cell with fewer than two live neighbours dies, as if caused by under-population.
        this.toggleCellState = function(r, c) {
            this.matrix[r][c] = this.matrix[r][c] == 1 ? 0 : 1;
            return this;
        };
        this.tick = function() {
            var valuesToToggle = [];
            var numberOfLiveNeigbours = 0;
            for (var i = 0; i < totalRowsCols; i++) {

                for (var j = 0; j < totalRowsCols; j++) {
                    numberOfLiveNeigbours = 0;
                    if (i - 1 >= 0 && j - 1 >= 0 && this.matrix[i-1][j-1] == 1) { // -1 -1
                        numberOfLiveNeigbours++;
                    }
                    if (i - 1 >= 0 && this.matrix[i - 1][j] == 1) { // -1,  0
                        numberOfLiveNeigbours++;
                    }
                    if (j - 1 >= 0 && this.matrix[i][j - 1] == 1) { // 0 , -1
                        numberOfLiveNeigbours++;
                    }
                    if (i + 1 < totalRowsCols && j + 1 < totalRowsCols && this.matrix[i + 1][j + 1] == 1) { //1,1
                        numberOfLiveNeigbours++;
                    }
                    if (i - 1 >= 0 && j + 1 < totalRowsCols && this.matrix[i - 1][j + 1] == 1) { // -1, 1
                        numberOfLiveNeigbours++;
                    }
                    if (j + 1 < totalRowsCols && this.matrix[i][j + 1] == 1) { //0 , 1
                        numberOfLiveNeigbours++;
                    }
                    if (i + 1 < totalRowsCols && this.matrix[i + 1][j] == 1) { //1,0
                        numberOfLiveNeigbours++;
                    }
                    if (i + 1 < totalRowsCols && j - 1 >= 0 && this.matrix[i + 1][j - 1] == 1) { //1,-1
                        numberOfLiveNeigbours++;
                    }
                    if ((this.matrix[i][j] == 1 
                    		&& (numberOfLiveNeigbours < 2 || numberOfLiveNeigbours > 3)) 
                    	|| (this.matrix[i][j] == 0 && numberOfLiveNeigbours == 3)) {
                        valuesToToggle.push([i, j]);
                    }
                }
            }
            for (var z = 0; z < valuesToToggle.length; z++) {
                this.toggleCellState(valuesToToggle[z][0], valuesToToggle[z][1]);
            }
        };

    };

    beforeEach(function() {
        gameOfLife = new SAMURAIPRINCIPLE.GameOfLife();
    });
    it('should make sure all the cells are dead when a new game is created', function() {
        var isCellAlive;
        isCellAlive = gameOfLife.isCellAlive(2, 3);

        expect(isCellAlive).toBe(false);
    });
    it('should set the cell state to alive when toggleCellState method is called', function() {
        gameOfLife.toggleCellState(2, 3);

        expect(gameOfLife.isCellAlive(2, 3)).toBe(true);
    });
    it('should set the cell state to dead in next generation if the cell is alive in current generation and has less than 2 neighbours', function() {
        gameOfLife.toggleCellState(2, 3);
        gameOfLife.tick();

        expect(gameOfLife.isCellAlive(2, 3)).toBe(false);
    });
    it('should keep the cell alive in next generation if the cell has two or three live neighbours', function() {
        gameOfLife.toggleCellState(2, 3).toggleCellState(2, 4).toggleCellState(2, 5);

        gameOfLife.tick();

        expect(gameOfLife.isCellAlive(2, 4)).toBe(true);
    });
    it('should set the cell state to dead in next generation if the cell is alive in current generation and has more than 3 neighbours', function() {
        gameOfLife.toggleCellState(2, 2).toggleCellState(2, 3).toggleCellState(2, 4)
            .toggleCellState(3, 3)
            .toggleCellState(4, 3);
        gameOfLife.tick();
        expect(gameOfLife.isCellAlive(3, 3)).toBe(false);
    });
    it('should set the cell state to alive in next generation if the cell is dead and has three live neighbours', function() {
        gameOfLife.toggleCellState(2, 3).toggleCellState(2, 4).toggleCellState(2, 5);
        gameOfLife.tick();

        expect(gameOfLife.isCellAlive(3, 4)).toBe(true);
    });
});