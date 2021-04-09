// import  React from 'react'
// import  ReactDOM from 'react-dom'
// import  styled, { createGlobalStyle} from 'styled-components'
fronthub('requireMicrofrontend', 'list-template-toggle', function (hub) {
  hub.renderAt(document.getElementById('root'))
}, function(err) {
  console.log(err)
})

// fronthub('requireMicrofrontend', 'playground-c-main', function (hub) {
//   hub.renderAt(document.getElementById('microfrontend-b'))
// })