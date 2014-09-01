using System;

namespace Engine.Games {
    public interface IGameRepository {
        void Save(Game game);
        Game GetById(Guid gameId);
    }
}