using Business.Abstract;
using DataAccess.Abstract;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Business.Concrete
{
    public class UserManager : IUserService
    {
        private IUserDal _userDal;

        public UserManager(IUserDal userDal)
        {
            _userDal = userDal;
        }
        public void Add(User user)
        {
            _userDal.Add(user);
        }

        public void Delete(User user)
        {
            _userDal.Delete(user);
        }

        public IList<User> GetAll()
        {
            return _userDal.GetAll();
        }

        public User GetById(int id)
        {
            return _userDal.Get(u=>u.UserId==id);
        }

        public IList<User> GetUsersByName(string name)
        {
            return _userDal.GetUsersByName(name);
        }

        public void Update(User user)
        {
            _userDal.Update(user);
        }
    }
}
