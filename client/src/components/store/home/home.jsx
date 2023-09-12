import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import moment from 'moment';
import './home.css';
import { Image,Carousel ,Popover, Badge } from 'antd';
import gatividhi from '../../../images/gatividhi.png';
import { getAllProducts } from '../../../redux/slice/productSlice';
import ReactStars from 'react-rating-stars-component';
import prodcompare from '../../../images/prodcompare.svg';
import wish from '../../../images/wish.svg';
import watch2 from '../../../images/watch-2.jpg';
import addcart from '../../../images/add-cart.svg';
import view from '../../../images/view.svg';
import { addToWishlist } from '../../../redux/slice/productSlice';
import badgead from '../../../images/rewardad.png';
import goldbadge from '../../../images/goldbadge.png';
import silverbadge from '../../../images/silverbadge.png';
import bronzebadge from '../../../images/bronzebadge.png';
import summersale from '../../../images/CarbonwisePOSTER.png';
import zerocarbonlogo from '../../../images/zerocarbonlogo.png'
import brand1 from '../../../images/brands/brand-01.png';
import brand2 from '../../../images/brands/brand-02.png';
import brand3 from '../../../images/brands/brand-03.png';
import brand4 from '../../../images/brands/brand-04.png';
import brand5 from '../../../images/brands/brand-05.png';
import brand6 from '../../../images/brands/brand-06.png';
import brand7 from '../../../images/brands/brand-07.png';













const content = (
    <div>
      <p>This badge proudly adorns products that have achieved a remarkable feat – they are carbon neutral.</p>
    </div>
  );






const contentStyle = {
    height: '50vh',
    width: '100%',
    color: '#fff',
    background: '#364d79', 
    borderradius:'10px' 
  };

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const wishlist = (id) => {
        dispatch(addToWishlist(id));
    };

    const blogState = useSelector((state) => state?.blog?.blogs);
    const productState = useSelector((state) => state?.product?.products);

    useEffect(() => {
        getProducts();
    }, []);


    console.log(productState);

    const getProducts = () => {
        dispatch(getAllProducts());
    };

    return (
        <div className='home-container'>


            <section className='carausel-ads1'>
            <div className='carauselads' >
            <Carousel  autoplay>
    <div  >
        <img style={contentStyle} src={summersale} alt="sale" />
    </div>
    <div  >
        <img style={contentStyle} src={badgead} alt="sale" />
    </div>
    <div  >
        <img style={contentStyle} src={summersale} alt="sale" />
    </div>
    <div  >
        <img style={contentStyle} src={summersale} alt="sale" />
    </div>
   
  </Carousel>
            </div>
            </section>






            <div >
                <div>
                    <div className="section-heading">
                        <h3 >Featured Collection</h3>
                    </div>
                    <div className="productsgrid">
                    {productState &&
                        productState?.map((item, index) => {
                            if (item?.tags === 'featured') {
                                return (
                                    <div key={index}>
                                        <div
                                            className="product-card"
                                        >
                                            <div className="wishlist-icon">
                                                <button
                                                    onClick={(e) => {
                                                        wishlist(item?._id);
                                                    }}
                                                >
                                                    <img src={wish} alt="wishlist" />
                                                </button>
                                            </div>
                                            <Badge.Ribbon text="50% Off" color="green" style={{position:"absolute",right:"-14px"}}>

                                            </Badge.Ribbon>
                                            

                                            <div className='zerocarbon'>
                                            <Popover content={content} title="Carbon Nuetral Product">
                                                <img src={zerocarbonlogo} alt="zerocarbon" />
                                                </Popover>
                                                </div>

                                            <div className="product-image">
                                                <img
                                                    src={item?.images[0]}
                                                    className="product-imagee"
                                                    alt="product"
                                                    width={260}
                                                />
                                                <div className="product-imagee">
                                                <Image.PreviewGroup>
                                                <Image
                                                 width={160}
                                                 src={watch2}/>
                                                 </Image.PreviewGroup>
                                                 </div>
                                            </div>


                                            <div className="product-details">
                                                <h6 className="brand">{item?.brand}</h6>
                                                <h5 className="product-title">{item?.title}</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={item?.totalrating.toString()}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p className="price">${item?.price}</p>
                                            </div>

                                            <div className="action-bar">
                                                <div className="action-barit">
                                                    <button >
                                                        <img src={prodcompare} alt="compare" />
                                                    </button>
                                                    <button >
                                                        <img
                                                            onClick={() =>
                                                                navigate('/product/' + item?._id)
                                                            }
                                                            src={view}
                                                            alt="view"
                                                        />
                                                    </button>
                                                    <button >
                                                        <img src={addcart} alt="addcart" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                        </div>
                </div>
            </div>



            <div >
                <div>
                    <div className="section-heading">
                        <h3 >Popular Collection</h3>
                    </div>
                    <div className="productsgrid">
                    {productState &&
                        productState?.map((item, index) => {
                            if (item?.tags === 'popular') {
                                return (
                                    <div key={index}>
                                        <div
                                            className="product-card"
                                        >
                                            <div className="wishlist-icon">
                                                <button
                                                    onClick={(e) => {
                                                        wishlist(item?._id);
                                                    }}
                                                >
                                                    <img src={wish} alt="wishlist" />
                                                </button>
                                            </div>
                                            <Badge.Ribbon text="50% Off" color="green" style={{position:"absolute",right:"-14px"}}>

                                            </Badge.Ribbon>
                                            

                                            <div className='zerocarbon'>
                                            <Popover content={content} title="Carbon Nuetral Product">
                                                <img src={zerocarbonlogo} alt="zerocarbon" />
                                                </Popover>
                                                </div>

                                            <div className="product-image">
                                                <img
                                                    src={item?.images[0]}
                                                    className="product-imagee"
                                                    alt="product"
                                                    width={260}
                                                />
                                                <div className="product-imagee">
                                                <Image.PreviewGroup>
                                                <Image
                                                 width={160}
                                                 src={watch2}/>
                                                 </Image.PreviewGroup>
                                                 </div>

                                            </div>

                                            <div className="product-details">
                                                <h6 className="brand">{item?.brand}</h6>
                                                <h5 className="product-title">{item?.title}</h5>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={item?.totalrating.toString()}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <p className="price">${item?.price}</p>
                                            </div>

                                            <div className="action-bar">
                                                <div className="action-barit">
                                                    <button >
                                                        <img src={prodcompare} alt="compare" />
                                                    </button>
                                                    <button >
                                                        <img
                                                            onClick={() =>
                                                                navigate('/product/' + item?._id)
                                                            }
                                                            src={view}
                                                            alt="view"
                                                        />
                                                    </button>
                                                    <button >
                                                        <img src={addcart} alt="addcart" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                        </div>
                </div>
            </div>




                    <div >
                    <div className="section-heading" style={{marginBottom:"-30px",marginTop:"30px"}}>
                        <h3 >Our trusted Brands</h3>
                    </div>
                        <div >
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src={brand1} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={brand2} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={brand3} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={brand4} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={brand5} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={brand6} alt="brand" />
                                </div>
                                <div className="mx-4 w-25">
                                    <img src={brand7} alt="brand" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
            
            




        </div>
    );
};

export default Home;
