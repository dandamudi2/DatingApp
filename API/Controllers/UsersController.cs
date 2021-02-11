using API.Data;
using Microsoft.AspNetCore.Mvc;
using API.Entities;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System.Threading.Tasks;
using API.Controllers;
using Microsoft.AspNetCore.Authorization;

namespace Controllers
{
    
    public class UsersController: BaseApiController
    {
        private readonly DataContext _context;
        public UsersController(DataContext context){
            _context = context;
        }

        [HttpGet]
      
        public async  Task<ActionResult<IEnumerable<AppUser>>> GetUsers(){

            return await _context.Users.ToListAsync();
        }

        [HttpGet("{Id}")]
        
        public async Task<ActionResult<AppUser>> GetUserOnId(int id)
        {
            return await _context.Users.FindAsync(id);
        }



    } 
}