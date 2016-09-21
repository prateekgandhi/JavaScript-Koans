

var SAMURAIPRINCIPLE = {};

SAMURAIPRINCIPLE.throttle9 = function (fn, interval) {
	return function (param) {
		fn(param);
	};
};

SAMURAIPRINCIPLE.throttle = function(showPrice, timeInterval){
	// console.log('throttle invoked');
	// console.log(timeInterval);
	// console.log(lastUpdatedTime);
	// console.log(priceOnScreen);
	//var timeInterval = 1000;
	//console.log('throttle ends');
	// console.log(timeInterval);
	// console.log(lastUpdatedTime);
	 console.log(priceOnScreen);

	return function(priceToUpdate) {
		lastUpdatedPrice = priceToUpdate;
    	if(lastUpdatedTime == undefined || lastUpdatedTime + timeInterval > Date.now()){
    		lastUpdatedTime = Date.now();
   //  		console.log('loop 1');
			// console.log(priceOnScreen);
    		//priceOnScreen = priceToUpdate;
    		showPrice(priceToUpdate);
			//console.log(priceOnScreen);

    	}else{
    		setTimeout(function(priceToUpdate){
    			console.log('loop 2');
    			showPrice(lastUpdatedPrice);}, Date.now() - lastUpdatedTime + timeInterval);	    		
    	}

	}
};
/*
 * function that updates div to currentts and is called from setTimeout(*, 0)
 * throttle jQuery.ajax
 * throttling + prioritization
 */
describe('Throttle', function() {
    var priceOnScreen, showPrice, throttledShowPrice;
    var lastUpdatedTime;
    var lastUpdatedPrice;
    beforeEach(function() {
        priceOnScreen = undefined;
        showPrice = function(currentPrice) {

//		lastUpdatedPrice = showPrice;
    	// if(lastUpdatedTime == undefined || lastUpdatedTime + timeInterval > Date()){
    	// 	lastUpdatedTime = Date();
    		//priceOnScreen = showPrice;
    		console.log('abc');
            priceOnScreen = currentPrice;
        };
        throttledShowPrice = SAMURAIPRINCIPLE.throttle(showPrice, 1000);
    });
    it('1 - should invoke the specified function when throttled function invoked first time', function() {
        console.log('<1>');
        throttledShowPrice(100);
        console.log(showPrice);
        console.log('<>');
        expect(priceOnScreen).toBe(100);
    });
    it('2 - should never invoke the specified function twice within specified time interval', function() {
        throttledShowPrice(100);
        throttledShowPrice(200);

        expect(priceOnScreen).toBe(100);
    });
    it('3 - should invoke the specified function after specified interval lapsed, with last', function(done) {
        throttledShowPrice(100);
        setTimeout(function() {
            throttledShowPrice(200);
            expect(priceOnScreen).toBe(100);
        }, 250);

        setTimeout(function() {
            throttledShowPrice(300);
            expect(priceOnScreen).toBe(100);
        }, 500);

        setTimeout(function() {
            expect(priceOnScreen).toBe(300);
            done();
        }, 1001);
    });
    it('4 - should just demonstrate throttle in action - no tests', function(done) {
        var counter = 0,
            counterElement = jQuery('#counter'),
            setCounter = function(value) {
                counterElement.text(value);
            },
            throttledSetCounter = SAMURAIPRINCIPLE.throttle(setCounter, 1000);
        setInterval(function() {
            counter++;
            throttledSetCounter(counter);
        }, 100);
        setTimeout(done, 4000);
    });
    /*
     * For bonus points - how would you go about this?
     * Obviously, you'll have to change other tests if you want to accomplish this
     * Discuss with your pair what the advantage of this could be?
     *
    it('should invoke the specified function after specified interval ', function () {
      var counter = 0, incrementCounter = function () {
        counter++;
      }, throttledIncrementCounter = SAMURAIPRINCIPLE.throttle(incrementCounter, 1000), interval;
      throttledIncrementCounter();
      throttledIncrementCounter();
      throttledIncrementCounter();
      throttledIncrementCounter();
      interval = setInterval(throttledIncrementCounter, 100);
      expect(counter).toBe(0);
      waits(0);
      runs(function () {
        expect(counter).toBe(4);
      });
      waits(1100);
      runs(function () {
        clearInterval(interval);
        expect(counter).toBe(5);
      });
    });
    */
});