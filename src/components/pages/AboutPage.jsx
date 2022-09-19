import Card from "../shared/Card";
import {Link} from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h2>About Pages</h2>
        <h3>This is react App for leaves a feedback.</h3>
        <p>Version: 1.0.0</p>
        <p>
          <Link to={{
            pathname: '/'
          }} style={{color:'red'}}>Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default AboutPage;
