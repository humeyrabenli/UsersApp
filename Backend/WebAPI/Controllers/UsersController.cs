using Business.Abstract;
using Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        IUserService _userService;
        public UsersController(IUserService userService)
        {
            _userService = userService;

        }

        [HttpGet]
        public IActionResult GetAll()
        {
            return Ok(_userService.GetAll());
        }

        [HttpPost("add")]
        public void Add(User user)
        {
            if(ModelState.IsValid)
            {
                _userService.Add(user);
            }
            
            
        }

        [HttpGet("getuserbyname/{name}")]
        public IActionResult GetUsersByName(string name)
        {
            var result=_userService.GetUsersByName(name);
            return Ok(result);
        }

        [HttpPut("update/{userid}")]
        public void Update(int userid,[FromBody] User user)
        {
            user.UserId = userid;
            if (ModelState.IsValid)
            {
                _userService.Update(user);
            }
        }

        [HttpPost("delete")]
        public void Delete(User user)
        {
            _userService.Delete(user);
        }

    }
}
