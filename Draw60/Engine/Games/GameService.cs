using System;
using System.Collections.Generic;
using System.Linq;
using Engine.Database;

namespace Engine.Games {
    public class GameService : IGameService {
        private readonly IDatabaseProvider databaseProvider;

        public GameService(IDatabaseProvider databaseProvider) {
            this.databaseProvider = databaseProvider;
        }

        public Game GetRandomGame(Guid gameId, Guid userId) {
            var db = databaseProvider.Get();

            List<GameHistory> gameHistories = db.GameHistory.FindAllByUserId(userId).ToList<GameHistory>();
            var gameIds = gameHistories.Select(g => g.GameId);
            List<Game> games = db.Game.All().Where(db.Game.Id != gameIds).Take(1).ToList<Game>();                

            return games.Any() ? games.First() : new Game();
        }
    }

    public class GameHistory {
        public Guid GameId { get; set; }
    }
}