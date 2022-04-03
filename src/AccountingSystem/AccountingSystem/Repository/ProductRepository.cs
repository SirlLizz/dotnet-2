﻿using AccountingSystem.Connection;
using AccountingSystem.Model;
using NHibernate;
using System.Collections.Generic;

namespace AccountingSystem.Repository
{
    public class ProductRepository : IProductRepository
    {

        public IList<Product> GetProducts()
        {
            ICriteria criteria = NHibernateSession.OpenSession().CreateCriteria<Product>();
            return criteria.List<Product>();
        }

        public Product GetProduct(int id)
        {
            return NHibernateSession.OpenSession().Get<Product>(id);
        }

        public int AddProduct(Product product)
        {
            try
            {
                ISession session = NHibernateSession.OpenSession();
                using (session.BeginTransaction())
                {
                    session.Save(product);
                    session.GetCurrentTransaction().Commit();
                }
                return product.ProductId;
            }
            catch
            {
                return -1;
            }
        }

        public int ChangeProduct(int id, Product newProduct)
        {
            try
            {
                ISession session = NHibernateSession.OpenSession();
                Product product = session.Get<Product>(id);
                product.Name = newProduct.Name;
                product.Price = newProduct.Price;
                product.Date = newProduct.Date;
                using (session.BeginTransaction())
                {
                    session.Save(product);
                    session.GetCurrentTransaction().Commit();
                }
                return id;
            }
            catch
            {
                return -1;
            }

        }

        public int RemoveProduct(int id)
        {
            try
            {
                ISession session = NHibernateSession.OpenSession();
                using (session.BeginTransaction())
                {
                    session.Delete(session.Get<Product>(id));
                    session.GetCurrentTransaction().Commit();
                }
                return id;
            }
            catch
            {
                return -1;
            }
        }
    }
}