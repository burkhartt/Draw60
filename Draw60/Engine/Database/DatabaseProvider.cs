namespace Engine.Database {
    public class DatabaseProvider : IDatabaseProvider {
        public dynamic Get() {
            return Simple.Data.Database.OpenConnection("Server=tcp:jwbusyi4ap.database.windows.net,1433;Database=Drawing;User ID=draw60;Password=BSFtG3vnSrKaTmZh2QXe8we5;Trusted_Connection=False;Encrypt=True;");
        }
    }
}