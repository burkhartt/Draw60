using System;
using Engine.Database;
using Engine.Users;

namespace Engine.Games {
    public class GameRepository : IGameRepository {
        private readonly IDatabaseProvider databaseProvider;

        public GameRepository(IDatabaseProvider databaseProvider) {
            this.databaseProvider = databaseProvider;
        }

        public void Save(Game game, User user) {
            var db = databaseProvider.Get();

            db.Game.UpsertById(game);
            db.GameHistory.Insert(GameId: game.Id, UserId: user.Id, Drawing: game.Drawing, Date: DateTime.Now);            
        }

        public Game GetById(Guid gameId) {
            var db = databaseProvider.Get();
            return (Game) db.Game.FindById(gameId) ?? new Game {Id = gameId};
        }
    }
}