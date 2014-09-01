using System;
using System.Net;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using System.Web.Http.Cors;
using Engine.Users;

namespace Draw60.Controllers {
    public class UserController : ApiController {
        private readonly IUserFactory userFactory;
        private readonly IUserRepository userRepository;

        public UserController(IUserFactory userFactory, IUserRepository userRepository) {
            this.userFactory = userFactory;
            this.userRepository = userRepository;
        }

        [Route("user/create")]
        [EnableCors(origins: "*", headers: "*", methods: "*")]
        public HttpResponseMessage PostCreate() {
            var user = userFactory.Create();
            userRepository.Save(user);

            var httpResponseMessage = Request.CreateResponse(HttpStatusCode.Created);
            httpResponseMessage.Content = new ObjectContent<User>(user, new JsonMediaTypeFormatter());
            return httpResponseMessage;
        }
    }
}