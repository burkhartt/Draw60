using System;

namespace Engine.DataAccess {
    public class Tracked {
        public Tracked() {
            CreateDate = DateTime.Now;
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }
        public DateTime CreateDate { get; set; }
        public DateTime LastModifyDate { get; set; }
    }
}