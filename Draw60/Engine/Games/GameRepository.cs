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

            db.Game.UpsertById(game);
            db.GameParticipant.DeleteAllById(game.Id);
            
            foreach (var participant in game.Participants) {
                db.GameParticipant.Insert(GameId: game.Id, UserId: participant.Id);
            }
        }

        public Game GetById(Guid gameId) {
            var db = databaseProvider.Get();
            return (Game)db.Game.FindById(gameId);
        }
    }
}