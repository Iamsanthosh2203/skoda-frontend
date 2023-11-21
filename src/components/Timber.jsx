import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import image100 from '../assets/images/imagetim2.jpeg'
function Timber() {
    return (
        <div>

            <Container fluid>
                <Row className='timbers-row ' xs={1} md={2}>
                    <Col></Col>
                    <Col className='p-5'>
                        <div className="about text-start p-5">
                            <div className="about-us my-3">
                                Timbers
                            </div>
                            <div className="about-para text-white my-5">
                            At Skoda Home Decors, we understand the vital role that timber plays in enhancing the beauty and functionality of your living spaces. Timber, with its timeless appeal and remarkable versatility, is a cornerstone of interior design. In the "Timbers" section of our showroom, we invite you to discover the natural warmth, elegance, and durability that timber can bring to your home.                            </div>
                            <div className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="102" height="16" viewBox="0 0 102 16" fill="none">
                                    <path d="M101.707 8.70711C102.098 8.31658 102.098 7.68342 101.707 7.29289L95.3431 0.928932C94.9526 0.538408 94.3195 0.538408 93.9289 0.928932C93.5384 1.31946 93.5384 1.95262 93.9289 2.34315L99.5858 8L93.9289 13.6569C93.5384 14.0474 93.5384 14.6805 93.9289 15.0711C94.3195 15.4616 94.9526 15.4616 95.3431 15.0711L101.707 8.70711ZM0 9H101V7H0V9Z" fill="#F1F1F1" />
                                </svg>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className='my-5'>


                <div className="we w-50 mx-auto my-5">
                Exploring Timbers at Skoda Home Decors
                </div>
                <div className="my-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="102" height="16" viewBox="0 0 102 16" fill="none">
                        <path d="M101.707 8.70711C102.098 8.31658 102.098 7.68342 101.707 7.29289L95.3431 0.928932C94.9526 0.538408 94.3195 0.538408 93.9289 0.928932C93.5384 1.31946 93.5384 1.95262 93.9289 2.34315L99.5858 8L93.9289 13.6569C93.5384 14.0474 93.5384 14.6805 93.9289 15.0711C94.3195 15.4616 94.9526 15.4616 95.3431 15.0711L101.707 8.70711ZM0 9H101V7H0V9Z" fill="#191B1D" />
                    </svg>
                </div>
                <div className="lorem my-5">
                Our collection of timbers encompasses a variety of species, each with its own distinctive charm. From the classic and refined beauty of oak to the warm and earthy tones of walnut, you'll find timbers that are suitable for diverse applications. Whether you're looking to create a cozy and inviting living room, a sleek and modern kitchen, or a rustic bedroom retreat, our timber options can be customized to suit your vision.                </div>
                
                <Row xs={1} md={2} className='my-5'>
                    <Col className=' m-0 p-0'>
                        <img width={'100%'} height={'500px'} src={image100} alt="" />
                    </Col>
                    <Col className='bg-dark text-start text-white p-5 m-0'>
                        <div className="our text-start mb-4">Customization for Your Unique Space</div>
                        <div className="dots my-2 ">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#F1F1F1" />
                            </svg></span>
                            <span className=''>
                                {' '}  Make your design style
                            </span>
                        </div>
                        <div className="dots my-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#F1F1F1" />
                            </svg></span>
                            <span className=''>
                                {' '}  Comfort your home
                            </span>
                        </div>
                        <div className="dots my-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#F1F1F1" />
                            </svg></span>
                            <span className=''>
                                {' '} New look, new taste
                            </span>
                        </div>
                        <div className="dots my-2">
                            <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                <circle cx="7.5" cy="7.5" r="7.5" fill="#F1F1F1" />
                            </svg></span>
                            <span className=''>
                                {' '} Happy sale furniture
                            </span>
                        </div>
                        <div className=" mt-5">
                        We understand that every home is unique, and your timber choices should reflect your personal style and requirements. That's why we offer customization options, allowing you to select the type of timber, finish, and design elements that best suit your needs.                        </div>
                    </Col>
                </Row>

            </Container>


        </div>
    )
}

export default Timber
