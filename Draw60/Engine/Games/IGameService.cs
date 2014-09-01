using System;

namespace Engine.Games {
    public interface IGameService {
        Game GetRandomGame(Guid gameId, Guid userId);
    }
}