using System.Linq;
using Engine.Users;

namespace Engine.Games {
    public class GameFactory : IGameFactory {
        public Game Create(User user) {
            return new Game {
                Participants = new[] {user}.ToList()
            };
        }
    }
}