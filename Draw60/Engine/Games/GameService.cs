using System;
using System.Collections.Generic;
using System.Linq;
using Engine.Database;
using Engine.Users;

namespace Engine.Games {
    public class GameService : IGameService {
        private readonly IDatabaseProvider databaseProvider;
        private readonly IGameRepository gameRepository;
        private readonly IUserRepository userRepository;

        public GameService(IDatabaseProvider databaseProvider, IGameRepository gameRepository, IUserRepository userRepository) {
            this.databaseProvider = databaseProvider;
            this.gameRepository = gameRepository;
            this.userRepository = userRepository;
        }

        public Game GetRandomGame(Guid gameId, Guid userId) {
            var db = databaseProvider.Get();
            List<GameParticipant> participants = db.GameParticipants.All().ToList<GameParticipant>();
            var newGame = participants.GroupBy(p => p.GameId).FirstOrDefault(g => g.ToList().All(p => p.UserId != userId));
            
            if (newGame == null) {
                return new Game();
            }

            var user = userRepository.GetById(userId);
            var game = gameRepository.GetById(newGame.Key);
            game.Participants.Add(user);
            gameRepository.Save(game);

            return game;
        }
    }

    public class GameParticipant {
        public Guid GameId { get; set; }
        public Guid UserId { get; set; }
    }
}