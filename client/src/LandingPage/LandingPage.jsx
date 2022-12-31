
import './LandingPage.scss';

import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Highlight from '../Highlight/Highlight'
import Point from '../Point/Point'
import Footer from '../Footer/Footer'
import './LandingPage.scss'

const LandingPage = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>B&A</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="B&amp;A" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="home-header">
        <div className="home-hero">
          <div className="home-content">
            <h1 className="home-title">
              B &amp; A International Educational Courses For German Language
            </h1>
            <span className="home-caption">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </span>
            <div className="home-hero-buttons">
              <div className="home-i-o-s-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-zmzg.svg"
                  className="home-apple"
                />
                <span className="home-caption1">Download for iOS</span>
              </div>
              <div className="home-android-btn">
                <img
                  alt="pastedImage"
                  src="/playground_assets/pastedimage-ld65.svg"
                  className="home-android"
                />
                <span className="home-caption2">Download for Android</span>
              </div>
            </div>
          </div>
          <div className="home-images">
            <div className="home-column">
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxsZWFybmluZ3xlbnwwfHx8fDE2NzI0OTQ2MjQ&amp;ixlib=rb-4.0.3&amp;w=300"
                className="home-pasted-image"
              />
            </div>
            <div className="home-column1">
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxsZWFybnxlbnwwfHx8fDE2NzI0OTA5OTc&amp;ixlib=rb-4.0.3&amp;w=500"
                className="home-pasted-image1"
              />
              <img
                alt="pastedImage"
                src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxsZWFybnxlbnwwfHx8fDE2NzI0OTA5OTc&amp;ixlib=rb-4.0.3&amp;w=500"
                className="home-pasted-image2"
              />
            </div>
            <img
              alt="pastedImage"
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDh8fGxlYXJufGVufDB8fHx8MTY3MjQ5MDk5Nw&amp;ixlib=rb-4.0.3&amp;w=400"
              className="home-pasted-image3"
            />
          </div>
        </div>
      </div>
      <div className="home-video">
        <div className="home-content1">
          <div className="home-header1">
            <h2 className="home-text">
              Built specifically for people who want faster German Learning
            </h2>
          </div>
          <div className="home-video-container">
            <video
              src="https://www.youtube.com/watch?v=MRQ69XeDxVk"
              loop
              muted
              poster="/playground_assets/pastedimage-09r-900w.png"
              autoPlay
              className="home-video1"
            ></video>
            <div className="home-heading-container">
              <div className="home-heading">
                <span className="home-text01">
                  Build your dream career with us!
                </span>
                <span className="home-text02">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </span>
              </div>
              <div className="home-explore">
                <span className="home-text03">Explore our Courses -&gt;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sections">
        <div className="home-section">
          <div className="home-image">
            <div className="home-image-highlight">
              <span className="home-text04">
                <span>B&amp;A App always on your in Hand</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-content2">
            <h2 className="home-text07">Everything you get with A&amp;B App</h2>
            <Highlight
              Title="Lorem ipsum dolor sit amet, consectetur "
              Description="Sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud"
            ></Highlight>
            <Highlight
              Title="Lorem ipsum dolor sit amet, consectetur "
              Description="Sed do eiusmod tempor incididunt ut labore et dolore"
            ></Highlight>
            <div className="home-explore1">
              <span>Explore our Courses -&gt;</span>
            </div>
          </div>
        </div>
        <div className="home-section1">
          <div className="home-content3">
            <div className="home-heading1">
              <h2 className="home-text09">Keep track your Answers</h2>
              <span className="home-text10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </span>
            </div>
            <div className="home-content4">
              <div className="home-points">
                <Point></Point>
                <Point text="Quis nostrud exercitation ullamco"></Point>
                <Point text="Reprehenderit qui in ea voluptate velit"></Point>
              </div>
              <Link to="/" className="home-navlink">
                <div className="home-get-started">
                  <span className="home-sign-up">Get started now</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="home-image1"></div>
        </div>
      </div>
      <div className="home-f-a-q">
        <div className="home-content5">
          <div className="home-header2">
            <div className="home-tag">
              <span className="home-text11">
                <span>FAQ</span>
                <br></br>
              </span>
            </div>
            <div className="home-heading2">
              <h2 className="home-text14">Frequently Asked Questions</h2>
            </div>
          </div>
          <div className="home-rows">
            <div className="home-column2">
              <div className="Question">
                <span className="home-title1">
                  B&amp;A Course, Who we are ?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia deserunt mollit anim id est laborum.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </div>
              <div className="Question">
                <span className="home-title2">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description1">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Excepteur sint occaecat cupidatat non proident, sunt
                    in culpa qui officia deserunt mollit anim id est laborum.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    tempor incididunt ut labore et dolore magna aliqua.
                    Excepteur sint occaecat
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
            </div>
            <div className="home-column3">
              <div className="home-question2 Question">
                <span className="home-title3">
                  What we do ?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
              <div className="home-question3 Question">
                <span className="home-title4">
                  What is sit amet, consectetur adipiscing elit, sed do?
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-description3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-get-started1">
        <div className="home-content6">
          <div className="home-heading3">
            <h2 className="home-text18">
              Get started with B&amp;A Course now!
            </h2>
            <span className="home-text19">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore magna.
            </span>
          </div>
          <div className="home-hero-buttons1">
            <div className="home-i-o-s-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-zmzg.svg"
                className="home-apple1"
              />
              <span className="home-caption3">Download for iOS</span>
            </div>
            <div className="home-android-btn1">
              <img
                alt="pastedImage"
                src="/playground_assets/pastedimage-ld65.svg"
                className="home-android1"
              />
              <span className="home-caption4">Download for Android</span>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default LandingPage