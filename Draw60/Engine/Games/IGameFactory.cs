using System;

namespace Engine.Games {
    public interface IGameFactory {
        Game Create();
    }
}