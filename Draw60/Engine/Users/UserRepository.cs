using System;
using Engine.Database;

namespace Engine.Users {
    public class UserRepository : IUserRepository {
        private readonly IDatabaseProvider databaseProvider;

        public UserRepository(IDatabaseProvider databaseProvider) {
            this.databaseProvider = databaseProvider;
        }

        public void Save(User user) {
            var db = databaseProvider.Get();
            db.User.Upsert(user);
        }

        public User GetById(Guid userId) {
            var db = databaseProvider.Get();
            return (User)db.User.FindById(userId);
        }
    }
}