using System;
using System.IO;
using System.Web.Http;
using System.Web.Http.Cors;
using Engine.Games;
using Engine.Users;

namespace Draw60.Controllers {
    public class GameController : ApiController {
        private readonly IUserRepository userRepository;
        private readonly IGameFactory gameFactory;
        private readonly IGameRepository gameRepository;
        private readonly IGameService gameService;

        public GameController(IUserRepository userRepository, IGameFactory gameFactory, IGameRepository gameRepository, IGameService gameService) {
            this.userRepository = userRepository;
            this.gameFactory = gameFactory;
            this.gameRepository = gameRepository;
            this.gameService = gameService;
        }

        [Route("user/{userId}/game/create")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public Game PostCreate(Guid userId) {
            var user = userRepository.GetById(userId);
            if (user == null) {
                throw new InvalidDataException("User does not exist.");
            }

            var game = gameFactory.Create(user);
            gameRepository.Save(game);
            return game;
        }

        [Route("user/{userId}/game/{gameId}/save")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public Game PostSave(Guid userId, Guid gameId, [FromBody]Game game) {
            var savedGame = gameRepository.GetById(gameId);
            savedGame.Drawing = game.Drawing;
            gameRepository.Save(savedGame);
            return gameService.GetRandomGame(gameId, userId);
        }
    }
}