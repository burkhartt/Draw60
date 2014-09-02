using System;
using Engine.DataAccess;

namespace Engine.Users {
    public class User : Tracked {
        public User() {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
    }
}