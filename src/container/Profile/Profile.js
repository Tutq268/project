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
  },
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
  },
];

const Profile = () => {
  const { isSticky, element } = useSticky();
  const columns = [
    {
      dataIndex: 'order',
      key: 'order',
      render: (item) => {
        return (
          <div style={{ padding: '0 20px' }}>
            <p  className="fontLato" style={{ fontWeight: '300', fontFamily: 'Lato' }}>{item}</p>
          </div>
        );
      },
    },
    {
      dataIndex: 'id',
      key: 'id',
      render: (item) => {
        return (
          <div style={{ minWidth: '25em' }}>
            <a href="/order-status">
              <p style={{ color: '#000',fontWeight:'400' }}>{item}</p>
            </a>
          </div>
        );
      },
    },
    {
      dataIndex: 'status',
      key: 'status',
      render: (item) => {
        return <p  className="fontLato" style={{ fontWeight: '300', fontFamily: 'Lato',color:'#565556' }}>{item}</p>;
      },
    },
  ];

  const columns2 = [
    {
      dataIndex: 'order',
      key: 'order',
      render: (item) => {
        return (
          <div style={{ padding: '0 20px' }}>
            <p className="fontLato" style={{ fontWeight: '300', fontFamily: 'Lato' }}>{item}</p>
          </div>
        );
      },
    },
    {
      dataIndex: 'id',
      key: 'id',
      render: (item) => {
        return (
          <div style={{ minWidth: '25em' }}>
            <p style={{fontWeight:'400'}}>{item}</p>
          </div>
        );
      },
    },
    {
      dataIndex: 'status',
      key: 'status',
      render: (item) => {
        return (
          <p
          className="fontLato"
            style={{
              fontWeight: '300',
              fontFamily: 'Lato',
              color: '#FF9592',
              textDecoration: 'underline',
            }}
          >
            {item}
          </p>
        );
      },
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
              style={{
                fontSize: '48px',
                fontWeight: '700',
                marginTop: '50px',
                fontFamily: 'Playfair Display',
              }}
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
                marginBottom:'60px'
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
                    className="fontLato"
                    style={{
                      textDecoration: 'underline',
                      color: '#FF9592',
                      fontWeight: '300',
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
                  className="fontLato"
                    style={{
                      textDecoration: 'underline',
                      color: '#FF9592',
                      fontWeight: '300',
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
              style={{border: 'solid 1px #cecece',width:'700px'}}
            />
            <div style={{ marginTop: '40px',border: 'solid 1px #cecece' }}>
              <Table
                columns={columns2}
                dataSource={data2}
                pagination={false}
                rowKey={(record) => record.id}
                style={{width:'700px'}}
              />
            </div>
            <div
              style={{
                marginTop: '40px',
                paddingBottom: '200px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'space-between',
                width:'700px',
                alignItems: 'center',
              }}
            >
              <p>
                Need help?{' '}
                <a href="/contact"
                  style={{
                    textDecoration: 'underline',
                    color: '#FF9592',
                    marginRight: '15em',
                  }}
                >
                  Contact us
                </a>
              </p>
              <a href="/"
                className="button-main"
                style={{
                  width: '236px',
                  height: '50px',
                }}
              >
                <span
                  style={{
                    fontWeight: '700',
                    fontSize: '14px',
                  }}
                >
                  Continue shopping
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
