using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Abstract
{
    public interface IUserService
    {
        IList<User> GetAll();
        IList<User> GetUsersByName(string name);

        User GetById(int id);

        void Add(User user);
        void Update(User user);
        void Delete(User user);

    }
}
