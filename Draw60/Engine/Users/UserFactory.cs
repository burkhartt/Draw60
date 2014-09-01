namespace Engine.Users {
    public class UserFactory : IUserFactory {
        public User Create() {
            return new User();
        }
    }
}