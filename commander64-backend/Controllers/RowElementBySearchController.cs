using System.Collections.Generic;
using commander64_backend.models;
using Microsoft.AspNetCore.Mvc;

namespace commander64_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RowElementBySearchController : ControllerBase
    {
        [HttpGet]
        public List<List<string>> Get()
        {
            List<List<string>> testData = new()
            {
                new List<string>
                {
                    "Typescript", "Boilerplate123", "export default = (): JSX.Element => { return ( ) }",
                },
                new List<string>
                {
                    "C#", "Boilerplatec#", "Hartford",
                },
                new List<string>
                {
                    "Powershell", "Boilerplateps", "Tampa"
                },
            };

            return testData;
        }
    }
}