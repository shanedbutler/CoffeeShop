﻿using CoffeeShop.Models;
using System.Collections.Generic;

namespace CoffeeShop.Repositories
{
    public interface IBeanVarietyRepository
    {
        List<BeanVariety> GetAll();
        BeanVariety Get(int id);
        void Add(BeanVariety variety);
        void Update(BeanVariety variety);
        void Delete(int id);
    }
}
