console.log('hello');
const SAMURAIPRINCIPLE = {};
(function () {
  const fetchJson = function (url) {
    return fetch(url).then(response => response.json());
  };
  SAMURAIPRINCIPLE.PlayerService = function () {
    this.getPlayer = function (playerId) {
      return fetchJson(`data/player/${playerId}.json`);
    };
  };
  SAMURAIPRINCIPLE.LeaderboardService = function () {
    this.getLeaderboard = function () {
      return fetchJson('data/leaderboard.json');
    };
  };
  // SAMURAIPRINCIPLE.BetterLeaderboardService = function () {
  //   this.getBetterLeaderboard = function () {

  //   return fetchJson('data/leaderboard.json').then(function (result){
  //       result.filter(function(pId){
  //         console.log(pId.id);
  //         if( pId.Id < 3 )
  //           return fetchJson(`data/player/${pId}.json`);
  //         else 
  //           return undefined;
  //       });
  //     });
  //   }
  // };
}());

let playerService = new SAMURAIPRINCIPLE.PlayerService(),
  leaderboardService = new SAMURAIPRINCIPLE.LeaderboardService();
  //betterLeaderboardService = new SAMURAIPRINCIPLE.BetterLeaderboardService();

playerService.getPlayer(1)
  .then(player => console.log('Player', player), reason => console.log(reason));

leaderboardService.getLeaderboard()
  .then(leaderboard => console.log('Leaderboard', leaderboard), reason => console.log(reason));

// betterLeaderboardService.getBetterLeaderboard()
//   .then(function(data){console.log(data);});

leaderboardService.getLeaderboard().then(
    function(leaderboard){
      console.log(leaderboard);
    }
  )

  // leaderboardService.getLeaderboard()
  //   .then(leaderboard => leaderboard.map(l => playerService.getPlayer(l.id)))
  //   .then(leaderboard => Promise.all(leaderboard))
  //   .then(leaderboard => leaderboard.slice(0, 3))
  //   .then(leaderboard => console.log(leaderboard));

  // leaderboardService.getLeaderboard()
  //   .then(function (leaderboleader) {
  //     return board.map(l => playerService.getPlayer(l.id))
  //   })
  //   .then(function (leaderboard) {
  //     return Promise.all(leaderboard)
  //   })
  //   .then(leaderboard => leaderboard.slice(0, 3))
  //   .then(leaderboard => console.log(leaderboard));