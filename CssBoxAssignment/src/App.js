import Header from './components/header';
import './App.css';

import Box from './components/box';
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Box
          heading="Define"

          paragraph="Define means to describe or state exactly the nature, scope, or meaning of something. In order to create a definition, one must have a close understanding of the thing whose name is being defined."

          className={"boxFirst"}
        />
        <Box className={"boxSecond"}
          heading="Decribe"
          paragraph="Describe means to give a detailed verbal account of something. A description will list some of the properties or features of a thing. We often describe things so that the readers/listeners recognize or identify it. "
        />
        <Box className={"boxThird"}
          heading="Delineate"
          paragraph="To describe, portray, or set forth with accuracy or in detail. delineate a character in the story. delineate the steps to be taken by the government. : to indicate or represent by drawn or painted lines. : to mark the outline of."
        />
      </div>
    </>
  );
}

export default App;
