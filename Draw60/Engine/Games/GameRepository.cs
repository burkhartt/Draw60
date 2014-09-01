using System;
using Engine.Database;

namespace Engine.Games {
    public class GameRepository : IGameRepository {
        private readonly IDatabaseProvider databaseProvider;

        public GameRepository(IDatabaseProvider databaseProvider) {
            this.databaseProvider = databaseProvider;
        }

        public void Save(Game game) {
            var db = databaseProvider.Get();

            db.Game.DeleteById(game.Id);
            db.Game.Insert(game);
            db.GameParticipants.DeleteAllByGameId(game.Id);
            
            foreach (var participant in game.Participants) {
                db.GameParticipants.Insert(GameId: game.Id, UserId: participant.Id);
            }
        }

        public Game GetById(Guid gameId) {
            var db = databaseProvider.Get();
            return (Game)db.Game.FindById(gameId);
        }
    }
}