/*jshint esversion: 6, asi: true, laxbreak: true*/

const modalReducer = (state = {
    title: "",
    body: "",
    status: true
}, action) =>{

    switch(action.type){
        case "SHOW_MODAL":{
            console.log({...action.payload})
            return {...action.payload, status: true};
        }
        case "HIDE_MODAL":{

            return {...action.payload, status: false};
        }
        default:
            return state
    }
}

const combineReducers = reducers => (state = {}, action) => Object.keys(reducers).reduce((nextState, key) => {
  nextState[key] = reducers[key](state[key],action);
  return nextState;
}, {});
const rootReducer = combineReducers({ modalReducer });
const store = Redux.createStore(rootReducer);

const provider = state => {
  const { status, title, body} = state.modalReducer
    if(state.modalReducer.status === true){
  const stateView = `
    <div id="pcApp" class="container" data-current=false>
        <section>
            <h2>${title}</h2>
            <p>${body}</p>
            <button onclick="{
             store.dispatch({ type: 'HIDE_MODAL'});

             }"><span>PRESS [E] Key</span></button>
        </section>
    </div>
  `;
  return `
      ${stateView}
  `;
  }else{
      return ``
    
  }
}

const renderContainer = document.getElementById('render');

const render = () => { renderContainer.innerHTML = provider(store.getState()); }
store.subscribe(render);
render();
