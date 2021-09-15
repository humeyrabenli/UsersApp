using DataAccess.Abstract;
using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete
{
    public class EfUserDal : EfEntityRepositoryBase<User, UsersAppContext>, IUserDal
    {
        public List<User> GetUsersByName(string name)
        {
            using(UsersAppContext context=new UsersAppContext())
            {
                var result = context.Set<User>().Where(x => x.FirstName.Contains(name) || x.LastName.Contains(name));

                return result.ToList();

            }
        }
    }
}
