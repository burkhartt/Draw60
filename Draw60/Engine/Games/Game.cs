using System;
using Engine.DataAccess;

namespace Engine.Games {
    public class Game : Tracked {
        public Game() {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
        public string Drawing { get; set; }
    }
}