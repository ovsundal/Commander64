using System;
using System.Collections.Generic;
using commander64_backend.models;
using Microsoft.AspNetCore.Mvc;

namespace commander64_backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GetRowElementBySearchController : ControllerBase
    {

        private static List<RowElement> testData = new()
        {
            new RowElement(){Domain = "Typescript", Description = "Boilerplate123", Snippet = "export default = (): JSX.Element => { return ( ) }"},
            new RowElement(){Domain = "C#", Description = "Boilerplatec#", Snippet = "Hartford"},
            new RowElement(){Domain = "Powershell", Description = "Boilerplateps", Snippet = "Tampa"}
        };
        
        [HttpGet]
        public IEnumerable<RowElement> Get()
        {
            return testData;
        }
    }
}