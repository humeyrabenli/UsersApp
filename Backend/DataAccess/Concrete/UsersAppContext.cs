using Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Concrete
{
    public class UsersAppContext:DbContext
    {
     

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {


            optionsBuilder.UseSqlServer(@"Data Source=(localdb)\mssqllocaldb;Initial Catalog=UsersDb;Integrated Security=True");

        }

        public DbSet<User> Users { get; set; }

    }
}
