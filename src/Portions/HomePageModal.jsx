import React from 'react';

function HomePageModal(props) {
    const {publishModal,postSend,text,setText,publish} = props
    return (
        <>
            {publishModal && (
        <div className="publish__modal" onClick={postSend}>
          <div className="create__post" onClick={e=>e.stopPropagation()}>
            <div className="field_text">
              <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="form-control"
              />
              <button className="btn btn_creator" onClick={publish}>
                <i className="material-icons">pen</i>
              </button>
            </div>
          </div>
        </div>
      )} 
        </>
    );
}

export default HomePageModal;