
 /* eslint-disable */

import faunadb from 'faunadb';
    q = faunadb.query;
    var client = new faunadb.Client({ secret: 'fnAC4i60vqACBLqo7bS6hbXT9ZQsfMy20oLVIiHV' });

/* export our lambda function as named "handler" export */
// exports.handler = (event, context, callback) => {
  /* parse the string body into a useable JS object */
  // const data = JSON.parse(event.body)
  // console.log("Function `todo-create` invoked", data)
  // const todoItem = {
  //   data: data
  // }
  // /* construct the fauna query */
  // return client.query(q.Create(q.Ref("classes/first_class"), todoItem))
  // .then((response) => {
  //   console.log("success", response)
  //   /* Success! return the response with statusCode 200 */
  //   return callback(null, {
  //     statusCode: 200,
  //     body: JSON.stringify(response)
  //   })
  // }).catch((error) => {
  //   console.log("error", error)
  //   /* Error! return the error with statusCode 400 */
  //   return callback(null, {
  //     statusCode: 400,
  //     body: JSON.stringify(error)
  //   })
  // })
// }

export function handler(event, context, callback) {
  console.log(event.body)
  var data = JSON.parse(event.body);
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({msg: data})
  })
}
