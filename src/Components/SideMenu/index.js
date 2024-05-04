import {
  AppstoreOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
  UserOutlined,
  LogoutOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SideMenu() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");
  const [isStockOpen, setIsStockOpen] = useState(false); 

  const [isEmployeeOpen, setIsEmployeeOpen] = useState(false); // State to track "STOCK" group openness
  const navigate = useNavigate();

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const handleStockGroupClick = () => {
    setIsStockOpen(!isStockOpen); // Toggle "STOCK" group openness
  };

  const handleEmployeeGroupClick = () => {
    setIsEmployeeOpen(!isStockOpen); // Toggle "STOCK" group openness
  };


  // Update handleStockItemClick to close the group when an item is clicked
  const handleStockItemClick = () => {
    setIsStockOpen(false);
  };

  const handleEmployeeItemClick = () => {
    setIsEmployeeOpen(false);
  };


  const handleLogout = () => {
    navigate("/login"); // Redirect to the login page after logout
  };

  return (
    <div className="SideMenu" style={{ display: "flex", flexDirection: "column" }}>
      <Menu
        className="SideMenuVertical"
        mode="vertical"
        onClick={(item) => {
          if (item.key !== "/stock") {
            navigate(item.key);
          }
        }}
        selectedKeys={[selectedKeys]}
      >
        <Menu.Item key="/" icon={<AppstoreOutlined />}>
          HOME
        </Menu.Item>
        <Menu.Item key="/production" icon={<UserOutlined />}>
          PRODUCTION
        </Menu.Item>
        <Menu.Item
          key="/stock"
          icon={<ShopOutlined />}
          onClick={handleStockGroupClick}
          style={{ color: "white" }}
        >
          STOCK {isStockOpen ? <UpOutlined /> : <DownOutlined />}
        </Menu.Item>
        {isStockOpen && ( 
          <Menu.ItemGroup>
            <Menu.Item key="/stock/category1" onClick={handleStockItemClick}>
              •ADD STOCK
            </Menu.Item>
            <Menu.Item key="/stock/category2" onClick={handleStockItemClick}>
              •VIEW STOCK
            </Menu.Item>
            <Menu.Item key="/stock/category3" onClick={handleStockItemClick}>
              •ADD SUBCATEGORY
            </Menu.Item>
          </Menu.ItemGroup>
        )}
        
        <Menu.Item
          key="/employee"
          icon={<ShopOutlined />}
          onClick={ handleEmployeeGroupClick }
        
        >
          EMPLOYEES {isEmployeeOpen ? <UpOutlined /> : <DownOutlined />}
        </Menu.Item>
        {isEmployeeOpen && ( 
          <Menu.ItemGroup>
            <Menu.Item key="/employee/addemployee" onClick={ handleEmployeeItemClick}>
              •ADD EMPLOYEE
            </Menu.Item>
            <Menu.Item key="/employee/viewemployee" onClick={ handleEmployeeItemClick}>
              •VIEW EMPLOYEE
            </Menu.Item>
            
          </Menu.ItemGroup>
        )}

        
        <Menu.Item key="/sales" icon={<ShopOutlined />}>
          SALES
        </Menu.Item>

        {/* Add some space */}
     
      
        <Menu.Item
          key="/logout"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
          style={{ color: "red" }}
        >
          LOGOUT
        </Menu.Item>
        
      </Menu>
    </div>
  );
}

export default SideMenu;
