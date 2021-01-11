import React from 'react';
import useSticky from './../../component/hooks/useSticky.js';
import Navbar from './../../component/Navbar/Navbar';
import { Table } from 'antd';
import Footer from './../../component/Footer/Footer';
import { NavLink } from 'react-router-dom';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
const data1 = [
  {
    id: '#2605',
    order: 'Your Order',
    status: 'Ongoing...',
  },
  {
    id: '#1347',
    order: '',
    status: 'Delivered 12/08/2020',
  },
  {
    id: '#913',
    order: '',
    status: 'Delivered 7/02/2020',
  }
];

const data2 = [
    {
      id: '+84 934 523 337',
      order: 'Contact',
      status: 'Change',
    },
    {
      id: '16/643 Pham Van Dong st. Co Nhue 1, Bac Tu Liem, Hanoi',
      order: 'Contact',
      status: 'Delivered 12/08/2020',
    }
  ];
  
const Profile = () => {
  const { isSticky, element } = useSticky();
  const columns = [
    {
      dataIndex: 'order',
      key: 'order',
      render : item =>{
          return(
            <div style={{padding: '0 20px'}}>
          <p style={{fontWeight: 'bold',fontFamily: 'Lato'}}>{item}</p>
          </div>
          )
      }
    },
    {
      dataIndex: 'id',
      key: 'id',
      render: item =>{
          return(
            <div style={{minWidth: '25em'}}>
              <NavLink to="/order-status">
                <p style={{color:'#000'}}>{item}</p>
                </NavLink>
              </div>
          )
      }
    },
    {
      dataIndex: 'status',
      key: 'status',
      render : item =>{
        return(
        <p style={{fontWeight: 'bold',fontFamily: 'Lato'}}>{item}</p>
        )
    }
    },
  ];

  const columns2 = [
    {
      dataIndex: 'order',
      key: 'order',
      render : item =>{
          return(
            <div style={{padding: '0 20px'}}>
          <p style={{fontWeight: 'bold',fontFamily: 'Lato'}}>{item}</p>
          </div>
          )
      }
    },
    {
      dataIndex: 'id',
      key: 'id',
      render: item =>{
          return(
              <div style={{minWidth: '25em'}}>
                <p>{item}</p>
              </div>
          )
      }
    },
    {
      dataIndex: 'status',
      key: 'status',
      render : item =>{
        return(
        <p style={{fontWeight: 'bold',fontFamily: 'Lato',color:'#FF9592',textDecoration:'underline'}}>{item}</p>
        )
    }
    },
  ];

  return (
    <div>
      <Navbar sticky={isSticky} />
      <main style={{ backgroundColor: '#FAFAFA' }}>
        <section className="welcome">
          <div
            ref={element}
            style={{
              display: 'flex',
              height: '100%',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              paddingTop: '120px',
            }}
          >
            <p
              style={{ fontSize: '48px', fontWeight: '700', marginTop: '50px' }}
            >
              WELCOME BACK
            </p>
            <div
              style={{
                marginTop: '54px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <img
                src="./image/Product/productAvt.png"
                alt="avatar"
                style={{
                  width: '108px',
                  height: '108px',
                  borderRadius: '108px',
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginLeft: '20px',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                  <p style={{ fontWeight: '700' }}>Veri beautiful lady</p>
                  <p
                    style={{
                      textDecoration: 'underline',
                      color: '#FF9592',
                      fontWeight: 'bold',
                      fontFamily: 'Lato',
                      marginLeft: '15px',
                    }}
                  >
                    Change
                  </p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: '15px',
                  }}
                >
                  <p style={{ fontWeight: 'bold', fontFamily: 'Lato' }}>
                    sample@gmail.com
                  </p>
                  <p
                    style={{
                      textDecoration: 'underline',
                      color: '#FF9592',
                      fontWeight: 'bold',
                      fontFamily: 'Lato',
                      marginLeft: '15px',
                    }}
                  >
                    Change
                  </p>
                </div>
              </div>
            </div>
            <Table
              columns={columns}
              dataSource={data1}
              pagination={false}
              rowKey={(record) => record.id}
            />
            <div style={{marginTop: '40px'}}>
            <Table
              columns={columns2}
              dataSource={data2}
              pagination={false}
              rowKey={(record) => record.id}
            />
            </div>
            <div style={{marginTop: '40px',paddingBottom: '200px',display:'flex',flexDirection:'row',alignItems:'center'}}>
                <o>Need help? <soan style={{textDecoration:'underline',color: '#FF9592',marginRight:'15em'}}>Contact us</soan></o>
                <div
              style={{
                width: '236px',
                height:'50px',
                backgroundColor: '#FF9592',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontWeight: '700',
                  fontSize: '14px',
                  color: '#000',
                }}
              >
                   Continue shopping
              </span>
            </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
