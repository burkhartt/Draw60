using Simple.Data.MongoDB;

namespace Engine.Database {
    public class DatabaseProvider : IDatabaseProvider {
        public dynamic Get() {
            return Simple.Data.Database.Opener.OpenMongo("mongodb://draw60:BSFtG3vnSrKaTmZh2QXe8we5@ds033760.mongolab.com:33760/draw60");
        }
    }
}