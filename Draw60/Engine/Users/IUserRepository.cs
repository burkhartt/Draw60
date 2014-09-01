using System;

namespace Engine.Users {
    public interface IUserRepository {
        void Save(User user);
        User GetById(Guid userId);
    }
}