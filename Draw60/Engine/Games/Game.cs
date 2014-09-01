using System;
using System.Collections.Generic;
using Engine.DataAccess;
using Engine.Users;

namespace Engine.Games {
    public class Game : Tracked {
        public Game() {
            Participants = new List<User>();
        }

        public string Drawing { get; set; }
        public List<User> Participants { get; set; }
    }
}