﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ISoftSmart.Model.WX
{
   public class AccessTokenOpenId
    {
        public string access_token { get; set; }
        public string openid { get; set; }
        public string refresh_token { get; set; }
    }
}
