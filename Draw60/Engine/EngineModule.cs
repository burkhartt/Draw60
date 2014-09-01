using Autofac;
using Engine.Database;
using Engine.Games;
using Engine.Users;

namespace Engine {
    public class EngineModule : Module {
        protected override void Load(ContainerBuilder builder) {
            builder.RegisterType<DatabaseProvider>().As<IDatabaseProvider>();
            builder.RegisterType<UserFactory>().As<IUserFactory>();
            builder.RegisterType<UserRepository>().As<IUserRepository>();
            builder.RegisterType<GameFactory>().As<IGameFactory>();
            builder.RegisterType<GameRepository>().As<IGameRepository>();
            builder.RegisterType<GameService>().As<IGameService>();
        }
    }
}