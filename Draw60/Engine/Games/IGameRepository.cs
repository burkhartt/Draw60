using System;
using Engine.Users;

namespace Engine.Games {
    public interface IGameRepository {
        void Save(Game game, User user);
        Game GetById(Guid gameId);
    }
}