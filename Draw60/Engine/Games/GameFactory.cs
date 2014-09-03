using System.Linq;

namespace Engine.Games {
    public class GameFactory : IGameFactory {
        public Game Create() {
            return new Game();
        }
    }
}