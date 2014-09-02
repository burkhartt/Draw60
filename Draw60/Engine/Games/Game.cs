using System;
using System.Collections.Generic;
using Engine.DataAccess;
using Engine.Users;

namespace Engine.Games {
    public class Game : Tracked {
        public Game() {
            Participants = new List<User>();
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
        public string Drawing { get; set; }
        public List<User> Participants { get; set; }
    }
}