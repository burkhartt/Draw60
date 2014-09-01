using System;
using Engine.Users;

namespace Engine.Games {
    public interface IGameFactory {
        Game Create(User user);
    }
}