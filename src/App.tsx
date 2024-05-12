import './App.scss';
import Education from './component/edutation/education';
import Information from './component/infomation/infomation';
import Promise from './component/promise/promise';
import Skill from './component/skill/skill';
import Work from './component/work/work';

function App() {
  return (
    <>
      <div className="container">
        <section>
          <Information />
        </section>
        <section>
          <Education />
        </section>
        <section>
          <Skill />
        </section>
        <section>
          <Work />
        </section>
        <section>
          <Promise />
        </section>
      </div>
      {/* <div className="perview">
        <div className="box"><Information /></div>
      </div>
      <div className="perview">
        <div className="box"><Education /></div>
      </div> */}
    </>
  );
}

export default App;
