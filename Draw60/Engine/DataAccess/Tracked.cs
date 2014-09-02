using System;

namespace Engine.DataAccess {
    public class Tracked {
        public Tracked() {
            CreateDate = DateTime.Now;            
        }
        
        public DateTime CreateDate { get; set; }
        public DateTime LastModifyDate { get; set; }
    }
}