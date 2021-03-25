import React from 'react'
import Button from 'react-bootstrap/Button'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import './Home.css'




const Home = () => {
  return (
    <div className="landing_parent">
      <div className="photo_hero">
        <h1 className="photo_hero_header">Find the best local tutors to <br/>impact your student's success.</h1>
        <Button href='#student-info' className='photo_hero_button'>Find A Tutor</Button>
      </div>
      <div className="CardColumns">
        <div className='cards_background'>
          <h4 className="card_header">What others said about our services</h4>
          <CardColumns type="text">
            <Card className="testomonials">
              <p className="card_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </Card>
            <Card className="testomonials">
              <p className="card_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Card>
            <Card className="testomonials">
              <p className="card_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Card>
            <Card className="testomonials">
              <p className="card_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Card>
            <Card className="testomonials">
              <p className="card_p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Card>
          </CardColumns>
          <div  className="card_button_div">
            <Button className="card_button">Who We Are</Button>
          </div>
        </div>
      </div>
      <ListGroup as='div' horizontal='md' className='need_help'>
        <ListGroup.Item style={{ border: 'none', backgroundColor: '#F5F5F5' }} className='need_help_header'>
          <h3>Need Help?</h3>
          <p>
          For more info, you can contact directly at <br />xxxx@connectthedots.com
          </p>
        </ListGroup.Item>
        <ListGroup.Item style={{ border: 'none', backgroundColor: '#F5F5F5' }}>
          <Button className='FAQ'>FAQ</Button>
        </ListGroup.Item>
      </ListGroup>
    </div>
  )
}

export default Home
