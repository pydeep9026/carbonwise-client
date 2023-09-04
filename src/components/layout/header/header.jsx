import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import cart from '../../../images/cart.svg';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { AppstoreOutlined,UserOutlined,HeartOutlined,SwapOutlined,ContactsOutlined,DatabaseOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import "./header.css"

const Header = () => {

    const items = [
        {
          label: <NavLink  to="/">
          Home
      </NavLink>,
          key: 'Home',
          icon: <HomeOutlined />,
        },
        {
          label:  <NavLink  to="/product">
          Store
      </NavLink>,
          key: 'Store',
          icon: <AppstoreOutlined />,
        },
        {
          label: <NavLink  to="/">
          Catagories
      </NavLink>,
          key: 'SubMenu',
          icon: <DatabaseOutlined />,
          children: [
            {
              type: 'group',
              label: 'Item 1',
              children: [
                {
                  label: 'Option 1',
                  key: 'setting:1',
                },
                {
                  label: 'Option 2',
                  key: 'setting:2',
                },
              ],
            },
            {
              type: 'group',
              label: 'Item 2',
              children: [
                {
                  label: 'Option 3',
                  key: 'setting:3',
                },
                {
                  label: 'Option 4',
                  key: 'setting:4',
                },
              ],
            },
          ],
        },
        {
          label: (
            <NavLink  to="/contact">
                                        Contact
                                    </NavLink>
          ),
          key: 'contact',
          icon: <ContactsOutlined />,
        },
      ];


      const ite2 = [
        {
          key: '1',
          icon:<SwapOutlined />,
          label: (
            <NavLink
                                        to="/login"
                                        className="d-flex align-items-center gap-10 text-black menu-item"
                                    ><UserOutlined />
                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                            login <br /> /signup
                                        </p>
                                    </NavLink>
          ),
        },
        {
          key: '2',
          label: (
            <NavLink
              to="/compare-product"
               className="d-flex align-items-center gap-10 text-black menu-item" ><SwapOutlined />
              <p className="mb-0" style={{ fontSize: '14px' }}>
               Compare <br /> Products
              </p>
             
             </NavLink>
          ),
          icon: <SmileOutlined />,
          disabled: true,
        },
        {
          key: '3',
          label: (
            <NavLink
                                        to="/wishlist"
                                        className="d-flex align-items-center gap-10 text-=black menu-item"
                                    >
                                        <HeartOutlined style={{color:"black"}} />
                                        <p className="mb-0" style={{ fontSize: '14px' }}>
                                            Favourite <br />/Wishlist
                                        </p>
                                    </NavLink>
          ),
        },
        {
          key: '4',
          danger: true,
          label: 
          <NavLink
                                        to="/cart"
                                        className="d-flex align-items-center gap-10 text-black "
                                    >
                                        <img src={cart} alt="cart" />
                                        <div
                                            className="d-flex flex-column gap-10"
                                            style={{ fontSize: '14px' }}
                                        >
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className="mb-0">$ 500</p>
                                        </div>
                                    </NavLink>,
        },
      ];

      const menu1 = (
        <Menu >
          {ite2.map((item) => (
            <Menu.Item key={item.key}>{item.label}</Menu.Item>
          ))}
        </Menu>
      );

   


        const [current, setCurrent] = useState('Home');
        const onClick = (e) => {
          console.log('click ', e);
          setCurrent(e.key);
        };
      


    return (
        <>
            <header className="header-top-strip py-2">
            <div class="custom-container">
    <div class="custom-row">
        <div class="custom-col">
            <p class="custom-text">Free Shipping Over 1000 & Free Returns</p>
        </div>
        <div class="custom-col custom-col-right">
            <p class="custom-text custom-text-right">
                Hotline:
                <a class="custom-link" href="tel:0989831609">09026xxxxx</a>
            </p>
        </div>
    </div>
</div>

            </header>

            <header className="header-upper py-2" style={{display:"flex",flexDirection:"row"}}>
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white" style={{ fontSize: '28px' }}>
                                    CarbonWise.  
                                </Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search Product ..."
                                    aria-label="Search Product ..."
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text" id="basic-addon2">
                                    <BsSearch className="fs-6" />
                                </span>
                                
                            </div>    
                        </div>
                        <div className="col-5">
                        <Dropdown overlay={menu1}>
                         <a onClick={(e) => e.preventDefault()}>
                         <Space style={{fontSize:"21px"}}  ><UserOutlined/> <DownOutlined /></Space></a>
                         </Dropdown>
                         </div>
                    </div>
                    
                </div>
            </header>



            <header className="header-bottom py-2">
                <div className="container-xxl">
                <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}  />
                </div>
            </header>
        </>
    );
};

export default Header;