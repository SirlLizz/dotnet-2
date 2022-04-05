﻿using AccountingSystem.Model;
using System.Collections.Generic;

namespace AccountingSystem.Repository
{
    public interface IOrderRepository
    {
        IList<Order> GetOrders();
        Order GetOrder(int id);
        double GetAllPrice();
        int ChangeOrder(int id, Order order);
        int PatchStatus(int status, Order order);
        int AddOrder(Order customer);
        int RemoveOrder(int id);
    }
}
